import { reload } from "./js/header"
import { given } from "./js/header"
import { get } from './js/header.js'
import { post } from './js/header.js'
import { remove } from './js/header.js'
import { put } from './js/header.js'
get("http://localhost:9090/new_products")
  .then(data =>{
    let arr_from_users = data
const rub = 138.26
let testi_content = document.querySelector('.testi-content')
get('https://raw.githubusercontent.com/Daler-web-dev/mvideo/main/db.json')
  .then(data => {
    data.goods = [...data.goods, ...arr_from_users]
    for (let item of data.goods) {
      if (item.isBlackFriday == true && item.description != '') {
        let sp = [0.30766659663183327, 12, 0.58006116125388, 34, 36, 0.1452291405255206, 0.060016578071321325, 0.8673838511087768, 4, 33]
        if (sp.includes(item.id)) {
          sp = sp
        } else {
          item.price = parseInt(item.price * rub)
          item.media[0] = `images/id${item.id}.png`
          testi_content.innerHTML += `
          <div class="slide swiper-slide">
          <a href="/pages/product?id=${item.id}" class="blocks_and_texts">
          <div class="first_half">
            <h1>${item.title}</h1>
            <span>${item.price.toLocaleString()} сум</span>
            <p>${item.description}</p>
            </div>
            <div class="second_half">
            < id='${item.id}' class="swipe-img">
            </div>
          </div>
          </a>
          `
        }
      }
    }
  })

let onsale_main = document.querySelectorAll('.onsale_main')
fetch("https://raw.githubusercontent.com/Daler-web-dev/mvideo/main/db.json")
  .then(res => res.json())
  .then(data => {
    data.goods = [...data.goods, ...arr_from_users]
    for (let item of data.goods) {
      item.price = parseInt(item.price * rub)
      if(item.isBlackFriday == true){
        reload(onsale_main[0], item)
      }
      if (item.price < 700000) {
        reload(onsale_main[2], item)
      }
      if (item.rating == 5) {
        reload(onsale_main[1], item)
      }
    }
    given()
  })
})