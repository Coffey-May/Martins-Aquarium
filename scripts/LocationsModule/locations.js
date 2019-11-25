const locationComponent = (location) => {
    return `
        <div class="locations">
            <div>
                <img class="locations__image" src="${location.image}" alt="">
            </div>
            <div> ${location.location}</div>
           
            <button class="details--button" id="button--${location.location}">Details</button>

            <dialog class="dialog--location" id="details--${location.name}--dialog">
               
                <div>Location: ${location.location}</div>
               
               

                <button class="button--close">Close Dialog</button>
            </dialog>
        </div>
    `
}

export default locationComponent