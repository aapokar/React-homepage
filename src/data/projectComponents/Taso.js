import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import taso from '../../images/taso.JPG'
import keittio from '../../images/keittio.JPG'


const Taso = () => {

return (
    <Segment padded='very'>
        <Header as="h1">Keittiön tasollinen kaappi.</Header>
        <Header as="h3">Keittiöön lasku- ja säilytystilaa, tee se itse tietenkin.</Header>
        <Image src={taso} size='medium' floated='left'/>
        <p>Muutettuamme juuri remontoituun vuokra-asuntoon tuli
            tarve eteisen laatikoston lisäksi saada lasku- ja
            säilytystilaa keittiöön. Tason pitäisi olla mittaan tehty
            ja sopia muuhun kalustukseen.</p>
        <p>No mikäs sen parempaa kuin itse lähteä kyseistä projektia
            suunnittelemaan. Materiaalina on ylijäämätavaraa: Runkona mm.
            pystyviiluparkettia, olisiko ollut Saima-mallistoa. Aika
            raskas runko tuli, mutta saipahan nurkissa
            pyörinyttä tavaraa pois varastoista.
        </p>
        <p>
           Suunnittelussa katsottiin halutut mitat ja mietittiin sopivuus
           kiinteisiin kalusteisiin. Maalin värin valinta oli yllättävän vaikea,
           vaikka kannoimme maaliliikkeestä värikortteja useampaankin otteeseen.
           Eri valossa pinta näytti aina eriltä ja valkoisia sävyjähän oli 
           tietysti kymmenittäin. Lopulta pintamaalin väri saatiin päätettyä ja
           muilla tasoilla näkyvää pintaa lähdettiin imitoimaan DC-FIXillä.
        </p>
        <Image src={keittio} size='medium' floated='right'/>
        <p>
            Tämä projekti meni silloin ammattitaidon kehittämisestä. Samalla
            tuli tutustuttua paremmin tarkistussahaan (eli sirkkeliin) joka
            konesalista löytyi. Katkaisuohjain oli noin 1,5 astetta vinossa...
            Suoristamiseen menikin sitten yksi iltapäivä hyvin rattoisasti.
        </p>
        <p>
            DC-FIX tuntuu hyvin kestävän käyttöä ja kulutusta keittiön tason pintana.
            Voin suositella! Paikalleen asentaminenkin sujuun näppärästi,
            kun pala on leikattu siististi mittaan ja kulmat suunniteltu hyvin.
            Sulkaa kun ei ollut niin paineltiin kirjalla kuplat pois.
        </p>
        <p>
            Aivan samanlaisia vetimiä, pintaa tai maalia ei tietenkään löytynyt
            kuin mitä kiinteissä kalusteissa on käytetty. Pulverimaalaus on
            tietenkin aina erinäköinen kuin telalla maalattu. Taso sopii varsin hyvin
            keittiöön, onhan se mittaan tehty, ja sävyerot häipyvät näkyvistä
            koska taso on eri puolella keittiötä kuin kiinteät kalusteet.
        </p>
        
    </Segment>
)

}

export default Taso