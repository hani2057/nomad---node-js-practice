import mongoose from "mongoose";

// mongodb의 url과 연결(mongod 명령어로 확인)하고 db의 이름을 명시해준다.
mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

// on은 이벤트 발생시마다 콜백함수 실행, once는 이벤트 발생 최초 한 번만 콜백함수 실행
db.on("error", (err) => console.log("db error", err));
db.once("open", () => console.log("Connected to DB"));
