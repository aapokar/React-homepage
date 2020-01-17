import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import mcp from '../../images/mcp3008.jpg'
import datasheet from '../../images/mcp_datasheet.png'


const ADCRaspi = () => {
        return (
        <Segment padded='very'>
                <Header as="h1">ADC mcp3008</Header>
                <Image src={mcp} size='medium' floated="left" />
                <Header as="h3">Analogisen sensorin liittäminen Raspberry Pin digitaaliseen porttiin</Header>
                <p>Dashboardin ja palvelimen Apin koodit olivat vaihto-opiskelijoiden käsialaa, joten en niitä tähän laita</p>
                <p>Itse perehdyin seuraavaan kahteen riviin pythonia, jotka löytyvät nopeasti netistä</p>
                <p>r = spi.xfer([1, (8+channel) &lt;&lt; 4, 0])</p>
                <p>adcOut = ((r[1]\&amp;3) &lt;&lt; 8) +r[2]</p>
                <p>Yhdistettynä mcp3008 datasheettiin<Image src={datasheet} size='huge' floated='right' /></p>
                <p>nähdään, että ensimmäinen rivi vastaa datasheetilla Mcu transmitted dataa ja received data tulee 10 bitillä.</p>
                <p>Siten ykkösellä aloitetaan transfer, kanava valitaan siirtämällä valittu kanava tavun vasempaan laitaan ja lopuksi vielä lähetetään jotakin, jotta transfer pysyy käynnissä</p>
                <p>SPI kirjastoa tutkiessa huomasin mm. että muistia varataan saman verran vastaanottoon kuin lähetykseen.</p>
                <p>Datasheetissä näkyvät kolme vastaanotettua tavua. r[0] on merkityksetön, r[1] :stä maskataan 6 bittiä ja kerrotaan 8. Tämä lisätään tavuun r[2] ja voilá!</p>
        </Segment>
        )
}

export default ADCRaspi