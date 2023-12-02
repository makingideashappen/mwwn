import {RiArticleLine} from 'react-icons/ri'

export default {
    name: "blogPost",
    title: "Blog Post",
    type: "document",
    icon: RiArticleLine,
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: (Rule) => Rule.required().error('A published date is required'),
        options: {
          dateFormat: 'DD.MM.YYYY',
          timeFormat: 'HH:mm',
          timeStep: 15,
          calendarTodayLabel: 'Today',
        },
      },
      { title: "Heading", name: "heading", type: "string" },
      { title: "Kicker", name: "kicker", type: "string" },
      { title: "Image", name: "image", type: "image" },
      { title: "Text", name: "text", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  }
  