import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// creamos el erutador 
const router = Router();

// configuramos respuesta desde aerver metodo http get
router.get("/", categoriaController.getCategorias); //para crud - read
router.post("/", categoriaController.postCategorias); //para crud - create

// Ruta que recibe un parametro
router.get("/:id", categoriaController.getCategory); //para crud - read 1 sola fila

// Ruta que recibe parametro id de categoria a borrar
router.delete("/:id", categoriaController.deleteCategory); //para delete - read 1 sola fila

// hacemos disponible a router en toda la app
export default router;