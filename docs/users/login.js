module.exports = {
  post: {
    tags: ["Login Route"],
    description: "Login User",
    operationId: "loginUser",
    parameters: [],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/UserInput",
          },
        },
      },
    },
    responses: {
      200: {
        description: "User login successfully",
      },
      400: {
        description: "Bad request",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
