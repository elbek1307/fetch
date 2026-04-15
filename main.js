let container = document.getElementById("container")

fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    render(data)
  })
  .catch(error => console.error('Xatolik yuz berdi:', error));


  function render(data){
      container.innerHTML = data.map(elbek => `
        <div class="card">
                    <img src="https://picsum.photos/200/200?random=${elbek.id}" alt="${elbek.title}">
                    <p>${elbek.title}</p>
                </div>
        `).join("")
  }