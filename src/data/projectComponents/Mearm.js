import React from 'react'
import mearm from '../../images/mearm.jpg'
import mearmon from '../../images/mearm_on.JPG'
import mearmcontent from '../../images/mearm_contents.JPG'
import { Header, Image, Segment } from 'semantic-ui-react'

const Mearm = () => {
    return (
    <Segment padded='very'>
        <Header as="h1">Mearm DIY</Header>
        <Image.Group size='medium'>
            <Image src={mearm} />
            <Image src={mearmon} />
            <Image src={mearmcontent} />
        </Image.Group>
        <Header as="h3">MeArmista tehty versio AtMega328P-sirulla 2mm opaalin värisestä akryylista.</Header>
        <p>
        Alun perin suunnittelin hexapodia, mutta päädyin omaan versioon 
MeArmista. Molemmista, hexapodista että mearmista, löytyy monenlaista
toteutusta. En nähnyt mielekkäänä kopioida valmiita piirustuksia, 
vaan itseasiassa punainen lanka olikin itse piirrellä Vertexillä 
osat ja miettiä miten rakenne saadaan toimimaan. Liitostavat ja 
joitakin yksityiskohtia toki katsoin suoraan valmiista malleista, 
mutta mitat ja muodot piirsin kaikki itse. Monissa valmiissa toteutuksissa runko 
näyttäisi olevan kiinnitetty suoraan servon roottoriin kiinni, itse 
päädyin sorvaamaan alustan alumiinista ja kiinnittämään sen isoon laakeriin.
Servon kiinnitit laakerin alle alumiinikeskiöön, sisäkuvassa näkyy servon
sivusuuntainen lukitus muovilevyllä tappeihin. Kotelo on muuten jyrsitty
MDF-kakusta CNC:llä. 
Ohjelman kehitysvaiheessa tutkin mahdollisuuksia puhelimella ohjaukseen ja 
lopulta päädyin käyttämään valmista ratkaisua (Ardudroid, linkki lopussa).
Tuossa koodissa olikin jo käytännössä kaikki virheentunnistusta myöten valmiina,
 muutamat yksityiskohdat (kuten portit) piti asettaa sopivaksi tähän projektiin. 
 Olisi ollut melkoinen työmaa lähteä itse siinä vaiheessa opiskelemaan 
 Android-ohjelmointia. Kuvissa näkyy, että en käyttänyt Arduinon valmiita boardeja, 
 vaan tein itse AtMega328P:lle piirilevyn. Käytännössä kyseessä on siis 
 kuitenkin Arduinon tekniikka, itse tehtynä, ilman ylimääräisiä development 
 boardin komponentteja. 
 Tila loppui kotelosta kesken, joten piirilevy piti 
 jakaa kahteen osaan.<br/>
 </p>
 <h4><i>Lopputulos</i></h4>
 <p>
 Iso ongelma tuli kun kasasin rungon, sillä pienet 
 kiinanservot hyytyivät painon alla. Tai ilmeisesti virtaa ei riittänyt 
 pitää haarukkaa ääriasennossa, vaan mikropiiri rupesi boottailemaan 
 jännitteen laskettua n. 4,5V. Paikkasin tilannetta lisäämällä tietokoneen 
 muuntajan virtalähteeksi kovimmassa rasituksessa oleville servoille, väliin 
 tosin tarvitsi säädettävän muuntajan. Tämä sähköongelma jäi lopulta ratkaisematta,
 sillä oskilloskoopin käyttö ei silloin onnistunut. Servojen käyttövirta oli
 muistaakseni luvattu ~400mA, mutta yleismittarin piikkinä kävi yli 800mA.
 Harmillisesti tämä projekti jäi viimeistelemättä. Siihen aikaan hain töitä
 syksyksi ja kesäksi, viimeistelin muita opintoja ja gradua, tein matematiikan
 sijaisuutta, pelasin ja tuomaroin salibandya...
        </p>
        <p>Koodina sovelsin <a href="http://www.techbitar.com/ardudroid-simple-bluetooth-control-for-arduino-and-android.html">tätä</a>.</p>
    </Segment>
    )
}

export default Mearm

