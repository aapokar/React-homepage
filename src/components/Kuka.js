import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'
import me from '../images/me.jpg'
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const Kuka = () => {
    return (
        <div>
            <Header size='large'>Aapo Kärki</Header>
            <Image src={me} size='small' rounded floated='left' />
            <p>Urheiluhieroja, kasvatustieteiden maisteri, luokanopettaja, teknisen työn opettaja, 
                tieto- ja viestintätekniikan opiskelija.
            </p>
            <p>Työkokemusta mm. Fazerin karkkitehtaalta, 
                Amazonin keskusvarastolta(Leipzigissa), 
                hierojayrittäjänä franchiseketjussa. 
                Kesäisin mm. ollut kunnan hommissa ja keikkasiivousta L&amp;T:lla, sisältäen mm. 
                ikkunanpesuja ja lattioiden vahauksia. 
                Teknisen työn opettajan sijaisuuksia 
                useassa eri koulussa. 
                Teknisen työn opettajana Lahden lähistöllä, 
                pienemmän paikkakunnan koulussa 3v.</p>
            <p>Harrastuksiin aina kuulunut mm. salibandy ja jalkapallo. 
                Meriittinä hopeamitali pelaajavalmentajana Saksan salibandyn 
                Bundesliigasta. Suomen Cupin pikkufinaalin voitto LeBassa, 
                Leka-cupin voitto Juvalla ja Jussin tuvan katusählyn 
                mestaruus Pontuksella. Ja tietysti Hipan nousu Lahden Korttelin
                Mestigaan salibandyssa.</p>
            <p>Saksassa asutun vuoden hedelminä myös kielitaitona mm. saksaa ja englantia.</p>
            <p>Jos on asiaa sivustosta/projekteista tai haluat vaikka tarjota töitä, email on muotoa etunimi.sukunimi ja päätteenä student.lab.fi</p>
            <a href="https://www.linkedin.com/in/aapokarki" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' color='blue' size='huge' /></a>
            <a href="https://github.com/aapokar" target="_blank" rel="noopener noreferrer"><Icon name='github' size='huge' color='grey' /> </a>
        </div>
    )
}

export default Kuka