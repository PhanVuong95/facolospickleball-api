import express from "express";
import multer from "multer";
import { listPost, createPost, exportPostsToExcel } from "./postController";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/posts", listPost);
router.post("/posts", createPost);
router.get("/export-posts", exportPostsToExcel);

export default router;
