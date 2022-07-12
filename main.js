const horizontal_div = document.querySelector(".horizontal");
const verticality_div = document.querySelector(".verticality");
const target_img = document.querySelector(".target");
const tag_div = document.querySelector(".tag");

window.addEventListener("load", () => {
  const target_img_rect = target_img.getBoundingClientRect();
  const targetHalfWidth = target_img_rect.width / 2;
  const targetHalfHeight = target_img_rect.height / 2;

  console.log(target_img_rect, targetHalfWidth, targetHalfHeight);

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;

    horizontal_div.style.transform = `translateY(${clientY}px)`;
    verticality_div.style.transform = `translateX(${clientX}px)`;
    target_img.style.transform = `translate(${clientX - targetHalfWidth}px,${
      clientY - targetHalfHeight
    }px)`;
    tag_div.style.transform = `translate(${clientX}px,${clientY}px)`;
    tag_div.innerHTML = `X : ${clientX} Y : ${clientY}`;
  };

  window.addEventListener("mousemove", handleMouseMove);
});
