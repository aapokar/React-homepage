import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon, Segment, Header } from 'semantic-ui-react'

import {setJoke} from '../reducers/jokeReducer'
import {setStatus} from '../reducers/gameReducer'
import {newNotification} from '../reducers/notificationReducer'

import gameService from '../services/gameService'

import Notification from '../components/Notification'


const Viihde = (props) => {
    const handleClick = (e) => {
        props.setJoke()
    }

    const resetGame = () => {
      props.setStatus(20)
    }

    const handlePlay = (e) => {
      const status = {
        score: props.score
      }
      gameService.postStatus(status).then(e => {
      if (e.voitto) {
        props.newNotification(e.voitto)
      } else {
        props.newNotification([e.next, 'neutral'])
      }
      window.localStorage.setItem('scorePoints', e.score)
      props.setStatus(e.score)
      })
  }

    return (
      <div>
        <Segment textAlign='center'>
            <Button icon onClick={handleClick}>
            Paina tästä ja lisää viihtymistäsi!<br/>
            <Icon name='random' loading  />
            </Button>
            <p>{props.joke}</p>
        </Segment>
        <Segment textAlign='center'>
            <div>
              <Header as="h1">Painikepeli</Header>
            {props.score===0 ?
            <div>
              <h2>Valitettavasti pisteesi loppuivat.</h2>
            <Button onClick={resetGame}> Aloita alusta </Button>
            </div> :
            <Button icon onClick={handlePlay}>
            Paina tästä pelataksesi!<br/>
            <Icon name='wrench' loading  />
            </Button>
              }
            <h2>Pistetilanteesi: {props.score}</h2>
            <Notification />
            </div>
        </Segment>
        <Segment raised textAlign='center'>
          <Header as="h2">Painikepelin tiedot</Header>
          <Header as="h3">Painikepeli on tehty seuraavan tehtävänannon perusteella.</Header>
          <p>Tavoitteena on toteuttaa yksinkertainen moninpeli, 
            jota pelataan painamalla painiketta.
            Painikkeen painaminen maksaa yhden pisteen, 
            joita pelaajalla on lähtötilanteessa 20.</p>

          <p>Painiketta voi painaa vain, jos pelaajan pistesaldo 
            on positiivinen. Pelaajan painettua
            painiketta hänelle ilmoitetaan mahdollisesta voitosta.</p>

          <p>Pelaaja voittaa<br/>
              ● 5 pistettä joka 10. painallus<br/>
              ● 40 pistettä joka 100. painallus<br/>
              ● 250 pistettä joka 500. painallus.<br/>
          </p>
          <p>Pelaaja voi voittaa enimmillään yhden palkinnon 
          yhdellä painalluksella. Mikäli samalla
          painalluksella voittaisi yllä olevan listan mukaan 
          monta palkintoa, voittaa pelaaja näistä
          suurimman. Painiketta painaessa pelaaja ei tiedä, 
          mikä laskurin nykyinen arvo on, sillä kaikki
          pelaajat kasvattavat saman laskurin arvoa.</p>

          <p>Kun pelaaja painaa painiketta, tapahtuu seuraavat asiat:<br/>
          1. Pelaajalta vähennetään yksi piste.<br/>
          2. Laskurin arvo kasvaa yhdellä.<br/>
          3. Mikäli laskurin arvolle osuu palkinto (esim. laskurin arvolla 500 voittaa 250 pistettä),
          ilmoitetaan tästä pelaajalle ja lisätään voitto pelaajan pistesaldoon.<br/>
          4. Pelaajalle näytetään vaadittujen painallusten määrä seuraavaan voittavaan arvoon.<br/>
          </p>
          <p>Pelin käyttöliittymässä tulee näkyä pelaajan pistesaldo. Pelitilanteen tulee säilyä, vaikka
          selaimen (mikäli selainsovellus) tai sovelluksen (mikäli mobiilisovellus) käynnistää uudelleen.
          Mikäli pelaajan pistesaldo on 0, tarjotaan pelaajalle mahdollisuus aloittaa alusta, jolloin
          hänen pistesaldonsa palautetaan jälleen arvoon 20.
          Sovellus koostuu kahdesta osasta: käyttöliittymästä ja palvelimesta.
          </p>
        </Segment>
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      joke: state.joke,
      score: state.score
    }
  }

  const mapDispatchToProps = {
    setJoke,
    setStatus,
    newNotification
  }

const connectedViihde = connect(mapStateToProps, mapDispatchToProps)(Viihde)

export default connectedViihde