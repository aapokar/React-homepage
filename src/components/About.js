import React, {useState} from 'react'
import { List, Segment, Header, Accordion, Icon } from 'semantic-ui-react'

const About = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    
    const handleClick = (e, titleProps) => {
        const { index } = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex( newIndex )
      }

return (
    <div>
    <h1>Tietoa sivustosta</h1>
    <p>
        Sivusto on rakennettu Reactilla. 
        Muotoilut on tehty Semantic UIn React-yhteensopivilla 
        komponenteilla. Semantic UI vastaa myös 
        responsiivisuudesta. Muita kirjastoja: Redux, 
        Redux-React, React-router.
    </p>
    <p>Backend toteutettu Nodella.</p>
    <p>Viihdepuolella tarinoita(ei vitsejä) haetaan Chuck Norris-tarinoiden tietokannasta, en ole keksinyt kaikkia itse...</p>

    <Accordion styled fluid>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={handleClick}
        >
          <Icon name='dropdown' />
          Tarkempaa tietoa sivun toteutuksesta
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <ul>
            <li>
                Reactin toiminnoista sivu käyttää useEffectiä sekä useStatea. 
                Statehook on esimerkiksi tällä About-sivulla avaamassa ja 
                sulkemassa tätä Accordionia. useEffectillä pidetään kirjaa
                mm. painikepelin pisteistä ja alustetaan Chuck Norris-tarina.
            </li>
            <li>Redux-Reactilla saadaan reducerit yhdistettyä ja tuotua storesta
                Providerilla komponenteille. Tässä appissa on omat reducerit painikepelille,
                ChuckNorris-tarinalle, ilmoitukselle sekä projektien tilalle.
            </li>
            <li>
                Projektien kuviin pitäisi saada klikattava zoomi. Lisätään kunhan
                ehditään.
            </li>
            <li>
                Koodit löytyvät tietenkin <a href="https://github.com/aapokar" target="_blank" rel="noopener noreferrer"> githubista.<Icon name='github' size='large' color='blue' /> </a>
            </li>
          </ul>
        </Accordion.Content>
    </Accordion>

    <Segment color='blue'>
        <Header as="h1" >Known bugs</Header>
        <List>
            <List.Item><List.Icon name='bug' />
            <List.Content>
            <List.Header>Viesti painikepelissä on toteutettu setTimeOutilla, 
                ei kestä nopeita klikkauksia.</List.Header>
                <i>Korjattu jäämään näkyviin.</i></List.Content>
            </List.Item>
            <List.Item><List.Icon name='bug' />
            <List.Content>
            <List.Header>Reititys ei toimi 
                _vielä_ backendiltä frontendin polkuihin. Toimii pelkässä frontendissä.</List.Header>
                <i>Korjattu reitittämään kaikki aloitussivulle.</i></List.Content>
            </List.Item>
        </List>
    </Segment>
    </div>
)
}

export default About