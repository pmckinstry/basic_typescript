import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("basic typescript/express project");
});
app.listen(port, (err: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
})