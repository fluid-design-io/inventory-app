import { postgresAdapter } from '@payloadcms/db-postgres'
import { BoldFeature, FixedToolbarFeature, HeadingFeature, ItalicFeature, InlineToolbarFeature, lexicalEditor, ParagraphFeature, UnderlineFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Brand } from './collections/Brand'
import { Location } from './collections/Location'
import { Family } from './collections/Family'
import { Item } from './collections/Item'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Simplified Lexical editor configuration with only essential features


export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Brand, Location, Family, Item],
  editor: lexicalEditor({
    features: ({ rootFeatures }) => [
      ...rootFeatures,
      FixedToolbarFeature(),
      InlineToolbarFeature(),
      ParagraphFeature(),
      UnderlineFeature(),
      HeadingFeature({
        enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'],
      }),
      BoldFeature(),
      ItalicFeature(),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
