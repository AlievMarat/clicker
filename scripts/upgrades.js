const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
const upgrades = [
  {
    id: 1,
    name: "Click Accelerator",
    description: "speed of earning x10",
    price: 40000,
  },
  {
    id: 2,
    name: "Coin Multiplayer",
    description: "ClickCoins per click x10",
    price: 40000,
  },
  {
    id: 3,
    name: "Power Tap",
    description: "ClickCoins per click x2",
    price: 10000,
  },
  {
    id: 4,
    name: "Golden Touch",
    description: "random bonus on click",
    price: 40000,
  },
  {
    id: 5,
    name: "Click Accelerator",
    description: "passive income x10",
    price: 40000,
  },
  {
    id: 6,
    name: "Mining Drone",
    description: "automated clicks for 1 min",
    price: 100000,
  },
];
app.get("/upgrades", (req, res) => {
  return res.status(200).json({
    message: "OK",
    upgrades: upgrades,
  });
});
app.get("/upgrades:id", (req, res) => {
  const { id } = req.params;
  const specificUpgrade = upgrades.find((upgrade) => upgrade.id === id);
  return res.json(200).send({
    message: "OK",
    upgrade: specificUpgrade,
  });
});
app.post("/upgrades", (req, res) => {
  const upgrade = req.body;
  upgrades.push(upgrade);
  return res.json(201).send({
    message: "Created",
  });
});
app.put("/upgrades:id", (req, res) => {
  const { id } = req.params;
  const putUpgrade = req.body;
  const changeUpgrade = upgrades.findIndex((upgrade) => upgrade.id === id);
  if (changeUpgrade !== -1) {
    upgrades[changeUpgrade] = putUpgrade;
    return res.json(201).send({
      message: "Created",
    });
  } else {
    return res.json(404).send({
      message: "Not Found",
    });
  }
});
app.delete("/upgrades:id", (req, res) => {
  const { id } = req.params;
  const specificUpgrade = upgrades.find((upgrade) => upgrade.id === id);
  return res.json(204).send({
    message: "No Content",
  });
});
app.listen(port, () => {
  console.log("server is running on port 3000");
});
