const API_BASE_URL = "https://www.algoexpert.io/api/testimonials";

const PAGE_SIZE = 5;

let canfetchTestimonials = true;
let afterID = null;

const testimonialContainer = document.getElementById("testimonial-container");

testimonialContainer.addEventListener("scroll", handleScroll);

fetchAddAppendTestimonials();

function handleScroll() {
  if (!canfetchTestimonials) return;

  const bottomSpaceLeftToScroll =
    this.scrollHeight - this.scrollTop - this.clientHeight;
  console.log(this.scrollHeight, this.scrollTop, this.clientHeight);
  if (bottomSpaceLeftToScroll > 0) return false;
  fetchAddAppendTestimonials();
}

function fetchAddAppendTestimonials() {
  canFetchTestimonials = false;
  const url = createTestimonialsUrl();
  fetch(url, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(({ testimonials, hasNext }) => {
      const fragment = document.createDocumentFragment();
      testimonials.forEach(({ message }) => {
        fragment.appendChild(createTestimonialElement(message));
      });
      testimonialContainer.appendChild(fragment);
      if (hasNext) {
        afterID = testimonials[testimonials.length - 1].id;
      } else {
        testimonialContainer.removeEventListener("scroll", handleScroll);
      }
      canFetchTestimonials = true;
    });
}

function createTestimonialElement(message) {
  const testimonialElement = document.createElement("p");
  testimonialElement.classList.add("testimonial");
  testimonialElement.textContent = message;
  return testimonialElement;
}

function createTestimonialsUrl() {
  const url = new URL(API_BASE_URL);
  url.searchParams.set("limit", PAGE_SIZE);
  if (afterID != null) {
    url.searchParams.set("after", afterID);
  }
  return url;
}
