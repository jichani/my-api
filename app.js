// app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swagger");
const animalRoutes = require("./routes/animal");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/animals", animalRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
