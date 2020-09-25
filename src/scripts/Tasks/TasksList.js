const eventHub = document.querySelector(".dashboard")
import { useCars, getCars } from "./CarsProvider.js";
import {carsHTML} from "./Cars.js"

const eventHub = document.querySelector(".ColorsPreview")

export const carList = () => {
    getCars().then(() =>{
        const carsArray = useCars();
        render(carsArray);
    })
}

eventHub.addEventListener("colorChosen", event =>{
    if(event.detail.chosenColor !== "0"){ 
        const matchingCars = useCars().filter(carObj => {
            return carObj.colorId === event.detail.chosenColor
        });
        render(matchingCars)    

    }
    else render(useCars())
    })
  

const render = (carsArray2) => {
    const domElement = document.querySelector(".carCards")
    let HTMLArray = carsArray2.map(carObj => {
        return carsHTML(carObj);
    })
    domElement.innerHTML = HTMLArray.join("");
}