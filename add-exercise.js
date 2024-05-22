bindEvents();
document.getElementById("add-template-btn").addEventListener("click",bindEvents);
function addExercise(event){
    const templateBodyElement = event.target.parentNode;
    const divElement = document.createElement("div");
    const pElement = document.createElement("p");
    const imgElement = document.createElement("img");
    divElement.className = "template-exercise";
    pElement.innerHTML = "Exercise";
    imgElement.src = "minus.png";
    divElement.appendChild(pElement);
    divElement.appendChild(imgElement);
    templateBodyElement.appendChild(divElement);
    console.log(templateBodyElement.parentNode.getBoundingClientRect()?.height + 35 + "px" );
    if(templateBodyElement.getBoundingClientRect()?.height > 380){
        templateBodyElement.parentNode.style.height = templateBodyElement.parentNode.getBoundingClientRect()?.height + 35 + "px";
    }
    console.log(templateBodyElement.parentNode.getBoundingClientRect()?.height );
}
function bindEvents(){
    document.querySelectorAll(".add-exercise-btn").forEach(e =>{
        e.addEventListener("click",addExercise);
    });
}