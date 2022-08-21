import express from "express";
import { Router, Request, Response } from "express";
import resizeImage from "./utilities/resizeImage";
import * as dotenv from "dotenv";
import "dotenv/config";

dotenv.config();

//intialize new server
const app = express();
const port = 3005;

//root: URL has to be requested to get the image (get image from server)

app.get("/api", (req, res) => {
  res.send("hi ");
});

//root: URL has to be requested to get the image (get image from server)
app.get("/image", async (req, res): Promise<any> => {
  const qName = req.query.name as string;
  const qWidth = req.query.width as string;
  const qHeight = req.query.height as string;

  let height = parseInt(qHeight);
  let width = parseInt(qWidth);

  let listImg = ["img1", "img2", "img3"];

  if (!qName || !width || !height || +width <= 0 || +height <= 0) {
    return res.status(400).json({ msg: " input wrong" });
  }

  const { response, reject } = await resizeImage(qName, width, height);
  if (!listImg.includes(qName))
    return res.status(400).json({ msg: "the name of image is wrong" });
  return res.sendFile(response);
});

// listen server to port 4000
app.listen(port, () => console.log(`listinig port ${port}`));

export default app;
