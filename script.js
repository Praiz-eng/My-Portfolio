//Testimonial Data
const testimonials = [
  {
    name: "Eva Sawyer",
    job: "CEO, Fashworks",
    image: "https://i.postimg.cc/mgp4pfz5/profile-image-1.png",
    testimonial:
      "Praiz was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish",
  },
  {
    name: "Katey Topaz",
    job: "Developer, TechCrew",
    image: "https://i.postimg.cc/PfSSwtB9/profile-image-2.png",
    testimonial:
      "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  },
  
];
//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
  `;
};
window.onload = displayTestimonial;