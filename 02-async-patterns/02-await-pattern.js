const fs = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if(err) {
        reject(err.message);
      }
      else {
        resolve(data);
      }
    });
  });
};

getText('./content/first.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err));