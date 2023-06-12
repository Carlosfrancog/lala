function mostrarTextoAleatorio() {
    fetch('textos.json')
      .then(response => response.json())
      .then(data => {
        var textos = data.textos;
        var randomIndex = Math.floor(Math.random() * textos.length);
        var randomText = textos[randomIndex];
        var randomTextField = document.getElementById("random-text");
        randomTextField.textContent = randomText;
      })
      .catch(error => console.log(error));
  }