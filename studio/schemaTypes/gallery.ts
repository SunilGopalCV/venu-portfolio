export default {
  name: 'gallery',
  type: 'document',
  title: 'Gallery & Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
      description: 'e.g., Grand Hyatt Wedding or Sunburn Concert',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Content Type',
      type: 'string',
      initialValue: 'photo',
      options: {
        list: [
          {title: 'Photography', value: 'photo'},
          {title: 'Videography', value: 'video'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'category',
      title: 'Event Category',
      type: 'string',
      options: {
        list: [
          {title: 'Marriage', value: 'marriage'},
          {title: 'Engagement', value: 'engagement'},
          {title: 'Birthday', value: 'birthday'},
          {title: 'Social Event', value: 'social'},
          {title: 'Inauguration', value: 'inauguration'},
          {title: 'Concert', value: 'concert'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM YYYY',
      },
    },
    {
      name: 'featured',
      title: 'Feature on Homepage?',
      type: 'boolean',
      initialValue: false,
      description:
        'If enabled, this will appear in the "Featured Work" section of the landing page.',
    },
    {
      name: 'coverImage',
      type: 'cloudinary.asset',
      title: 'Main Cover Image',
      description: 'High-quality thumbnail used for the website grids.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Project Story',
      type: 'text',
      rows: 3,
      description:
        'A brief story about the shoot, the gear used (Sony A7M4/Nikon D850), or the experience.',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Gallery Photos',
      of: [{type: 'cloudinary.asset'}],
      hidden: ({document}: any) => document?.type !== 'photo',
      description: 'Upload all photos for this gallery here.',
    },
    {
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo/Cloudinary)',
      type: 'url',
      hidden: ({document}: any) => document?.type !== 'video',
      description: 'Paste the link to the edited video coverage.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'coverImage',
    },
  },
}
