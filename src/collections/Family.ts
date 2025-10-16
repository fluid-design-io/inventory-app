import type { CollectionConfig } from 'payload'

export const Family: CollectionConfig = {
  slug: 'families',
  admin: {
    useAsTitle: 'name',
    group: 'Metadata',
    description: 'Families are the categories of items in the inventory. (C9100, C9300, C9500, etc.)',
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {label: "Family Information", fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'partNumber',
      type: 'text',
    },
    {
      name: 'fullName',
      type: 'text',
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'description',
      type: 'richText',
      
    },
    ]},
    {
      label: "Items",
      fields: [
        {
          name: "items", // The field name
          // @see https://payloadcms.com/docs/fields/join
          type: "join",
          // Tell Payload where to look
          collection: "items", // The slug of your Inventory collection
          on: "family", // The relationship field in Inventory
          admin: {
            // Control what columns show up in the joined table within the admin
            defaultColumns: ["fullName", "serial", "status"],
          },
        },
      ],
    },
  ]}
  ],
}
