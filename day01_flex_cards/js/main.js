/* custom main js file build by @mrvin100 */

const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    removeClassNameOnNodeElements(boxs, "active");
    addThisClassName(box, "active");
  });
});

// resusables functions build by @mrvin100

const addThisClassName = (tag, className) => {
  tag.classList.add(className);
};

const removeThisClassName = (tag, className) => {
  tag.classList.remove(className);
};

const removeClassNameOnNodeElements = (nodeList, className) => {
  nodeList.forEach((el) => {
    removeThisClassName(el, className);
  });
};
