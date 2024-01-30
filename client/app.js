const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted");
  const formData = new FormData(messageForm);
  const message = formData.get("message");
  const name = formData.get("name");
  console.log("Name received:", name, "message received:", message);

  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
}
messageForm.addEventListener("submit", handleSubmitMessageForm);
