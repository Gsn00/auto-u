const fileInput = document.getElementById("file_input");
const uploadButton = document.getElementById("upload_button");
const fileName = document.getElementById("file_name");

const formTextarea = document.getElementById("form_textarea");

const sendButton = document.getElementById("form_button");

const resultWaiting = document.getElementById("result_waiting");
const resultLoading = document.getElementById("result_loading");
const resultSent = document.getElementById("result_sent");

const clearButton = document.getElementById("form_clear");

const disableFileInput = () => {
  uploadButton.disabled = true;
  uploadButton.style.opacity = 0.4;
  fileInput.disabled = true;
};

const enableFileInput = () => {
  uploadButton.disabled = false;
  uploadButton.style.opacity = 1;
  fileInput.disabled = false;
};

const disableTextarea = () => {
  formTextarea.disabled = true;
  formTextarea.value = "";
  formTextarea.style.opacity = 0.4;
};

const enableTextarea = () => {
  formTextarea.disabled = false;
  formTextarea.style.opacity = 1;
};

const showResult = (classification, suggestion) => {
  resultWaiting.style.display = "none";
  resultLoading.style.display = "none";
  resultSent.style.display = "flex";
  sendButton.disabled = false;
  sendButton.style.opacity = 1;

  const productiveElement = document.getElementById("productive");
  const unproductiveElement = document.getElementById("unproductive");
  const suggestionTextarea = document.getElementById("suggestion_textarea");

  if (classification === "productive") {
    productiveElement.style.display = "block";
    unproductiveElement.style.display = "none";
  } else if (classification === "unproductive") {
    productiveElement.style.display = "none";
    unproductiveElement.style.display = "block";
  }

  suggestionTextarea.value = suggestion;
};

const hideResult = () => {
  resultWaiting.style.display = "flex";
  resultLoading.style.display = "none";
  resultSent.style.display = "none";
  sendButton.disabled = false;
  sendButton.style.opacity = 1;
};

const showLoading = () => {
  resultWaiting.style.display = "none";
  resultLoading.style.display = "flex";
  resultSent.style.display = "none";
  sendButton.disabled = true;
  sendButton.style.opacity = 0.8;
};

const send = async () => {
  if (fileInput.files.length === 0 && formTextarea.value.trim() === "") {
    alert("Por favor, carregue um arquivo ou insira texto no campo.");
    return;
  }

  showLoading();

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
      showResult(result.classification, result.suggestion);
    } else {
      hideResult();
      alert("Erro na classificação: " + result.error);
    }
  } catch (error) {
    alert("Erro na requisição: " + error.message);
    console.log(error);
  }
};

const clearForm = () => {
  window.location.reload();
};

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

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  send();
});

clearButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearForm();
});
