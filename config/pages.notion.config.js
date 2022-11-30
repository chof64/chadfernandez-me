module.exports = {
  sections: [
    {
      name: "blog",
      notion_id: "05c11ebca904498087fad3ad5d5e53d6",
      slug: "/blog",
      notion_conditions: {
        filter: {
          property: "Status",
          status: { does_not_equal: "Draft" },
        },
        sorts: [
          { property: "Status", direction: "descending" },
          { timestamp: "created_time", direction: "descending" },
        ],
      },
    },
  ],
};
