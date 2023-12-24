const id = new URLSearchParams(window.location.search).get("id");

let url = `http://localhost:3000/data/`;

const solutionSection = document.querySelector("#solutions .bottom");

fetch(url+id)
  .then((data) => data.json())
  .then((element) => {
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
       </div>
     </div>
       `;
  });
