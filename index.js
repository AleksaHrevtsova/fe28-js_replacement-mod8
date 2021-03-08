const item = document.getElementById("item");
const modal = document.querySelector(".backDrop");

// console.log(item);
// item.textContent = "Item";

// console.dir(window);

const ul = document.querySelector(".postsList");
// console.log(ul);

ul.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  //   console.log("target", e.target);
  e.target.style.textTransform = "uppercase";
  e.target.classList.add("onClick");

  //   console.log("currentTarget", e.currentTarget);

  if (e.target.nodeName === "LI") {
    console.log(`Li`);
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

function handleKeyDown() {
  console.log(e);
  //   if (!modal.classList.contains("isHidden")) {
  if (e.code === "Escape") {
    modal.classList.add("isHidden");
  }
  //   }
}
