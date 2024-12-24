
import { input } from '@inquirer/prompts';
import fs from "node:fs"
import qr from "qr-image"

const answer = await input({ message: 'Enter your site URL' });

const content = answer;
fs.writeFile('URL.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log("file written successfully")
  }
});


var qr_png = qr.image( content , { type :"png"})

qr_png.pipe(fs.createWriteStream("qr_img.png"))  
