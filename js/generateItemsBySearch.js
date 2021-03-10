import api from "./getFetch.js";
import refs from "./refs.js";

// import observer from "./intersectionObserver.js";

const { form, list } = refs;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  api.queryValue = e.target.elements.search.value;
  return api.getFetch().then((r) => {
    // console.log(r);
    let y = r.map((el) => {
      const { src, photographer } = el;
      const { original } = src;
      const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, impedit!`;
      const x = generateItems(original, undefined, photographer, text);
      // console.log(x);
      return x;
    });
    //   list.insertAdjacentHTML("beforeEnd", x);
    // list.insertAdjacentElement("beforeEnd", ...y);
    console.log(y);
    list.append(...y);
    //   document
    //     .querySelectorAll(".item")
    //     .forEach((elem) => observer.observe(elem));
    // });
    return list;
  });

  function generateItems(src, alt = "img", title, content) {
    //   const item = `
    //     <li class="item">
    //     <div class="imgWrapper">
    //         <img src=${src} alt=${alt}>
    //     </div>
    //     <div class="cardInfo">
    //         <h3 class="title">${title}</h3>
    //         <p class="text">${content}</p>
    //         <a class="link" href="./post.html">read more</a>
    //     </div>
    // </li> `;
    //   return item;

    const li = document.createElement("li");
    li.classList.add("item");
    const div = document.createElement("div");
    div.classList.add("imgWrapper");

    const img = document.createElement("img");
    img.setAttribute("src", src);
    img.setAttribute("alt", alt);

    div.appendChild(img);

    const div2 = document.createElement("div2");
    div2.classList.add("cardInfo");

    const h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.textContent = title;

    const p = document.createElement("p");
    p.classList.add("text");
    p.textContent = content;

    const a = document.createElement("a");
    a.classList.add("link");
    a.setAttribute("href", "./post.html");

    a.textContent = "read more";
    div2.append(h3, p, a);

    li.append(div, div2);
    return li;
  }

  // landscape: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
  // large: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
  // large2x: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  // medium: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&h=350"
  // original: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg"
  // portrait: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
  // small: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&h=130"
  // tiny: "https://images.pexels.com/photos/1524113/pexels-photo-1524113.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
});
