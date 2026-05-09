import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { cloudinarySchemaPlugin } from 'sanity-plugin-cloudinary'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Venu-portfolio-studio',

  projectId: 'v02ulvi7',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), cloudinarySchemaPlugin()],

  schema: {
    types: schemaTypes,
  },
})
