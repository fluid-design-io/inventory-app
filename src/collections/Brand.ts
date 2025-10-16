import type { CollectionConfig } from 'payload'

export const Brand: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'name',
    group: 'Metadata',
    description: 'Brands are the manufacturers of the families in the inventory. (Cisco, Dell, Microsoft, etc.)',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    // add a join field to the items collection
    {
      name: "brandFamily", // The field name
      type: "join",
      collection: "families", // The slug of your Inventory collection
      on: "brand", // The relationship field in Inventory
      admin: {
        // Control what columns show up in the joined table within the admin
        defaultColumns: ["name"],
      },
    },
  ],
}
