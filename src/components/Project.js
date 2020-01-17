import React from 'react'
import {Header, Icon, Image, Segment} from 'semantic-ui-react'

const Project = (props) => {
const project = props.project
    if (project===undefined) {
        return null
    }
const linkToGitHub = (project) => {
    if (project.codeUrl===null) {
        return null
    }
    return (
        <p>
            Koodi löytyy <a href={project.codeUrl}>täältä.</a>
        </p>
    )

}
    return (
        <Segment textAlign='center'>
        <Header as="h1" icon>
            <Icon name='wrench' />
            {project.name}
        </Header>
        <Image src={project.img} size='medium' floated='left' />
            <p>{project.description}</p>
            <p>{project.content}</p>
            {linkToGitHub(project)}
        </Segment>
    )
}

export default Project