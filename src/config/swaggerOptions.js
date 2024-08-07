const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee Evaluation API",
      version: "1.0.0",
      description: "A simple API for managing employee evaluations",
      contact: {
        name: "Employee Evaluation API",
        email: "example@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/controllers/*.js"],
};

module.exports = options;
