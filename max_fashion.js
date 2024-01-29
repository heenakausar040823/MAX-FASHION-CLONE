const img_container = document.querySelector(".img_container");
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide > img");
const slide_button = document.querySelectorAll(".hero_container > .button");

// console.log(img_container, slide, images, slide_button);
let img_index = 1, interval_id;

const auto_slide = () => {
    interval_id = setInterval(() => slide_image(++ img_index),5000);
};
auto_slide();


const slide_image = () =>{
    img_index = img_index === images.length ? 0 : img_index < 0 ? images.length - 1 : img_index;
    slide.style.transform = `translate(-${img_index * 100}%)`;

}

const update_img = (e) => {
    clearInterval(interval_id);
    img_index += e.target.id === "next" ? 1 : -1;
    slide_image(img_index);
    auto_slide();
}

slide_button.forEach((button) => button.addEventListener('click',update_img)) ;
img_container.addEventListener('mouseover',() => clearInterval(interval_id));
img_container.addEventListener('mouseleave',auto_slide);
