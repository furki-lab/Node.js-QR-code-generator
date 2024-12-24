/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
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