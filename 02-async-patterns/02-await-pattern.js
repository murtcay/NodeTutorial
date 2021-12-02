// When we do not use util.promisify
const {readFile, writeFile} = require('fs').promises;

// // When we use util.promisify
// const {readFile, writeFile} = require('fs')
// const util = require('util');
// const readFilePromise = util.promisify(fs.readFile);
// const writeFilePromise = util.promisify(fs.writeFile);

const startNew = async () => {  
  try {
    // When we use util.promisify
    // const firstFile = await readFilePromise('./content/first.txt', 'utf8');
    // const secondFile = await readFilePromise('./content/second.txt', 'utf8');

    // await writeFilePromise('./content/result-mind-grenade.txt', 
    // `THIS IS AWESOME: ${firstFile}, ${secondFile} `, 
    // { flag: 'a' }
    // );

    // When we do not use util.promisify
    const firstFile = await readFile('./content/first.txt', 'utf8');
    const secondFile = await readFile('./content/second.txt', 'utf8');
    
    await writeFile('./content/result-mind-grenade.txt', 
    `THIS IS AWESOME: ${firstFile}, ${secondFile} `, 
    { flag: 'a' }
    );
    
    console.log(firstFile, secondFile);

  } catch (err) {
    console.log(err);
  }
}; 

startNew();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, 'utf8', (err, data) => {
//       if(err) {
//         reject(err.message);
//       }
//       else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText('./content/first.txt')
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// const start = async () => {  
//   try {
//     const firstFile = await getText('./content/first.txt');
//     console.log(firstFile);
//   } catch (err) {
//     console.log(err);
//   }
// }; 

// start();