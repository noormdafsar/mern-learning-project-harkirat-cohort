const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/read-file/:fileName', (req, res) => {
//   const filePath = path.join(__dirname, 'example.txt');
const name = req.params.fileName;
    fs.readFile(name, 'utf8', (err, data) => {
        if (err) {
        return res.status(500).send('Error reading file');
        }
        res.json({
            fileName: name,
            data: data
        })
    });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});