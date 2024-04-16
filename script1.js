// const parentContainer =  document.querySelector('.read-more-container');

// parentContainer.addEventListener('click', event=>{

//     const current = event.target;

//     const isReadMoreBtn = current.className.includes('read-more-btn');

//     if(!isReadMoreBtn) return;

//     const currentText = event.target.parentNode.querySelector('.read-more-text');

//     currentText.classList.toggle('read-more-text--show');

//     current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

// })



const readMoreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// *********************
// This Code is for only the floating card in right bottom corner
// **********************

const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}
