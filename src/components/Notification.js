import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'

const Notification = ({ message }) => {
  if (message === null || message==='') {
    return null
  }

  if (message[1]==='neutral') {
    return (    
    <Message compact>
      <Message.Header>Ei voittoa tällä kertaa.</Message.Header>
      <p>
        <b>Seuraavaan voittoon {message[0]} klikkausta.</b>
      </p>
    </Message>
    )
  }


  return (
    <Message positive compact>
    <Message.Header>Voitit juuri {message} pistettä ja ne lisättiin pistetilanteeseesi!</Message.Header>
    <p>
      <b>Seuraavaan voittoon 10 klikkausta.</b>
    </p>
  </Message>
  )


}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification