import React from 'react'
import { Card, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


const projektit = (props) => {
    const mappedProjects = props.projects.map(p => 
        <Card as={Link} to={p.url} key={p.id}>
            <Image src={p.img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{p.name}</Card.Header>
                <Card.Description>
                    {p.description}
                </Card.Description>
            </Card.Content>
        </Card>
        )

    return (
        <Segment textAlign='center' padded='very'>
        <Card.Group>{mappedProjects}</Card.Group>
        </Segment>
    )
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects,
    }
  }
  
const connectedProjektit = connect(mapStateToProps)(projektit)

export default connectedProjektit