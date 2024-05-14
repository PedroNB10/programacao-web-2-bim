const btnBuscaP = document.querySelector("#btn-pessoas");

const listaPessoas = document.querySelector("#lista-pessoas");

btnBuscaP.addEventListener("click", async () => {
  const resultado = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await resultado.json();

  for (const digimon of data) {
    const li = document.createElement("li");
    li.textContent = digimon.name;
    listaPessoas.appendChild(li);
  }
});

const obj = {
  nome: "Lucas",
  idade: 22,
};

for (const key in obj) {
  console.log(key, obj[key]);
}

const searchStarWarsCharacters = async () => {
  const starWars = await fetch("https://swapi.dev/api/people/");
  const data = await starWars.json();
  console.log(data);
};

searchStarWarsCharacters();
