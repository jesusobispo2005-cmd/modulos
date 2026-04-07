const owner = "mouredev";   // usuario
const repo = "retos-programacion-2023"; // repositorio

const url = "https://api.github.com/repos/" + owner + "/" + repo + "/commits?per_page=10";

fetch(url)
  .then(res => res.json())
  .then(data => {
    const lista = document.getElementById("lista");

    data.forEach((commit, index) => {
      const hash = commit.sha.substring(0, 6);
      const autor = commit.commit.author.name;
      const mensaje = commit.commit.message;
      const fecha = new Date(commit.commit.author.date);

      const fechaFormateada = fecha.toLocaleString();

      const li = document.createElement("li");
    li.textContent = "Commit " + (index + 1) + " | " + hash + " | " + autor + " | " + mensaje + " | " + fechaFormateada;    
      lista.appendChild(li);
    });
  })
  .catch(error => console.error("Error:", error));