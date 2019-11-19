const borderColorChange = () => {
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


export default borderColorChange