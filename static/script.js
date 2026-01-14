const fileInput = document.getElementById("file_input");
const uploadButton = document.getElementById("upload_button");
const fileName = document.getElementById("file_name");

uploadButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = "Selecionado: " + fileInput.files[0].name;
  } else {
    fileName.textContent = "Clique para carregar o arquivo (.txt, .pdf)";
  }
});
