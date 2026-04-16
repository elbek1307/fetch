let container = document.getElementById("container")
let searchInput = document.getElementById("search")

fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    render(data);
    

    searchInput.addEventListener("input", function () {
      let value = searchInput.value.toLowerCase();

      let filtered = data.filter(elbek =>
        elbek.title.toLowerCase().includes(value)
      );

      render(filtered);
    });
  })
  


  function render(data){
      container.innerHTML = data.map(elbek => `
        <div class="card">
                    <img src="https://picsum.photos/200/200?random=${elbek.id}" alt="${elbek.title}">
                    <p>${elbek.title}</p>
                </div>
        `).join("")
  }


  searchInput.addEventListener("input", function (){
    let value = searchInput.value.toLowerCase()

    let filter = data.filter(tok => tok.title.toLowerCase().includes(value))
    render(filter)
  })








