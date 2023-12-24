// -----------------Menu ---------------
const menu = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar-collapse");

menu.addEventListener("click", () => {
  const currentBgColor = navbar.style.backgroundColor;

  if (!currentBgColor || currentBgColor === "transparent" || currentBgColor === "rgba(0, 0, 0, 0)") {
    navbar.style.backgroundColor = "#26BE9F";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    nav.classList.add("position-sticky");
    nav.style.top = "0px";
    nav.style.left = "0px";
    nav.style.background = "#26BE9F";
  } else {
    nav.classList.remove("position-sticky");
    nav.classList.add("position-absolute");
    nav.style.background = "";
  }
});

// ------- from end to top button ------

let topBtn = document.querySelector('#top-button')

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block"
    }
    else {
        topBtn.style.display = ""
    }
})

topBtn.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

// --------------------fetch Data--------------

let url = `http://localhost:3000/data/`;

const solutionSection = document.querySelector("#solutions .bottom");

let page = 1;
function showData() {
  fetch(`http://localhost:3000/data?_page=${page}&_limit=3`)
    .then((data) => data.json())
    .then((res) => {
      res.forEach((element) => {
        solutionSection.innerHTML += `
       <div class="cards">
       <div class="img">
         <img src="${element.image}" alt="" />
       </div>
       <h5>${element.name}</h5>
       <div class="text">
         <a href="">
           <h4>${element.description}</h4>
         </a>
         <p>${element.about}</p>

        <div class="crud">

        <div class="between">
        <i class="bi bi-trash3-fill delete" onclick="deleteElement(${element.id})"></i>

        <i class="bi bi-pencil-square update" onclick="update(${element.id})"></i>
        </div>

        <button id="details" onclick="details(${element.id})">View Details</button>

        <i class="bi bi-heart-fill heart" onclick="addFav(${element.id} , this)"></i>

        </div>

        </div>
     </div>
       `;
      });
    });
}
showData();

let loadBtn = document.querySelector(" #solutions #loadMore");
loadBtn.addEventListener("click", () => {
  page++;
  showData();
});

function deleteElement(id) {
  axios.delete(url + id);
  window.location.reload();
}

function update(id) {
  window.location = `./update.html?id=${id}`;
}

function addFav(id) {
  window.location = `./favorite.html?id=${id}`;
}

function addFav(id, heart) {
  axios.get(url + id).then((res) => {
    console.log(res.data);
    axios.post(`http://localhost:3000/Favorite`, res.data);
    axios.post(`./favorites.html`, res.data);
    heart.style.color = "red";
  });
}

function details(id) {
  window.location = `./details.html?id=${id}`;
}



