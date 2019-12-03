const tipListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tipList")
    const tips = useTip()

    // Add to the existing HTML in the content element
 
    contentElement.innerHTML += `
    <aside class ="tipList">
    ${
    tips.map(
        (currenttip) => {
            return tipComponent(currentTip)
        }
    ).join("")
    }
    </aside>
    `
}
    `
}

export default tipListComponent