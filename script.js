const container = document.querySelector("#container");

container.addEventListener("mouseover", (event) => {
        let selected = event.target;
        selected.style.backgroundColor = "yellow";
});

container.addEventListener("mouseout", (event) => {
    let selected = event.target;
    selected.style.backgroundColor = "white";
});

const button =document.querySelector("#button");

button.addEventListener("click", (event) => {
        container.innerHTML = "";
        let newNum = Number(prompt("How many squares per line?", 8));
        newNum += 1;
        
        for (let index = 1; index < newNum; index++) {
            const subcontainer = document.createElement("div");
            subcontainer.classList.add(`row`);
            subcontainer.id = index;
            container.appendChild(subcontainer);
        
            for (let newindex = 1; newindex < newNum; newindex++) {
                const element = document.createElement("div");
                element.classList.add(`square`); 
                element.id = newindex;
                //element.textContent = newindex; 
                subcontainer.appendChild(element);  
            }
             
        }
});