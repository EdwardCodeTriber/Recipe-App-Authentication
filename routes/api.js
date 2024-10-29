import express from "express"
import receipeController from "../controllers/receipeController.js";
import userController from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js"
//Router paths to execute endpoins
const router = express.Router()
//Routes
router.post("/user", userController.registerUser)
router.post("/user/login", userController.loginUser)
router.post("/reciepe", protect, receipeController.createReceipe)
router.get("/reciepe", protect, receipeController.getReceipes)
router.get("/reciepe/:id", protect, receipeController.getReceipe)
router.delete("/reciepe/:id", protect, receipeController.deleteReceipe)
router.put("/reciepe/:id", protect, receipeController.updateReceipe)

export default router;