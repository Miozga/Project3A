// 4 4l4m4nty globalne

let size = 10;
let orderElement = 1;

const init = () => {
  const btn = document.createElement("button"); // TWORZYMY STRUKTURE BUTTON

  btn.textContent = "Dodaj elementy"; // ROBIMY OPIS NA BUTTON
  document.body.appendChild(btn); // wskazujemy gdzie dodać przycisk,za pomocą metody appendChild dodajemy przycisk tak żeby był widoczny na stronie

  const ul = document.createElement("ul"); //analogicznie jak powyżej tworzymy ul  i dodajemy do body
  document.body.appendChild(ul);
  //dodajemy nasłuchiwanie na elemncie button, w nawiasach apisujemy czego ma nasłuchiwac i jaką funkcje uruchamiać
  btn.addEventListener("click", createLiElement);
};

//tworzymy elementy li za pomocą pętli, tworzymy tyle ile jest wyznaczone w iteracji
const createLiElement = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Element nr${orderElement++}`; //podpisujemy elementy
    document.querySelector(`ul`).appendChild(li); //pobieramy listę ul w której będą się tworzyć li, i dodajemy li do środka
  }
};

init();
