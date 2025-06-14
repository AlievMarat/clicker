const scrollSidebar = document.querySelector(".sidebar");
const scrollButton = document.querySelector(".sidebar-btn");
const clickerIcon = document.querySelector(".clicker__icon");
clickerIcon.addEventListener("click", () => {});
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

const id = localStorage.getItem("token");
async function getBalance() {
  const response = await fetch(`http://localhost:3000/balance/click/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const clicks = await response.json();
  console.log(clicks);
  clickerIcon.innerHTML = clicks.balance;
}
clickerIcon.addEventListener("click", getBalance);
async function getPassiveBalance() {
  const response = await fetch(
    `http://localhost:3000/balance/passiveIncomePerSecond/${id}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const clicks = await response.json();
  console.log(clicks);
  clickerIcon.innerHTML = clicks.balance;
}
setInterval(() => {
  getPassiveBalance();
}, 1000);
