const socket = io('http://localhost:3000/');

const namespaceHTML = (name, image) => `
                        <div class="namespace" name="${name}">
                            <img src="${image}" />
                        </div>
                        `;

const namespacesHTML = document.querySelector('.namespaces');

socket.on('connect', () => {
  console.log('Connected');
  socket.emit('clientConnect');
});

socket.on('namespaces', (data) => {
  data.forEach((namespace) => {
    namespacesHTML.innerHTML += namespaceHTML(namespace.name, namespace.image);
  });
});
