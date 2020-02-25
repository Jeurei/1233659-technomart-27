window.onload=function(){
let button=document.querySelector(".contacts-button")
if(button){
button.addEventListener(`click`,function(evt){
  evt.preventDefault();
  document.querySelector(`.contact-form-popup`).classList.remove(`visually-hidden`);
})}
button=document.querySelector(".js-map")
if(button){
button.addEventListener(`click`,function(evt){
  evt.preventDefault();
  document.querySelector(`.map-popup`).classList.remove(`visually-hidden`);
})}
button=document.querySelectorAll(`.close-button`)
if(button.length!=0){
button.forEach(el=>el.addEventListener(`click`,function(evt){
  evt.preventDefault();
  el.parentElement.parentElement.classList.toggle('visually-hidden')
}))}
button=document.querySelectorAll(`.item-buy`)
if(button.length!=0){
button.forEach(el=>el.addEventListener(`click`,function(evt){
  evt.preventDefault();
  if(!document.querySelector(`.header-basket`).classList.contains(`active`)){
    !document.querySelector(`.header-basket`).classList.add(`active`)
  }
  document.querySelector(`.modal-adding-popup`).classList.remove(`visually-hidden`)
  let num=parseInt(document.querySelector(`.header-basket-js-num`).textContent)
  num++
  document.querySelector(`.header-basket-js-num`).textContent=num
}))}
button=document.querySelectorAll(`.item-bookmark`)
if(button.length!=0){
button.forEach(el=>el.addEventListener(`click`,function(evt){
  evt.preventDefault();
  if(!document.querySelector(`.header-bookmarks`).classList.contains(`active`)){
    !document.querySelector(`.header-bookmarks`).classList.add(`active`)
  }
  let num=parseInt(document.querySelector(`.header-bookmark-js-num`).textContent)
  num++
  document.querySelector(`.header-bookmark-js-num`).textContent=num
}))}
button=document.querySelectorAll(`.adding-popup-button`)
if(button.length!=0){
button.forEach(el=>el.addEventListener(`click`,function(evt){
  evt.preventDefault();
  el.parentElement.parentElement.parentElement.parentElement.classList.toggle('visually-hidden')
}))}
button=document.querySelectorAll(`.slider-radio-button`)
if(button.length!=0){
button.forEach(el=>el.addEventListener("click",function(evt){
  evt.preventDefault()
  let button=document.querySelectorAll(`.slider-radio-button`)
  let id=this.dataset.slider_count
  let slides=document.querySelectorAll(`.slide`).forEach(function(el){
    el.classList.remove(`active`)
    if(el.dataset.slide_id==id){
      el.classList.add(`active`)
    }
  })
  button.forEach(el=>el.classList.remove(`active`))
  this.classList.add(`active`)
}))}
button=document.querySelector(`.slider-arrow-left`)
if(button){
  button.addEventListener("click",function(){
    let id=document.querySelector(`.slide.active`).dataset.slide_id
    let slides=document.querySelectorAll(`.slide`)
    let radios=document.querySelectorAll(`.slider-radio-button`)
    if(id==1){
      return
    }
    id--
    radios.forEach(function(el){
      el.classList.remove(`active`)
      if(el.dataset.slider_count==id){
      el.classList.add(`active`)
      }
    })
    slides.forEach(function(el){
      el.classList.remove(`active`)
      if(el.dataset.slide_id==id){
      el.classList.add(`active`)
      }
    })
  })
}
button=document.querySelector(`.slider-arrow-right`)
if(button){
  button.addEventListener("click",function(){
    let slides=document.querySelectorAll(`.slide`)
    let id=document.querySelector(`.slide.active`).dataset.slide_id
    let radios=document.querySelectorAll(`.slider-radio-button`)
    if(slides.length==id){
      return
    }
    id++
    radios.forEach(function(el){
      el.classList.remove(`active`)
      if(el.dataset.slider_count==id){
      el.classList.add(`active`)
      }
    })
    slides.forEach(function(el){
      el.classList.remove(`active`)
      if(el.dataset.slide_id==id){
      el.classList.add(`active`)
      }
  })
})}
button=document.querySelectorAll(`.services-button`)
if(button.length!=0){
  button.forEach(el=>el.addEventListener("click",function(evt){
    evt.preventDefault()
    let button=document.querySelectorAll(`.services-button`)
    let id=this.dataset.service_count
    let services=document.querySelectorAll(`.service`)
    button.forEach(el=>el.classList.remove(`active`))
    this.classList.add(`active`)
    services.forEach(function(el){
      el.classList.remove(`active`)
      if(el.dataset.service_id==id){
        el.classList.add(`active`)
      }
    })

  }))
}
button=document.querySelectorAll(`.sorting-button`)
if(button.length!=0){
  button.forEach(el=>el.addEventListener("click",function(evt){
    evt.preventDefault()
    let button=document.querySelectorAll(`.sorting-button`)
    button.forEach(el=>el.classList.remove(`active`))
    this.classList.add(`active`)
  }))
}}
