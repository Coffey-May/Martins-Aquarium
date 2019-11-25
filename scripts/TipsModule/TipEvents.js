/*const borderColorChange = () => {
    const tipDivs = document.querySelectorAll(".tip")

    for (const tip of tipDivs) {
        tip.addEventListener(
            "mouseover",  (event) => {
                console.log("mouse over")
                tip.style.border = "1px dotted teal";
            })
        tip.addEventListener("mouseout", (event) => {
            console.log("mouse out")
            tip.style.border = "";
        })
    }
}


export default borderColorChange*/

const addMouseOverEventListeners = () => {
    const tipDivs = document.querySelectorAll(".tip")

    for (const card of tipDivs) {
        card.addEventListener(
            "mouseover",
            (theMouseOverEvent) => {
                card.classList.add("highlightFish")
            }
        )


        card.addEventListener("mouseout", theMouseOutEvent => {
            card.classList.remove("highlightFish")
        })
    }
}

export default addMouseOverEventListeners