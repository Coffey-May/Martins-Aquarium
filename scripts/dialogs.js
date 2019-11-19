const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

    // You will be writing code below this line

    // Show Bart's details when the button is clicked
    document.querySelector("#button--bart").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--bart")
            theDialog.showModal()
        }
    )


}

document.querySelector("#button--bartA").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bartB").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bartC").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bartD").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bartE").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)
export default initializeDetailButtonEvents