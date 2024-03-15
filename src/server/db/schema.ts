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
    slug: varchar("slug", { length: 256 }).unique().notNull(),
    description: text("description").default("").notNull(),
    imagePath: text("imagePath").default("").notNull(),
    category: varchar("category", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`),
      // .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (block) => ({
    slugIndex: index("slug_idx").on(block.slug),
    nameIndex: index("name_idx").on(block.name),
    categoryIndex: index("category_idx").on(block.category),
  }),
)

export const blockVariants = createTable(
  "block_variant",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    blockSlug: varchar("block_slug", { length: 256 }).notNull(),
    variantName: varchar("variant_name", { length: 256 }).notNull(),
    isFree: boolean("is_free").default(false).notNull(),
    codeSnippet: text("code_snippet").default("").notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (variant) => ({
    blockSlugIndex: index("block_slug_idx").on(variant.blockSlug),
    variantNameIndex: index("variant_name_idx").on(variant.variantName),
  }),
)

export const blockVariantsRelation = relations(blockVariants, ({ one }) => ({
  block: one(blocks, {
    fields: [blockVariants.blockSlug], // Use blockSlug for relation
    references: [blocks.slug], // Reference the slug field in blocks
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
