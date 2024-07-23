document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (fileExtension === 'txt') {
            // Read text or Notepad file
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('fileContent').textContent = e.target.result;
            };
            reader.readAsText(file);
        } else if (fileExtension === 'docx') {
            // Read Word document
            const reader = new FileReader();
            reader.onload = function(e) {
                const arrayBuffer = e.target.result;
                mammoth.extractRawText({ arrayBuffer: arrayBuffer })
                    .then(function(result) {
                        document.getElementById('fileContent').textContent = result.value;
                    })
                    .catch(function(error) {
                        document.getElementById('fileContent').textContent = "Error reading Word document: " + error.message;
                    });
            };
            reader.readAsArrayBuffer(file);
        } else {
            document.getElementById('fileContent').textContent = "Unsupported file type.";
        }
    } else {
        document.getElementById('fileContent').textContent = "No file selected.";
    }
});
