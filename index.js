const list = document.querySelector(".postsList");
const item = document.getElementById("item");
const modal = document.querySelector(".backDrop");
const form = document.getElementById("form");

// // объект lodash
// console.dir(_);
// _.throttle(() => {}, 500);
// _.debounce(() => {}, 500);

// function throtCB() {
//   console.log("Click event handler invocation every 1500ms.");
// }
// window.addEventListener("click", _.throttle(throtCB, 1500));

// function debounCB() {
//   // console.log("INPUT event handler invocation every 1500ms.");
//   console.log(`CHANGE`);
// }
// form.addEventListener("input", _.debounce(debounCB, 1500));
// form.addEventListener("change", debounCB);

// form.addEventListener(
//   "input",
//   _.throttle((e) => {
//     console.log("Функция обработки ввода вызвана спустя 700мс");
//     let val = e.target.value;
//     console.log(val);
//   }, 700)
// );

// form.addEventListener(
//   "input",
//   _.debounce((e) => {
//     // e.preventDefault();
//     console.log(`ok`);
//     console.dir(e.target);
//     let val = e.target.value;
//     console.log(val);
//     filterWords(val, list, "cardInfo", "text");
//   }, 1000)
// );

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // console.log(e.target.elements.search.value);
//   let val = e.target.elements.search.value;
//   // console.log(val);
//   // filterWords(val, list, "cardInfo", "text");
// });

let inpurValue = " a ";

function filterWords(value, items, wrapperTextClass, textClass) {
  // console.log(`ok`);
  return [...items.children].map((li) => {
    return [...li.children].find((div) => {
      if (div.classList.contains(wrapperTextClass)) {
        return [...div.children].find((p) => {
          // console.log(p.textContent);
          if (p.classList.contains(textClass) && !p.textContent.includes(value))
            return (li.style.display = "none");
        });
      }
    });
  });
}

list.addEventListener("click", (e) => {
  e.preventDefault();
  // e.target.style.textTransform = "uppercase";
  // e.target.classList.add("onClick");

  if (e.target.nodeName === "LI") {
    // console.log(`Li`);
  }

  if (e.target.nodeName === "A") {
    modal.classList.remove("isHidden");
  }
});

const a = document.createElement("div");
// console.log(a);
a.innerHTML = "Hello";

// console.log(a);
a.innerText = "<a><p>Hello</p></a>";

const itemGallery = `
<div>
</div>
`;

window.addEventListener("keydown", handleKeyDown);
modal.addEventListener("click", handleClose);

function handleKeyDown(e) {
  if (e.code === "Escape") {
    modal.classList.add("isHidden");
  }
}
function handleClose(e) {
  if (e.target === e.currenTarget) {
    modal.classList.add("isHidden");
  }
}
