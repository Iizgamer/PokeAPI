// ── PROVIDED STARTER CODE — do not modify ──────────────────
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response   = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data          = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement    = document.getElementById("pokemonSprite");

    imgElement.src           = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
};

const imgElement = document.getElementById("pokemonSprite")
const btn = document.getElementById('btn');
const pokemonName = document.getElementById("pokemonName");
const errorMessage = document.getElementById("errorMessage");

function handleSearch() {
    if (pokemonName.value.length == 0) {
        errorMessage.innerHTML = 'You must enter something in order to search.';
        imgElement.style.display = 'none';
    } else if (/^[a-zA-Z-]+$/.test(pokemonName.value) === false) {
        errorMessage.innerHTML = 'Please only use letters.';
        imgElement.style.display = 'none';
    } else if (pokemonName.value.length > 30) {
        errorMessage.innerHTML = 'Please do not exceed 30 characters.';
        imgElement.style.display = 'none';
    } else {
        fetchData(pokemonName.value);
        errorMessage.innerHTML = '';
    };
};

btn.addEventListener('click', handleSearch);