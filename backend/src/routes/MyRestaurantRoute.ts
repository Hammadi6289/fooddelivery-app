import express from "express";
//import { jwtCheck, jwtParse } from "../middleware/auth";
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mbs
  },
});

// /api/my/restaurant
router.post(
  "/",
  upload.single("imageFile"),
  MyRestaurantController.createMyRestaurant
);

export default router;
