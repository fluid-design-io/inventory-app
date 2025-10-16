import type { CollectionConfig } from 'payload'

export const Item: CollectionConfig = {
  slug: 'items',
  admin: {
    useAsTitle: 'fullName',
    group: 'Inventory List',
  },
  fields: [
    {
      name: 'serial',
      type: 'text',
    },
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'family',
      type: 'relationship',
      relationTo: 'families',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Available',
          value: 'available',
        },
        {
          label: 'Unavailable',
          value: 'unavailable',
        },
        {
          label: 'Shipped',
          value: 'shipped',
        },
        {
          label: 'Lent',
          value: 'lent',
        },
        {
          label: 'Unknown',
          value: 'unknown',
        },
      ],
      defaultValue: 'available',
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
    },
    {
      name: 'notes',
      type: 'richText',
      
    },
    {
      name: 'updatedBy',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: (props) => props.user?.id,
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      defaultValue: (props) => props.user?.id,
    },
  ],
}
