import React from 'react'
import nopeuspeli from '../../images/nopeuspeli.jpg'
import ss from '../../images/ss.JPG'
import ss1 from '../../images/ss_cont1.JPG'
import ss2 from '../../images/ss_cont2.JPG'
import { Header, Image, Segment } from 'semantic-ui-react'

const Nopeuspeli = () => {
        return (
                <Segment padded='very'>
                <Header as="h1">Nopeuspeli</Header>
                <Image.Group size='medium'>
                        <Image src={nopeuspeli} />
                        <Image src={ss} />
                </Image.Group>
                        <Header as="h3">Speden Speleistä tuttu nopeutta vaativa peli. Itse tehtynä tietenkin. Kolmen tonnin haaste!!</Header>
                <Image.Group size='large'>
                        <Image src={ss1} />
                        <Image src={ss2} />
                </Image.Group>
                <p>
                Projektissa tutustuin PICAXEn kehitysalustaan, 
        tavoitteena oli tehdä BASICilla peli. PICAXE on opetustarkoitukseen 
        kehitetty alusta hyvin rajallisilla ominaisuuksilla. 
        Aloitus on kuitenkin helppoa ja graafinen ohjelmointikin onnistuu.
        Tässä projektissa haasteita olivat mm. rajalliset 
        muistipaikat(muistaakseni 24 tavua muistia, jokainen erikseen 
                valmiiksi osoitettu) ja estetty/ei-mahdollinen pääsy 
                timer interrupteihin.
                Pysyvää muistia eli eepromia käytetään
                highscoren tallennukseen. Teknisesti lamppujen paloaika ja 
                samanaikainen näppäinten kuuntelu tapahtuu PICAXEn 
                pseudomoniajon ja external-interruptien yhdistelmällä.
                <br/>
                <br/>
                Näin vuosien jälkeen on toki karmeaa katsoa koodia.
                Kertoo hyvin siitä, miksi kirjoitetun koodin tulisi olla
                hyvin dokumentoitua ja selkeää. Projekti oli kuitenkin todella
                haasteellinen ja sen toimimaan saaminen oli kyllä välillä
                työn ja tuskan takana. Yllättävän vaikeaa oli saada toimimaan
                esimerkiksi sellainen ominaisuus, että peli loppuu, mikäli
                pelaaja ei paina mitään nappia. Vastaavasti pelaaja voi antaa
                pari eteen ja vasta sittenruveta painelemaan.
                </p>
                <p>
                        Koodista on olemassa useita eri versioita, 
                        jossain vaiheessa lisäilin vielä PWM:llä
                        pelin mittaan kirkastuvia ledejä.
                        Sisällä on luultavasti tämä <a href="https://github.com/aapokar/SpedenSpeli_Picaxe_basic">koodi</a>.
                </p>
                </Segment>
        )
}

export default Nopeuspeli


        // codeUrl: "",
