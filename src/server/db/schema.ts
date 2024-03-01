// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm"
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  text,
  boolean,
} from "drizzle-orm/mysql-core"

export const createTable = mysqlTableCreator((name) => name)


export const components = createTable(
  "component",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    description: text("description"),
    category: varchar("category", { length: 256 }).notNull(),
    codeSnippet: text("code_snippet").notNull(),
    isFree: boolean("is_free").default(false),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (component) => ({
    nameIndex: index("name_idx").on(component.name),
    categoryIndex: index("category_idx").on(component.category),
  }),
)
export const blocks = createTable(
  "block",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    description: text("description").notNull(),
    // imagePath: text("imagePath").notNull(),
    category: varchar("category", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (block) => ({
    nameIndex: index("name_idx").on(block.name),
    categoryIndex: index("category_idx").on(block.category),
  }),
)
export const blocksRelations = relations(blocks, ({ many }) => ({
  blockVariants: many(blockVariants),
}))

export const blockVariants = createTable(
  "block_variant",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    blockId: bigint("block_id", { mode: "number" }).notNull(),
    variantName: varchar("variant_name", { length: 256 }).notNull(),
    isFree: boolean("is_free").default(false).notNull(),
    codeSnippet: text("code_snippet"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (variant) => ({
    blockIndex: index("block_idx").on(variant.blockId),
    variantNameIndex: index("variant_name_idx").on(variant.variantName),
  }),
)

export const blockVariantsRelation = relations(blockVariants, ({ one }) => ({
  block: one(blocks, {
    fields: [blockVariants.blockId],
    references: [blocks.id],
  }),
}))

export const users = createTable(
  "user",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    email: varchar("email", { length: 256 }).notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    licenseKey: varchar("license_key", { length: 128 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (user) => ({
    emailIndex: index("email_idx").on(user.email),
  }),
)
