export default {
  name: 'gallery',
  type: 'document',
  title: 'Photo Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Gallery Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'URL Slug',
      options: { source: 'title' },
      description: 'Generates the web address (e.g., /gallery/weddings)',
    },
    {
      name: 'coverImage',
      type: 'cloudinary.asset',
      title: 'Cover Image',
      description: 'The main thumbnail image for this gallery',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Gallery Images',
      of: [{ type: 'cloudinary.asset' }],
      description: 'Upload all the high-res photos for this gallery here',
    },
  ],
}