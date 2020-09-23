const args = process.argv;

const request = require('request');
const fs = require('fs');


const getPage = function (url, fileName) {
  request(url, (error, response, body) => {
  
    fs.writeFile(fileName, body, (error) => {
      if (error) {
        console.log(`Failed to download file to ${fileName}: error occured.`);
        return
      }
      let fileSize = fs.statSync(fileName);
      console.log(`Success! Downloaded and saved ${fileSize.size} bytes to ${fileName}`);
    })
  
  });
}

getPage(args[2], args[3]);


// .on('response', (response) => console.log(response));