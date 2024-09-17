const loadFoods = async () => {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const res = await fetch(url);
  const data = await res.json();
  showMeals(data.meals);
};
loadFoods();

const showMeals = (meals) => {
  let container = document.getElementById("container");
  container.innerHTML = "";
  meals.forEach((meal) => {
    let mealCard = document.createElement("div");
    mealCard.classList = "card card-compact bg-base-100 shadow-xl";

    mealCard.innerHTML = `
            <figure>
                <img src=${meal.strMealThumb} alt="Image of ${meal.strMeal}" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p title="${
                  meal.strInstructions
                }" >${meal.strInstructions.slice(0, 200)}...</p>
                <div class="card-actions justify-end">
                    <button onclick="handleShowDetails(${
                      meal.idMeal
                    })" class="btn btn-primary">Show Details</button>
                </div>
            </div>   
        `;
    container.appendChild(mealCard);
  });
};
