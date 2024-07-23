document.getElementById('upload-button').addEventListener('click', function() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.getElementById('upload-status').textContent = 'File uploaded: ' + file.name;
        };
        
        reader.readAsDataURL(file);
    } else {
        document.getElementById('upload-status').textContent = 'No file selected.';
    }
});
