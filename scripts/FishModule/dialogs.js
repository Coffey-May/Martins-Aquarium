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

    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const theDialog = document.querySelector(`#${theEvent.target.id}+dialog`)
                theDialog.showModal()
            }
        )
    }
}
export default initializeDetailButtonEvents