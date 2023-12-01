export default {
    name: "homepageHeroList",
    title: "Homepage Hero List",
    type: "document",
    fields: [
    { title: "Text", name: "text", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "homepageHero" }],
          },
        ],
      },
    ],
  }
  