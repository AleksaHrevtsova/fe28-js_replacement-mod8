import refs from "./refs.js";
const { items } = refs;

const options = {
  root: document.getElementById("list"),
  rootMargin: "50px",
  threshold: 0.5, // handleObserver будет вызвана при 100% пересечении объекта (за которым мы следим) с объектом root
};

function handleObserver(entries, observer) {
  entries.forEach((entry) => {
    entry.time; // a DOMHightResTimeStamp indicating when the intersection occurred.
    entry.rootBounds; // a DOMRectReadOnly for the intersection observer's root.
    entry.boundingClientRect; // a DOMRectReadOnly for the intersection observer's target.
    entry.intersectionRect; // a DOMRectReadOnly for the visible portion of the intersection observer's target.
    entry.intersectionRatio; // the number for the ratio of the intersectionRect to the boundingClientRect.
    entry.target; // the Element whose intersection with the intersection root changed.
    entry.isIntersecting; // intersecting: true or false
    // console.log(entry.target);
    if (entry.isIntersecting) {
      entry.target.classList.add("observe");
    } else {
      entry.target.classList.remove("observe");
    }
  });
}

// const observer = new IntersectionObserver(handleObserver, options);
// items.forEach((elem) => observer.observe(elem));

export default new IntersectionObserver(handleObserver, options);
