import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import polo0 from '../../images/polo0.JPG'
import polo1 from '../../images/polo1.JPG'


const Lukko = () => {

return (
    <Segment padded='very'>
        <Header as="h1">2003 Polon lukon vaihto</Header>
        <Header as="h3">Repsikan puolen takaoven lukkopesän vaihto.</Header>
        <Image src={polo0} size='medium' floated='left'/>
        <p>Takaoven lukko alkuun temppuili niin, että avaamiseen 
            ovet piti "avata kaksi kertaa". Kovin kestävä ratkaisu tämä
            ei ollut, ja varsinkin lämpötilan laskiessa ei ovi lähtenyt enää
            auki.</p>
        <p>Merkkiliikkeestä ilmoitettiin, ettei lukkopesää löydy
            bulkkivaraosana vaan on pakko ottaa merkkiosa, ovh 240€.
            Saksasta tilattuna lukkopesä taisi maksaa n. 55€.
        </p>
        <p>
            Verhoiluiden irrottaminen ei taaskaan ollut mitään lystiä.
            Todellisuushan ei vastannut videota, mutta idea oli kuitenkin sama.
            Manuaalissa ja videolla on verhoilun pohjassa ruuvi, tässä Polossa
            ei verhoilun ruuveja ollut muualla kuin sisäkahvassa.
            Alhaalta klipsien irroituksen aloitus, lopuksi paneeli nostetaan ylöspäin.
        </p>
        <Image src={polo1} size='medium' floated='right'/>
        <p>
            Ikkunan kiinnikkeen kanssa oli omat haasteensa, lähinnä sen takaisin 
            laittaminen. Irtikopautus onnistui nätisti, ja lasi teipattiin yläasentoon
            työskentelyn ajaksi.
        </p>
        <p>
            Lukkopesä tulee nätisti pellin mukana pois, paikalleen laittaminen olikin
            oma hommansa. Lukkopesä kiinnitetään peltiverhoiluun
            ja puolisokkona sihdataan paikalleen omaan ahtaaseen rakoonsa. Itse
            jouduin vähän kopauttamaan että upposi.
        </p>
        <p>
            Onni takaovessa oli, ettei siellä ollut sähköikkunaa.
            Sähköikkunan mekanismi olisi tuonut omat hankaluutensa-
        </p>
        
        <p>Suuntaa antava <a href="https://www.youtube.com/watch?v=ScYiNu2W0Lw">video</a> aiheesta.</p>
    </Segment>
)

}

export default Lukko