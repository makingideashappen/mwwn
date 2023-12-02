export default {
    name: "contactDetailList",
    title: "Contact Detail List",
    type: "document",
    fields: [
      { title: "Heading", name: "heading", type: "string" },
      { title: "Kicker", name: "kicker", type: "string" },
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
  