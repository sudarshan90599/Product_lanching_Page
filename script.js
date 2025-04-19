// Basic testimonial slider (can be expanded)
const testimonials = [
    "“This product is fantastic! It has completely exceeded my expectations.” --- Srinivas",
    "“Absolutely love it! Simple, clean, and powerful.” --- Chandan",
    "“A must-have product for tech lovers.” --- Sujay"
  ];
  
  let index = 0;
  const testimonialText = document.getElementById("testimonial-text");
  
  setInterval(() => {
    index = (index + 1) % testimonials.length; 
    testimonialText.innerText = testimonials[index];
  }, 4000);
  