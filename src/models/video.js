import mongoose from "mongoose";

// 데이터의 형식을 지정
const videoSchema = new mongoose.Schema({
  title: String, // title: {type: String}으로 적는 것과 동일
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// model's name should be capitalized
const Video = mongoose.model("Video", videoSchema);
export default Video;
