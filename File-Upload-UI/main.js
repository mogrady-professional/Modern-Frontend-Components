// Selecting all required elements on the page

const dropArea = document.querySelector(".drag-area");
dragText = dropArea.querySelector("header");
button = dropArea.querySelector("button");
input = dropArea.querySelector("input");

let file; // gloval variable used inside multiple functions

button.onclick = () => {
    input.click(); //if user clicks on the button the input also is clicked
}

input.addEventListener("change", function() {
    //- if user trys to upload more than one file, only upload the first selected file
    file = this.files[0];
    showFile(); //calling function
    dropArea.classList.add("active");
})


// if user drags file over the DropArea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault(); //  prevent default behavior
    // console.log("File dragged over the area");
    dropArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
});

// if user removes the file from the DropArea
dropArea.addEventListener("dragleave", () => {
    // console.log("File is outside the area");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag and Drop to Upload File";
});


// if user drops file on the DropArea
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //  prevent default behavior
    // console.log("File is dropped on the DropArea");
    //Getting user select file and [0] - if user trys to upload more than one file, only upload the first selected file
    file = event.dataTransfer.files[0];
    showFile(); //calling function
});

function showFile() {
    let fileType = file.type;
    // console.log(fileType);// log the type of file to the console

    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; // array of allowed image file extensions
    if (validExtensions.includes(fileType)) { // if user drops an image file
        // console.log("This is an Image File");
        let fileReader = new FileReader(); // creating new FileReader object
        fileReader.onload = () => {
            let fileURL = fileReader.result; // passing user file source in fileURL variable
            // console.log(fileURL);
            let imgTag = `<img src="${fileURL}" alt="">`; // creating img tag and passing user selected file source inside src attribute
            dropArea.innerHTML = imgTag + `<a href="${fileURL}" download style=" 
            padding: 10px 25px;
            font-size: 20px;
            font-weight: 500;
            border: none;
            outline: none;
            background: #fff;
            color: #5256ad;
            border-radius: 5px;
            cursor: pointer; margin-top:1rem;
            ">Download Image</a>`; //adding that created img tag and button link to download image inside dropArea container
        }
        fileReader.readAsDataURL(file);
    } else {
        // console.log("This is not an Image File");
        alert("This is not an Image File!");
        dropArea.classList.remove("active");
        dragText.textContent = "Drag and Drop to Upload File";
    }
};