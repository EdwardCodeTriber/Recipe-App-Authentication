import express from "express"
import receipeController from "../controllers/receipeController.js";
import userController from "../controllers/userController.js";
//Router paths to execute endpoins
const router = express.Router()
//Routes
router.post("/user", userController.registerUser)
router.post("/user/login", userController.loginUser)
router.post("/reciepe", receipeController.createReceipe)
router.get("/reciepe", receipeController.getReceipes)
router.get("/reciepe/:id", receipeController.getReceipe)
router.delete("/reciepe/:id", receipeController.deleteReceipe)
router.put("/reciepe/:id", receipeController.updateReceipe)

export default router;