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

document.querySelector("#button--bart2").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bart3").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bart4").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bart5").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)

document.querySelector("#button--bart6").addEventListener(
    "click",
    theClickEvent => {
        const theDialog = document.querySelector("#details--bart")
        theDialog.showModal()
    }
)
export default initializeDetailButtonEvents