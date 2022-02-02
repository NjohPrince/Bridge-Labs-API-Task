module.exports = {
  components: {
    schemas: {
      // Post model
      Post: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Post identification number",
            example: "6ec23efab556700cab",
          },
          name: {
            type: "string",
            description: "Posts title",
            example: "Coding in JavaScript",
          },
          file: {
            type: "image file upload",
            description: "Image of post",
          },
        },
      },
      // User model
      User: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "User's name",
            example: "John Magdoe",
          },
        },
      },
    },
  },
};
