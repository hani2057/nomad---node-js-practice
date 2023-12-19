import express from "express";
import {
  upload,
  watch,
  deleteVideo,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("upload", upload);
videoRouter.get("/:id(\\d+)", watch); // \d+ 부분은 정규표현식(숫자-digit-만)
videoRouter.get("/:id/edit", getEdit);
videoRouter.post("/:id/edit", postEdit);
videoRouter.get("/:id/delete", deleteVideo);

export default videoRouter;
