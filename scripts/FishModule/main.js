
import addMouseOverEventListeners from './highlight.js'
import initializeDetailButtonEvents from './dialogs.js'
import FishListComponent from './FishList.js'
import TipListComponent from '../TipsModule/tipEvents.js'


addMouseOverEventListeners()

FishListComponent()
TipListComponent()
initializeDetailButtonEvents()
