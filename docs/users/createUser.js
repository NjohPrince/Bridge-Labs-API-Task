module.exports = {
  post: {
    tags: ["Registration Route"],
    description: "Register User",
    operationId: "registerUser",
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
      201: {
        description: "Account registered successfully",
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
