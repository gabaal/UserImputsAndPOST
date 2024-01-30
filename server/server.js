import express from "express";
import cors from "cors";

const app = express();
// const cors = cors();
app.use(express.json());
app.use(cors());

app.post("/messages", function (req, res) {
  console.log("req.body", req.body);
  res.json({ status: "Message received!" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
