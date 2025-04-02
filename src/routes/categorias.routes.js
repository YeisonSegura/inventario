import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

// creamos el erutador 
const router = Router();

// configuramos respuesta desde aerver metodo http get
router.get("/", categoriaController.getCategorias )

// hacemos disponible a router en toda la app
export default router;