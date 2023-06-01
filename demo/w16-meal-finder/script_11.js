const search = document.querySelector('#search');
const submit = document.querySelector('#submit');
const random = document.querySelector('#random');
const resultHeading = document.querySelector('#result-heading');
const mealsEl = document.querySelector('#meals');
const single_mealEl = document.querySelector('#single-meal');


const searchMeal = (e) => {
    e.preventDefault();
    const term = search.value;
    // console.log('term', term);
    if(term.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => response.json())
        .then(data => {
            console.log('data',data);
            
            if(data.meals === null){
                resultHeading.innerHTML = `<p> There are no search results. Try again! </p>`
            } else {
                resultHeading.innerHTML = `<h2> Search Results for '${term}' </h2>`
                mealsEl.innerHTML = data.meals.map((meal)=>{
                    return `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" data-mealID="${meal.idMeal}" />
                            <div class="meal-info">
                                <h3> ${meal.strMeal} </h3>
                            </div>
                        </div>
                    `
                }).join('');
            }
        })
    } else {
        alert('Please enter a search term');
    }
}



// Event listeners
submit.addEventListener('click', searchMeal);