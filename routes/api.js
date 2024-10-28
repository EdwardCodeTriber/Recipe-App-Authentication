import express from "express"
import receipeController from "../controllers/receipeController.js";
//Router paths to execute endpoins
const router = express.Router()
//Routes
router.post("/reciepe", receipeController.createReceipe)
router.get("/reciepe", receipeController.getReceipes)
router.get("/reciepe/:id", receipeController.getReceipe)
router.delete("/reciepe/:id", receipeController.deleteReceipe)
router.put("/reciepe/:id", receipeController.updateReceipe)

export default router;