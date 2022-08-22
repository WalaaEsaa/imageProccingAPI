import fileSystem from "fs";
import sharp from "sharp";
import path, { resolve } from "path";

export default async (
  name: string,
  width: number,
  height: number
): Promise<{ response: string; reject: { msg: string }; inCash: string }> => {
  let pathIn = path.join(process.cwd(), `images/${name}.jpg`);
  let pathOut = path.join(process.cwd(), "imageResize");

  if (!fileSystem.existsSync(pathOut)) fileSystem.mkdirSync(pathOut);

  try {
    await sharp(pathIn)
      .resize(+width, +height)
      .extend({
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
        background: "#e5e5e5",
      })
      .toFile(`${pathOut}/${name}-${width}-${height}.jpg`);

    return {
      response: `${pathOut}/${name}-${width}-${height}.jpg` as string,
      reject: {} as { msg: string },
      inCash: `${name}-${width}-${height}.jpg` as string,
    };
  } catch (reject) {
    return {
      response: "" as string,
      inCash: `${name}-${width}-${height}.jpg` as string,
      reject: reject as { msg: string },
    };
  }
};
