const addElement = document.getElementById("add-template-btn");
const templateContainerElement = document.getElementById("template-container")

addElement.addEventListener("click",()=>{
    const templeteDivElement = document.createElement("div");
    templeteDivElement.className ="template";
    const headerDivElement = document.createElement("div");
    headerDivElement.className = "template-header";
    const pElement = document.createElement("p");
    pElement.className = "editable";
    pElement.innerHTML="New Template"
    const imgElement = document.createElement("img");
    imgElement.src="edit.png";
    imgElement.className = "rename-option";
    const bodyDivElement = document.createElement("div");
    bodyDivElement.className="template-body";
    const addImgElement = document.createElement("img");
    addImgElement.src ="add.png";
    addImgElement.className ="add-exercise-btn";

    templateContainerElement.appendChild(templeteDivElement);
    templeteDivElement.appendChild(headerDivElement);
    headerDivElement.appendChild(pElement);
    headerDivElement.appendChild(imgElement);
    templeteDivElement.appendChild(bodyDivElement);
    bodyDivElement.appendChild(addImgElement)
    templateNumberChange();
});

function templateNumberChange(){
    const templateCounterElement = document.getElementById("templates-counter");
    templateCounterElement.innerHTML = `My templates (${templateContainerElement.childElementCount})`
}

templateNumberChange();