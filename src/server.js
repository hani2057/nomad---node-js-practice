import express from "express";

const PORT = 4000;

// express 앱 만들기
const app = express();

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 콜백함수 전달
app.listen(PORT, handleListening);
