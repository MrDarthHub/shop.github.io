/* 
            Revisar todo el codigo 

    Got it from here https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#getting_information_about_selected_files


*/
let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);




function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  
function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}


function drop(e) {
    e.stopPropagation();
    e.preventDefault();
  
    const dt = e.dataTransfer;
    const files = dt.files;
  
    handleFiles(files);
}
  


/* */

function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      if (!file.type.startsWith('image/')){ continue }
  
      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.
  
      const reader = new FileReader();
      reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
      reader.readAsDataURL(file);
    }
  }
  