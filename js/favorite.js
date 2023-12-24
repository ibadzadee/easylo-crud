const id = new URLSearchParams(window.location.search).get("id");
const url = `http://localhost:3000/Favorite/`;

const section = document.querySelector(".favorite .bottom");

fetch(url)
  .then((data) => data.json())
  .then((res) => {
    res.forEach((element) => {
      section.innerHTML += `
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
     <i class="bi bi-trash3-fill delete" onclick="deleteElement(${element.id})"></i>
   </div>
 </div>
   `;
    });
  });

function deleteElement(id) {
  axios.delete(url + id);
  window.location.reload();
}
