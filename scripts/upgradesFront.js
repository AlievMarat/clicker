const tokenId = localStorage.getItem("token");
const clicker = document.querySelector(".clicker__icon");

fetch(`http://localhost:3000/upgrades/`)
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".sidebar");

    const upgradesData = data.upgrades
      .map(
        (item) => `
         <div class="sidebar__card">
            <div class="sidebar__card--content">
              <img class="sidebar__img" src="./assets/Sign up/Iconly/Light-Outline/Iconly/Light-Outline/Placeholder Square.png" />
              <div class="sidebar__info">
                <p class="sidebar__title">${item.name}</p>
                <p class="sidebar__text">${item.description}</p>
                <div class="sidebar__total">
                  <p class="sidebar__total--title">
                    <img src="./assets//Sign up//Iconly//Light-Outline//Iconly//Light-Outline/Coin.png" />
                    ${item.price}
                  </p>
                  <button class="sidebar__total--btn" data-id="${item.id}">Buy</button>
                </div>
              </div>
            </div>
          </div>
      `
      )
      .join("");

    container.insertAdjacentHTML("afterbegin", upgradesData);

    const buyUpgrade = document.querySelectorAll(".sidebar__total--btn");
    buyUpgrade.forEach((upgradeButton) => {
      upgradeButton.addEventListener("click", async () => {
        const upgradeId = parseInt(upgradeButton.dataset.id);
        try {
          const res = await fetch(
            `http://localhost:3000/upgrades/buy-upgrade/${tokenId}`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ upgradeId }),
            }
          );

          const result = await res.json();
          console.log(result);
          const increment = result.coinsPerClick;
          clicker.textContent += currentValue + increment;
        } catch (error) {
          console.log("Ошибка при покупке:", error);
        }
      });
    });
  });
