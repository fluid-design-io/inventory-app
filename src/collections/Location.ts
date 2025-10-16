import type { CollectionConfig } from 'payload'

export const Location: CollectionConfig = {
  slug: 'locations',
  admin: {
    useAsTitle: 'name',
    group: 'Metadata',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'state',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
      defaultValue: 'United States',
    },
    {
      name: 'zip',
      type: 'text',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'description',
      type: 'richText',
      
    },
  ],
}
