import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import laatikosto from '../../images/laatikosto.JPG'


const Laatikosto = () => {

return (
    <Segment padded='very'>
        <Image src={laatikosto} size='medium' floated='left'/>
        <Header as="h1">Laatikosto eteiseen</Header>
        <Header as="h3">Eteiseen mittatyönä tehty laatikosto/kenkäteline</Header>

        <p>Uuteen asuntoon muuttaessa 2016 tarvittiin uusia huonekaluja.
            Ongelma tässä uudessa asunnossa oli ensinnäkin se, että tarkoitus 
            on asua vain muutaman vuoden, sekä tietenkin erikoiset mitat.
        </p>
        <p>
            Tietyille mitoille ostetut huonekalut eivät välttämättä sovi
            kovin hyvin seuraavaan asuntoon ja isännällä oli sopivasti
            virtaa ylimääräisenä. Ajatuksena oli tehdä eteiseen säilytystaso,
            muutama laatikko ja sain myös ylipuhuttua laatikoston alaosaan
            lisätilaa kengille, jotka eivät meinanneet mahtua kuvassa näkyvään
            peilikaappiin.
        </p>
        <p>
            Ajatuksena oli tehdä omaperäistä muotoilua, jossa on vielä vähän 
            "luontoa jäljellä", niinkuin sanotaan. Tässä tapauksessa laatikoston
            runkoon käytin vanhaa koivulankkua, jonka särmäämättömät pinnat
            saisivat jäädä selvästi näkyviin. Koivulankku oli tietysti kuivaa kuin
            alkoholistin kurkku Saharassa. Meinasin kesken kaiken tehdä koko homman
            uusiksi, sillä höylätessä lankut tietenkin suoristumisen sijaan
            käyristyivät milloin mitenkin. Sovitukset kanteen ja välipohjaan
            tein jyrsimellä ja tapeilla. Kierojen lankkujen ansiosta kesällä joku
            laatikko saattaa vähän kanittaa...
        </p>
        <p>
            Muotoilun puolesta oppi oli kovaa. Näin jälkikäteen katsottuna
            tuote saattaa olla hiukan "overengineered", sillä kun kerroin
            tuttavalleni joka oli käymässä että tuo on minun tekemä, kysymys
            kuului: "Ai nuo molemmat??"
            Muotoilussa tässäkin tapauksessa vähemmän olisi saattanut olla enemmän,
            mutta ainakin tuote toimii siinä mihin se on tarkoitettu!
        </p>
        
    </Segment>
)

}

export default Laatikosto