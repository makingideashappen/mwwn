import {RiArticleLine} from 'react-icons/ri'

export default {
    name: "technicalInfo",
    title: "Technical Info",
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
      { title: "Category", name: "category", type: "string" },
      { title: "Heading", name: "heading", type: "string" },
      { title: "Kicker", name: "kicker", type: "string" },
      { title: "Image", name: "image", type: "image" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        title: "Files",
        name: "files",
        type: "file",
      },
    ],
  }
  