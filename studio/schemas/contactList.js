export default {
    name: "contactList",
    title: "Contact List",
    type: "document",
    fields: [
      { title: "Kicker", name: "kicker", type: "string" },
      { title: "Heading", name: "heading", type: "string" },
      { title: "Text", name: "text", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "contactDetail" }],
          },
        ],
      },
    ],
  }
  