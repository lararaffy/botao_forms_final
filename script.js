const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    alert("Formulário enviado");
    event.preventDefault();
    window.location.href = 'exit.html';
  });
  