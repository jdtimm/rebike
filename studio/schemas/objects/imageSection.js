export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'layout',
      type: 'string',
      title: 'Layout',
      initialValue: 'left',
      options: {
        list: [
          'left',
          'right',
          'center',
          'top-left',
          'top-right',
          'top-center',
          'bottom-left',
          'bottom-right',
          'bottom-center'
        ]
      }
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image'
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media
      }
    }
  }
}
