3:35
'use strict'
const paragraph = document.getElementById('rending')
let Ingredients=[];
let Preparation=[];
function Recipes(userRecipes, userStory, userServing, userTime, userPerfectBreak, userPerfectLunch, userPerfectDinner,userImage) {
    this.userRecipes = userRecipes;
    this.userStory = userStory;
    this.userServing = userServing;
    this.userTime = userTime;
    this.userPerfectBreak = userPerfectBreak;
    this.userPerfectLunch = userPerfectLunch;
    this.userPerfectDinner = userPerfectDinner;
    this.userIngred=Ingredients;
    this.userPreparation=Preparation;
    this.userImage=userImage;
}
Recipes.prototype.render = function () {
    const container = document.getElementById('showing')
    let nameOfRecipe = document.createElement('p');
    container.appendChild(nameOfRecipe);
    nameOfRecipe.textContent=this.userRecipes
    let numberOfServing = document.createElement('p');
    container.appendChild(numberOfServing);
    numberOfServing.textContent = `For ${this.userServing} People`;
    let timeOfRecipe = document.createElement('p');
    container.appendChild(timeOfRecipe);
    timeOfRecipe.textContent = `Cooking Time: ${this.userTime} Min`;
    let StoryText = document.createElement('p');
    container.appendChild(StoryText);
    StoryText.textContent = this.userStory;
    let ing = document.createElement('p');
    container.appendChild(ing);
    ing.textContent = 'Ingredients';
    let IngredText = document.createElement('ul');
    container.appendChild(IngredText);
    for(let i=0;i<Ingredients.length;i++){
    let li=document.createElement('li');
    IngredText.appendChild(li)
    li.textContent = this.userIngred[i];
    }
    let prepr = document.createElement('p');
    container.appendChild(prepr);
    prepr.textContent = 'Preparation';
    let PrepText = document.createElement('ul');
    container.appendChild(PrepText);
    for(let i=0;i<Preparation.length;i++){
    let li=document.createElement('li');
    PrepText.appendChild(li)
    li.textContent = this.userPreparation[i];
    }
    while(this.userPerfectBreak===true ||this.userPerfectLunch===true||this.userPerfectDinner===true){
    if(this.userPerfectBreak===true){
    let fectBreak = document.createElement('p');
    container.appendChild(fectBreak);
    fectBreak.textContent = 'Perfect For Breakfast';
    this.userPerfectBreak=false
    }else if(this.userPerfectLunch===true){
    let Lunch = document.createElement('p');
    container.appendChild(Lunch);
    Lunch.textContent = 'Perfect For Lunch';
    this.userPerfectLunch=false
    }else if(this.userPerfectDinner===true){
    let Dinner = document.createElement('p');
    container.appendChild(Dinner);
    Dinner.textContent = 'Perfect For Dinner';
    this.userPerfectDinner=false
    }
    }
    let image = document.createElement('img');
    container.appendChild(image);
    image.setAttribute("src",`${this.userImage}`)
    image.setAttribute("width", "450")
    image.setAttribute("hight", "450")
    }
    const form = document.getElementById('dish')
    form.addEventListener('onclick', myFunction)
    function myFunction() {
        event.preventDefault()
        var Ingred = document.getElementById("myBtn").value;
        console.log(Ingred);
        Ingredients.push(Ingred)
        document.getElementById("myBtn").value=""
      }
    form.addEventListener('onclick', preFunction)
    function preFunction() {
        event.preventDefault()
        var preper = document.getElementById("prep").value;
        console.log(preper);
        Preparation.push(preper)
        document.getElementById("prep").value=""
      }
// const form = document.getElementById('dish')
form.addEventListener('submit', handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    let Recipe = event.target.nameField.value
    let Story = event.target.recipeStory.value
    let serving = event.target.serving.value
    let time = event.target.cookTime.value
    let perfectBreak = event.target.breakfast.checked
    let perfectLunch = event.target.lunch.checked
    let perfectDinner = event.target.dinner.checked
    let evenImage=event.target.recipeImage.value
    let newRecipe = new Recipes(Recipe, Story, serving, time, perfectBreak, perfectLunch, perfectDinner,evenImage)
    console.log(newRecipe );
    newRecipe.render()
    // form.removeEventListener('submit', handleSubmit)
}
