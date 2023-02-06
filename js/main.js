let cinemaCatagoties = document.querySelector(".hero__catagories");
let cinemaSearche = document.querySelector("#input-id");
let selected = document.querySelector(".select__box");
let cinemaTetx = document.querySelector(".hero__title");

function renderFilms(kino) {
  cinemaCatagoties.textContent = "";

  for (let i = 0; i < kino.length; i++) {
    let li = document.createElement("li");

    let date = new Date(kino[i].release_date);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minutes = date.getMinutes();

    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let fulldate = `${day}.${month}.${year} / ${hour}:${minutes}`;

    li.innerHTML = `
    <li class="item-list">
    <div class="box">
    <img class="img" src=${kino[i].poster}  alt="">
    <div class="bottom-box">
    
    <h5 class="item-text">Nomi : ${kino[i].title}</h5>
    
    <p class="genres-text"> <span class="span-text">Janri</span> : ${kino[i].genres}</p>
    <p class="date-text"> <span class="span-text">Sanasi</span> : ${fulldate}</p>
    <button data-id=${kino[i].id} id"0"  class="delete-btn">Delete</button>
    </div>
    
    </div>
    </li>`;

    cinemaCatagoties.appendChild(li);
  }
}

renderFilms(films);

//delete

cinemaCatagoties.addEventListener("click", function (evt) {
  const element = evt.target;
  if (element.className.includes("delete-btn")) {
    const id = Number(element.dataset.id);
    let result = [];

    for (let i = 0; i < films.length; i++) {
      const kino = films[i];

      let idd = Number(kino.id);

      if (idd !== id) {
        result.push(kino);
      }
    }
    films = result;
    renderFilms(films);
  }
});

//search

cinemaSearche.addEventListener("input", () => {
  let value = cinemaSearche.value;
  let searchArr = [];

  films.forEach((search) => {
    if (search.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
      searchArr.push(search);
    }
  });
  renderFilms(searchArr);
});

//select

selected.addEventListener("change", cinemaTetx => {
  let genres = [];

  films.forEach((janr) => {
    if (janr.genres.includes(value)) {
      genres.push(janr);
      renderFilms(genres);
    } else if (value == "All") {
      all.push(janr);
      renderFilms(all);
    }
  });
});
