import { useLocations } from "./locationsdataprovider.js"
import locationComponent from "./locations.js"

const locationsListComponent = () => {
    
    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".content")
    const locations = useLocations()

    let alllocationHTML = ""

    for (const location of locations){
        let locationHTML = locationComponent(location)
        alllocationHTML += locationHTML
        
    }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="locationList">
            ${alllocationHTML}
        </section>
    `
}

export default locationsListComponent