const fileInput = document.getElementById("file_input");
const uploadButton = document.getElementById("upload_button");
const fileName = document.getElementById("file_name");

const formTextarea = document.getElementById("form_textarea");

const sendButton = document.getElementById("form_button");

let email = "";

uploadButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = "Selecionado: " + fileInput.files[0].name;
    disableTextarea();
  } else {
    fileName.textContent = "Clique para carregar o arquivo (.txt, .pdf)";
    enableTextarea();
  }
});

formTextarea.addEventListener("input", () => {
  formTextarea.style.height = formTextarea.scrollHeight + "px";

  if (formTextarea.value.length > 0) {
    disableFileInput();
  } else {
    enableFileInput();
  }
});

function disableFileInput() {
  uploadButton.disabled = true;
  uploadButton.style.opacity = 0.4;
  fileInput.disabled = true;
}
function enableFileInput() {
  uploadButton.disabled = false;
  uploadButton.style.opacity = 1;
  fileInput.disabled = false;
}

function disableTextarea() {
  formTextarea.disabled = true;
  formTextarea.value = "";
  formTextarea.style.opacity = 0.4;
}
function enableTextarea() {
  formTextarea.disabled = false;
  formTextarea.style.opacity = 1;
}

async function send() {
  if (fileInput.files.length === 0 && formTextarea.value.trim() === "") {
    alert("Por favor, carregue um arquivo ou insira texto no campo.");
    return;
  }

  const formData = new FormData();

  if (fileInput.files.length > 0) {
    formData.append("file", fileInput.files[0]);
  } else {
    formData.append("text", formTextarea.value.trim());
  }

  try {
    const response = await fetch("/classificate", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (response.ok) {
      alert("Classificação recebida: " + result.status);
    } else {
      alert("Erro na classificação: " + result.error);
    }
  } catch (error) {
    alert("Erro na requisição: " + error.message);
  }
}

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  send();
});
