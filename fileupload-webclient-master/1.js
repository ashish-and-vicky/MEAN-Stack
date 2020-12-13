const processUploadImage = async () => {
  console.log("Image Upload in Progress");

  const file = document.querySelector("#filupload").files[0];
  console.log(file);

  // lets preview this file before upload
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (e) => {
    console.log(e);

    document.querySelector("img").src = e.target.result;
  };

  // next lets upload to server;; by making ajax call
  const url = "http://localhost:3000/file-upload";
  const formData = new FormData();
  formData.append("file", file);

  await fetch(url, {
    method: "POST",
    body: formData,
  });
};
