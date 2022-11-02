import "./App.css";
import React, { useState } from "react";

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
  img: "elbowsallavodka.png",
});
let allChicken: any = [];
allChicken.push({
  name: "Chicken parmesean",
  desc: "mama mia",
  img: "chickenparm.png",
});
allChicken.push({
  name: "Chicken Marsala",
  desc: "Mama mia. Sweet baby jesus",
  img: "chickenmarsala.png",
});
allChicken.push({
  name: "Oven Roasted Stuffed Chicken breasts",
  desc: "wow",
  img: "ovenroasted.png",
});
let allBread: any = [];
allBread.push({
  name: "Italian bread",
  desc: "mama mia",
  img: "italianbread.jpg",
});
allBread.push({
  name: "My mess up",
  desc: "Mama mia. Sweet baby jesus",
  img: "messup.png",
});
allBread.push({
  name: "white bread",
  desc: "EWWWWW white bread",
  img: "whitebread.png",
});

const App = () => {
  const [currentDish, updateDishes] = useState(allPasta);
  const chooseDish = (e: any) => {
    if (e.target.nodeName !== "P") return;

    let name = e.target.innerHTML;

    if (name === "Chicken") {
      updateDishes(allChicken);
    } else if (name === "Pasta") {
      updateDishes(allPasta);
    } else if (name === "Bread") {
      updateDishes(allBread);
    }
  };

  let currentCuisineJSX = currentDish.map((dish: any, i: number) => {
    let mediaJSX: JSX.Element = (
      <img
        src={require(`./chickenalfredo.jpg`)}
        alt={dish.name}
        className="image"
      />
    );

    // if (dish.img === "FALSE") {
    //   mediaJSX = (
    //     <video controls>
    //       <source src={`pictures/${dish.video}`} type="video/mp4" />
    //     </video>
    //   );
    // } else {
    //   mediaJSX = (
    //     <img
    //       src={"pictures/chickenalfredo.jpg"}
    //       alt={dish.name}
    //       className="image"
    //     />
    //   );
    // }

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
          <p>Italian cuisine</p>
        </div>
        <ul onClick={chooseDish} className="links">
          {allDishes.map((dish: string, i: number) => {
            return (
              <li key={i} className="link-elem">
                <p>{dish}</p>
              </li>
            );
          })}
        </ul>
      </header>
      <section className="italian-cuisine">
        <div className="container">
          <h1>Italian Cuisine</h1>
          <div className="my-cooking">
            <ul>{currentCuisineJSX}</ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
