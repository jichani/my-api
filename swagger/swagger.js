// swagger/swagger.js
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Animal Management System",
      version: "1.0.0",
      description: "API documentation for managing animals",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;

swaggerOptions.swaggerDefinition.components = {
  schemas: {
    Animal: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          description: "동물 ID",
        },
        species: {
          type: "string",
          description: "동물 종류",
        },
        name: {
          type: "string",
          description: "동물 이름",
        },
        birthDate: {
          type: "string",
          format: "date",
          description: "동물 태어난 날짜",
        },
      },
    },
  },
};
