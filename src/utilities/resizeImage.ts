import sharp from 'sharp';
import fileSystem from 'fs';
import path, { resolve } from 'path';

export default async (name: string, width: number, height: number): Promise<{ response: string; reject: string }> => {
    try {
        let pathIn = path.resolve('./', 'src', 'images', `${name}.jpg`);
        let pathOut = path.resolve('./', 'src', 'imageResize');
        await sharp(pathIn)
            .resize(+width, +height)
            .extend({
                top: 20,
                bottom: 20,
                left: 20,
                right: 20,
                background: '#e5e5e5'
            })
            .toFile(path.resolve(`${pathOut}`, `${name}-${width}-${height}.jpg`));
        return {
            response: path.resolve(`${pathOut}`, `${name}-${width}-${height}.jpg`) as string,
            reject: "error " as string
        };
    } catch (reject) {
        return {
            response: "" as string,
            reject: reject as string
        };
    }


}
