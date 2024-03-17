import { relations, sql } from "drizzle-orm"
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  text,
  boolean,
  int,
  datetime,
} from "drizzle-orm/mysql-core"

import { createInsertSchema, createSelectSchema } from "drizzle-zod"

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

// Schema for inserting a component - used to validate API requests
export const insertComponentSchema = createInsertSchema(components)

// Schema for selecting a component - used to validate API responses
export const selectComponentSchema = createSelectSchema(components)

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
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    variantsCount: int("variants_count").default(0),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (block) => ({
    slugIndex: index("slug_idx").on(block.slug),
    nameIndex: index("name_idx").on(block.name),
    categoryIndex: index("category_idx").on(block.category),
  }),
)

export const insertBlockSchema = createInsertSchema(blocks)
export const selectBlockSchema = createSelectSchema(blocks)

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
    fields: [blockVariants.blockSlug],
    references: [blocks.slug],
  }),
}))

export const insertBlockVariantSchema = createInsertSchema(blockVariants)
export const selectBlockVariantSchema = createSelectSchema(blockVariants)

export const users = createTable(
  "user",
  {
    id: varchar("id", { length: 21 }).primaryKey(),
    email: varchar("email", { length: 255 }).unique().notNull(),
    hashedPassword: varchar("hashed_password", { length: 255 }).notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    licenseKey: varchar("license_key", { length: 128 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
  },
  (user) => ({
    emailIndex: index("email_idx").on(user.email),
  }),
)
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export const insertUserSchema = createInsertSchema(users)
export const selectUserSchema = createSelectSchema(users)

export const sessions = createTable(
  "sessions",
  {
    id: varchar("id", { length: 255 }).primaryKey(),
    userId: varchar("user_id", { length: 21 }).notNull(),
    expiresAt: datetime("expires_at").notNull(),
  },
  (t) => ({
    userIdx: index("user_idx").on(t.userId),
  }),
)

export const passwordResetTokens = createTable(
  "password_reset_tokens",
  {
    id: varchar("id", { length: 40 }).primaryKey(),
    userId: varchar("user_id", { length: 21 }).notNull(),
    expiresAt: datetime("expires_at").notNull(),
  },
  (t) => ({
    userIdx: index("user_idx").on(t.userId),
  }),
)
