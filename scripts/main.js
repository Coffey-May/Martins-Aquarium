
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlight.js'
import borderColorChange from './tipevents.js'
import { useFish } from './fishdataprovider.js'

initializeDetailButtonEvents() 

initializeDetailButtonEvents()
addMouseOverEventListeners() 
addMouseOverEventListeners()
const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)


for (const fish of allOfTheFish) {
    console.log("individual fish object:", fish)
}
