fetch("http://localhost:3000/upgrades")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".sidebar");
    console.log(data);
    container.innerHTML = data.upgrades
      .map(
        (item) => `
         <div class="sidebar__card">
            <div class="sidebar__card--content">
              <img
                class="sidebar__img"
                src="./assets/Sign up/Iconly/Light-Outline/Iconly/Light-Outline/Placeholder Square.png"
              />
              <div class="sidebar__info">
                <p class="sidebar__title">${item.name}</p>
                <p class="sidebar__text">${item.description}</p>
                <div class="sidebar__total">
                  <p class="sidebar__total--title">
                    <img
                      src="./assets//Sign up//Iconly//Light-Outline//Iconly//Light-Outline/Coin.png"
                    />
                    ${item.name}
                  </p>
                  <button class="sidebar__total--btn">Buy</button>
                </div>
              </div>
            </div>
          </div>
      `
      )
      .join("");
  });
