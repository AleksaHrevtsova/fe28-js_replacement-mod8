const item = document.getElementById("item");
const modal = document.querySelector(".backDrop");

const list = document.querySelector(".postsList");

const form = document.getElementById("form");

form.addEventListener("input", (e) => {
  e.preventDefault();
  console.log(`ok`);
  let val = e.target.value;
  console.log(val);
  filterWords(val, list, "cardInfo", "text");
});

let inpurValue = " a ";

function filterWords(value, items, wrapperTextClass, textClass) {
  console.log(`ok`);
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

// filterWords(inpurValue, list, "cardInfo", "text");

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
  console.log(e);
  if (e.code === "Escape") {
    modal.classList.add("isHidden");
  }
}
function handleClose(e) {
  // e.preventDefault();
  console.log(e.target === e.currentTarget);
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target === e.currenTarget) {
    modal.classList.add("isHidden");
  }
}
