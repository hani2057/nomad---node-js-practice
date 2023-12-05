import express from "express";

const PORT = 4000;

// express 앱 만들기
const app = express();

// express app의 모든 컨트롤러는 req, res 객체와 next 함수를 가짐
// next를 호출하면 해당 컨트롤러가 호출된 함수의 다음 컨트롤러(콜백함수)가 호출됨
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  console.log("Allowed, you may continue.");
  next();
};

const handleHome = (req, res) => {
  return res.end();
};

const handleLogin = (req, res) => {
  return res.send("login here.");
};

// 이 함수는 호출되지 않는다(privateMiddleware에서 프로세스가 중단됨)
const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

// use 메서드는 모든 route에 적용되는 미들웨어를 제공
// 순서가 중요하다. use 다음 get을 해야 함
app.use(logger);
app.use(privateMiddleware);
// app.use(logger, privateMiddleware); <= 이것도 동작함
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 컨트롤러 전달
app.listen(PORT, handleListening);
