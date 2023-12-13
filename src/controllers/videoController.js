export const trending = (req, res) => res.render("home", { pageTitle: "Home" }); // 렌더할 파일명은 띄어쓰기 없이 소문자로 작성
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search video");
export const upload = (req, res) => res.send("Upload video");
export const deleteVideo = (req, res) => res.send("Delete video");
