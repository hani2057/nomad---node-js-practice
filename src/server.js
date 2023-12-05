import express from "express";

const PORT = 4000;

// express 앱 만들기
const app = express();

// express app의 get 메서드에 전달되는 콜백함수는 req, res 객체를 가짐
const handleHome = (req, res) => {
  // res 객체의 send 메서드는 응답하고 end 메서드는 종료시킴
  // string, html, json 등 응답할 수 있음(express 공식페이지 참고)
  return res.send("response!");
  // return res.end()
};

const handleLogin = (req, res) => {
  return res.send("login here.");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`Serve listening on port http://localhost:${PORT}`);

// app이 특정 포트를 듣게 하고 콜백함수 전달
app.listen(PORT, handleListening);
