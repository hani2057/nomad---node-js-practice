import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("upload", upload);
videoRouter.get("/:id(\\d+)", see); // \d+ 부분은 정규표현식(숫자-digit-만)
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
