/*
//import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './FishModule/highlight.js/index.js'
import borderColorChange from '../tipevents.js'
import { useFish } from './fishdataprovider.js'
import FishListComponent from './FishModule/FishList.js/index.js'
import locationsListComponent from './LocationsModule/locationList.js/index.js'
import initializeDetailButtonEvents from './FishModule/FishList.js'
FishListComponent()
locationsListComponent()



//initializeDetailButtonEvents() 
//initializeDetailButtonEvents()
addMouseOverEventListeners()
addMouseOverEventListeners()
const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)


for (const fish of allOfTheFish) {
    console.log("individual fish object:", fish)
}*/
import initializeDetailButtonEvents from './dialogs.js'
import FishListComponent from './FishList.js'
import TipListComponent from '../TipsModule/tipEvents.js'
import locationComponent from '../LocationsModule/locations.js'
import locationsListComponent from '../LocationsModule/locationsmain.js'

FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
locationComponent()
locationsListComponent()