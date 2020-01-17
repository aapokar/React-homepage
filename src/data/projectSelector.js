import Nopeuspeli from './projectComponents/Nopeuspeli'
import Mearm from './projectComponents/Mearm'
import Ennustin from './projectComponents/Ennustin'
import ADCRaspi from './projectComponents/ADCRaspi'

const projectComponent = (id) => {
    switch(id) {
        case 1:
            return Nopeuspeli
        case 2:
            return Mearm
        case 3:
            return Ennustin
        case 4:
            return ADCRaspi
        default:
            return null
}
}

default export projectComponent