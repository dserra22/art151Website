import "./App.css";
import React, { useEffect, useState, useReducer } from "react";

let allDishes: any = [];
allDishes.push("Pasta");
allDishes.push("Chicken");
allDishes.push("Bread");

let allPasta: any = [];
allPasta.push({
  name: "Zoodles Bolognese",
  desc: "SO GOOD. PLEASE BALANACE YOUR CARBS WITH LOW PASTA INTAKE. PLEASE. PLEASE.",
  img: "FALSE",
  video: "bolognese.mp4",
});
allPasta.push({
  name: "Chicken Alfredo",
  desc: "Mama mia. Sweet baby jesus",
  img: "chickenalfredo.jpg",
});
allPasta.push({
  name: "elbows alla vodka",
  desc: "This dish uses the vodka in order to make the flavors in the dish explode. Don't worry, cooking the dish evaporates the alcohol",
  img: "FALSE",
  video: "elbowsallavodka.mp4",
});
let allChicken: any = [];
allChicken.push({
  name: "Chicken parmesean",
  desc: "mama mia",
  img: "FALSE",
  video: "messup.mp4",
});
allChicken.push({
  name: "Chicken burger",
  desc: "Made this 11/02/22. It was the morning, I had one egg only. I needed more protein, so I said ok, lets make chicken burger",
  img: "FALSE",
  video: "chickenBurger.mp4",
});
allChicken.push({
  name: "Oven Roasted Stuffed Chicken breasts",
  desc: "We have not made this yet lol, but I will make it later",
  img: "chickenalfredo.jpg",
});
let allBread: any = [];
allBread.push({
  name: "Italian bread",
  desc: "mama mia. Wow. This hit. It lasted me about 1 week and a half and it was delicious.",
  img: "italianbread.JPG",
});
allBread.push({
  name: "My mess up",
  desc: "Mama mia. Sweet baby jesus",
  img: "FALSE",
  video: "messup.mp4",
});
allBread.push({
  name: "white bread",
  desc: "EWWWWW white bread",
  img: "whitebread.webp",
});

const dishReducer = (state: any, action: any): any => {
  if (action.type === "Chicken") {
    state = allChicken;
  } else if (action.type === "Pasta") {
    state = allPasta;
  } else if (action.type === "Bread") {
    state = allBread;
  }

  return state;
};

const App = () => {
  const [currentDish, dispatchAllDishes] = useReducer(dishReducer, allBread);

  const chooseDish = (e: any) => {
    if (e.target.nodeName !== "P") return;
    let name = e.target.innerHTML;
    dispatchAllDishes({
      type: name,
    });
  };

  const [dishName, updateDishName] = useState("");
  const [dishLink, updateLinkName] = useState("");

  useEffect(() => {
    updateDishName(
      currentDish === allBread
        ? "Bread"
        : currentDish === allPasta
        ? "Pasta"
        : "Chicken"
    );

    let curDish =
      currentDish === allBread
        ? "Bread"
        : currentDish === allPasta
        ? "Pasta"
        : "Chicken";

    console.log(currentDish);

    if (curDish === "Bread") {
      updateLinkName("https://en.wikipedia.org/wiki/Bread");
    } else if (curDish === "Pasta") {
      updateLinkName(
        "https://www.eataly.com/us_en/magazine/eataly-recipes/italian-pasta-recipes/"
      );
    } else if (curDish === "Chicken") {
      updateLinkName("https://en.wikipedia.org/wiki/Chicken");
    }
  }, [currentDish]);

  let currentCuisineJSX = currentDish.map((dish: any, i: number) => {
    let mediaJSX: JSX.Element;

    if (dish.img === "FALSE") {
      mediaJSX = (
        <video controls>
          <source src={require(`/${dish.video}`)} type="video/mp4" />
        </video>
      );
    } else {
      mediaJSX = (
        <img src={require(`./${dish.img}`)} alt={dish.name} className="image" />
      );
    }

    return (
      <li key={i} className="dish-box">
        <div>
          {mediaJSX}
          <h3 className="dish-title">{dish.name}</h3>
          <p className="dish">{dish.desc}</p>
        </div>
      </li>
    );
  });

  return (
    <>
      <header className="header">
        <div className="title">
          <p>IC</p>
        </div>
        <ul
          onClick={chooseDish}
          className={`links
          }`}
        >
          {allDishes.map((dish: string, i: number) => {
            return (
              <li key={i} className="link-elem">
                <p className={`${dishName === dish ? "selected-dish" : ""}`}>
                  {dish}
                </p>
              </li>
            );
          })}
        </ul>
      </header>
      <section className="italian-cuisine">
        <div className="container">
          <h1>{dishName}</h1>
          <div className="my-cooking">
            <ul
              className={`${
                currentDish === allBread
                  ? "Bread"
                  : currentDish === allPasta
                  ? "Pasta"
                  : "Chicken"
              }`}
            >
              {currentCuisineJSX}
            </ul>
          </div>
        </div>
        <div className="link">
          <div className="link-title">
            <a href={dishLink} target="_blank" rel="noreferrer">
              More {dishName}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
