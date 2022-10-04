//BASE_URL: `http://localhost:3000`
//endpoints: GET `/ramens`
//            GET `/ramens/:id`
//see all ramen images
//fetch ramen
//iterate ramen
//create img elements
//add to DOM
//click on img and see details
//submit a form to create a new ramen
//Data "id", "name", "restaurant", "image", "rating", "comment"
//STEP 1: See all ramen images in the `div` with the id of `ramen-menu`. When the page
  // loads, request the data from the server to get all the ramen objects. Then,
  // display the image for each of the ramen using an `img` tag inside the
  // `#ramen-menu` div.


//DRY points
const BASE_URL = `http://localhost:3000`

//DOM selectors
const menu = document.querySelector('#ramen-menu') //this will get the menu
const detail = document.querySelector('#ramen-detail')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

//listeners
//image clickable added into renderOneMenu function below
newRamenForm.addEventListener('submit', handleAddRamen)


//fetchers
function getAllRamens() {
  fetch(BASE_URL + `/ramens`)
  .then(response => response.json())
  .then(renderAllRamens)
}


//render functions
function renderAllRamens(ramensArr) {
  ramensArr.forEach(renderOneMenu)
}


function renderOneMenu(ramenObj) {
  // console.log(ramenObj)
  const img = document.createElement("img")

  img.src = ramenObj.image
  img.addEventListener('click', () => renderDetail(ramenObj))
  menu.appendChild(img)
}


function renderDetail (ramenObj) {
  // console.log('ramenObj: ', ramenObj);
  detail.innerHTML = `
  <img class="detail-image" src="${ramenObj.image}" alt="${ramenObj.name}" />
  <h2 class="name">${ramenObj.name}</h2>
  <h3 class="restaurant">${ramenObj.restaurant}</h3>
  `
  rating.innerText = ramenObj.rating
  comment.innerText = ramenObj.comment
}

//event handlers

function handleAddRamen(e) {
  e.preventDefault()
  console.log(e.target.restaurant)
  const name = e.target.name.value
  const restaurant = e.target.restaurant.value
  const image = e.target.image.value
  const rating = e.target.rating.value
  const comment = e.target["new-comment"].value
  const newRamen = {
    name: name, 
    restaurant: restaurant, 
    image: image,
    rating: rating,
    comment: comment
  }
  renderOneMenu(newRamen)
}


//initializers (to call function)
getAllRamens()

