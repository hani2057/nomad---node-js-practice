import express from "express";

const PORT = 4000;

// express 앱 만들기
const app = express();

// express app의 모든 컨트롤러는 req, res 객체와 next 함수를 가짐
// next를 호출하면 해당 컨트롤러가 호출된 함수의 다음 컨트롤러(콜백함수)가 호출됨
const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
  next();
};

const handleHome = (req, res, next) => {
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("login here.");
};

app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 콜백함수 전달
app.listen(PORT, handleListening);
