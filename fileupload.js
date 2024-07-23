document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('upload_endpoint', { // Replace 'upload_endpoint' with your server URL
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = 'File uploaded successfully!';
            console.log('Success:', data);
        })
        .catch(error => {
            document.getElementById('result').innerText = 'File upload failed.';
            console.error('Error:', error);
        });
    } else {
        document.getElementById('result').innerText = 'No file selected.';
    }
});




// const express = require('express');
// const multer = require('multer');
// const path = require('path');
// const app = express();

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// app.post('/upload', upload.single('file'), (req, res) => {
//     res.json({ message: 'File uploaded successfully', file: req.file });
// });

// app.listen(3000, () => {
//     console.log('Server started on http://localhost:3000');
// });


fetch("upload.json").then((a)=>console.log(a))
// .then((a)=>console.log(a))
// 