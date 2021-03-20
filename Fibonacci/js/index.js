function* enemies() {
  let anterior = 1;  let ultimo = 1;
  while(true) {
    const siguiente = anterior + ultimo;
    yield siguiente;
    anterior = ultimo;
    ultimo = siguiente;
  }
}

const enemyGenerator = enemies();


const container = document.getElementById("levels");
function nextLevel(number) {
  const levelNumber = document.createElement('p');
  levelNumber.innerText = "Nivel " + number;
  const enemyCountContainer = document.createElement('p');
  enemyCountContainer.textContent = "Enemigos: " +enemyGenerator.next().value;
  container.appendChild(levelNumber);
    container.appendChild(enemyCountContainer);
}

nextLevel(1);
nextLevel(2);
nextLevel(3);
nextLevel(4);