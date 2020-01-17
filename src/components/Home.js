import React from 'react'
import {Header, Icon, Segment} from 'semantic-ui-react'

const Home = (props) => {
    return (
        <div>
        <Header as="h1" icon textAlign='center'>
            <Icon name='home' />
            Tervetuloa kotisivuilleni!
        </Header>
        <Segment textAlign='center' color='grey'>
            <p>Sivusto on ennen kaikkea webbiohjelmointiportfolio. 
                Projekteista löytyy tosin paljon muutakin!
            </p>
        </Segment>
        </div>
    )
}

export default Home