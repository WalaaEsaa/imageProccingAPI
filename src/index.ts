import express from 'express';
import { Router, Request, Response } from 'express';
import path from 'path';
import sharp from 'sharp';
import resizeImage from './utilities/resizeImage';
import newSize from "./utilities/resizeImage";


//intialize new server
const app = express();
const port = 3005;

//root: URL has to be requested to get the image (get image from server)

app.get('/api', (req, res) => {
    res.send('hi');

});

//array of image found
let imagArr = ['img1', 'img2', 'img3'];


//root: URL has to be requested to get the image (get image from server)
app.get('/image', async (req, res) => {

    const qName = req.query.name as string;
    const qWidth = req.query.width as string;
    const qHeight = req.query.height as string;

    // const imgPath = path.resolve('./', 'images', `${qName}.jpg`);
    let height = parseInt(qHeight);
    let width = parseInt(qWidth);
    // user not enter image name
    if (qName === undefined) {
        res.status(400)
        return res.send('please enter name of image')
    }
    // user  enter wrong image name

    const name = imagArr.find(element => element = `${qName}`);
    if (!name) {
        return res.send(`image not found ${qName}${height}${width} `);

    } else {
        const { response, reject } = await resizeImage(qName, width, height);
        if (!response)
            return res.status(400).json(response);
        return res.sendFile(response);
    }

});

// listen server to port 4000
app.listen(port, () => console.log(`listinig port ${port}`));

export default app;
