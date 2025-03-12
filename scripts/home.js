const scrollSidebar = document.querySelector(".sidebar");
const scrollButton = document.querySelector(".sidebar-btn");
console.log(scrollButton, scrollSidebar);
scrollButton.addEventListener("click", () => {
  scrollSidebar.scrollTo({
    top: scrollSidebar.scrollHeight,
    behavior: "smooth",
  });
});
scrollSidebar.addEventListener("scroll", () => {
  const isScrolledToBottom =
    scrollSidebar.scrollTop + scrollSidebar.clientHeight >=
    scrollSidebar.scrollHeight;
  scrollButton.style.display = isScrolledToBottom ? "none" : "block";
});
