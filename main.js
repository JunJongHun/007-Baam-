const horizontal_div = document.querySelector(".horizontal");
const verticality_div = document.querySelector(".verticality");
const target_img = document.querySelector(".target");
const tag_div = document.querySelector(".tag");

const handleMouseMove = (e) => {
  let { clientX, clientY } = e;

  horizontal_div.style.top = `${clientY}px`;
  verticality_div.style.left = `${clientX}px`;
  target_img.style.left = `${clientX}px`;
  target_img.style.top = `${clientY}px`;

  tag_div.style.left = `${clientX}px`;
  tag_div.style.top = `${clientY}px`;
  tag_div.innerHTML = `X : ${clientX} Y : ${clientY}`;
};

window.addEventListener("mousemove", handleMouseMove);
