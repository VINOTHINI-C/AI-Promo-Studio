export async function generateScript(prompt, photos = []) {
  const formData = new FormData();

  formData.append("prompt", prompt);

  photos.forEach((photo) => {
    formData.append("photos", photo);
  });

  const response = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  return data;
}