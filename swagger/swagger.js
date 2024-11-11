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
    components: {
      schemas: {
        Animal: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "동물 ID",
              example: 1,
            },
            species: {
              type: "string",
              description: "동물 종류",
              example: "Dog",
            },
            name: {
              type: "string",
              description: "동물 이름",
              example: "Buddy",
            },
            birthDate: {
              type: "string",
              format: "date",
              description: "동물 태어난 날짜",
              example: "2020-05-15",
            },
          },
          required: ["species", "name", "birthDate"],
        },
      },
    },
  },
  apis: ["./routes/*.js"], // API 주석이 포함된 파일 경로
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
