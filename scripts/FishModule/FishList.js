
import { useFish } from "./fishDataProvider.js"
import FishComponent from "./fish.js"

/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()


    contentElement.innerHTML += `
        <section class ="fishList">
        ${
        fishes.map(
            (currentfish) => {
                return FishComponent(currentfish)
            }
        ).join("")
        }
        </section>
        `
}
/*
    let fishHtmlRepresentations =""
    for (const of fishes) {
        fishHTMLRepresentations += FishComponent(fish)
    }
 
    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="fishList">
            ${fishHTMLRepresentations}
        </section>
    `
}*/

export default FishListComponent