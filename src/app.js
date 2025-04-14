// importamos al framework espress
import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"

// asignamos a app toda la funcionalidad para mi server web 
const app = express();

// setear un puerto a mi web server
app.set("port",7000)

app.use(cors());
// routes
app.use("/api/categorias",categoriaRoutes)

// hacemos disponible a mi server app para toda la aplicacion 
export default app;