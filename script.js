// Función para cargar el contenido de un archivo HTML en un contenedor específico
function loadHTML(elementId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error al cargar el archivo:', error));
  }
  
  // Cargar el encabezado y pie de página
  loadHTML('header', 'header.html');
  loadHTML('footer', 'footer.html');
  