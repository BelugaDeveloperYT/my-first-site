async function sendMessage() {

  const input =
  document.getElementById("user-input");

  const chatBox =
  document.getElementById("chat-box");

  const message = input.value;

  const response = await fetch("/chat", {

    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      message
    })
  });

  const data = await response.json();

  chatBox.innerHTML += `
    <p><b>You:</b> ${message}</p>
    <p><b>AI:</b> ${data.reply}</p>
  `;

  input.value = "";
}
