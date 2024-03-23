import { relations, sql } from "drizzle-orm"
import {
  serial,
  index,
  pgTableCreator,
  timestamp,
  varchar,
  text,
  boolean,
  integer,
} from "drizzle-orm/pg-core"

export const createTable = pgTableCreator((name) => name)

export const blocks = createTable(
  "block",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    slug: varchar("slug", { length: 256 }).unique().notNull(),
    description: text("description").default("").notNull(),
    imagePath: text("image_path").default("").notNull(),
    category: varchar("category", { length: 256 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    variantsCount: integer("variants_count").default(0).notNull(),
    updatedAt: timestamp("updated_at"),
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
    id: serial("id").primaryKey(),
    blockSlug: varchar("block_slug", { length: 256 }).notNull(),
    variantName: varchar("variant_name", { length: 256 }).notNull(),
    isFree: boolean("is_free").default(false).notNull(),
    codeSnippet: text("code_snippet").default(""),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
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

export const users = createTable(
  "user",
  {
    id: serial("id").primaryKey(),
    email: varchar("email", { length: 256 }).notNull(),
    isActive: boolean("is_active").default(true).notNull(),
    licenseKey: varchar("license_key", { length: 128 }),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at"),
  },
  (user) => ({
    emailIndex: index("email_idx").on(user.email),
  }),
)
