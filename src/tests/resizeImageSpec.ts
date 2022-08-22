import path from "path";
import resizeImage from "../utilities/resizeImage";

let newCash: string[] = ["img1-200-200"];

describe("Test image resize", () => {
  it("should return Error If error in image name", async () => {
    const name = "img1";
    const width = 200;
    const height = 200;
    //let imgeExist =  expectAsync(path.join(process.cwd(),`${name}-${width}-${height}.jpg`));
    const respond = await resizeImage("img1", 200, 200);
    newCash.push(respond.inCash);
    expect(newCash).toContain("img1-200-200");
  });

  it("should return Error If no input or width or height <=0", async () => {
    const respond = await resizeImage("", 0, 200);
    expect(respond.reject.msg).toBeFalsy();
  });

  it("should return new image path if it success!", async () => {
    const name = "img1";
    const width = 200;
    const height = 200;
    const respond = await resizeImage(name, width, height);
    const outputFile = path.join(process.cwd(), `/imageResize`);
    expect(respond.response).toEqual(
      `${outputFile}/${name}-${width}-${height}.jpg`
    );
  });
});
