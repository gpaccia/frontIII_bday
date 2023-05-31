import React from 'react'

const Tarjeta = ({bday, styles}) => {
  return (
    <div className='tarjeta' style={{background: styles.background, color: styles.color}}>
        <h3>Estás invitado al cumple de {bday.name}</h3>
        <h4>Te espero el día {bday.date} a las 17hs.</h4>
        <h2>¡No faltes!</h2>
        <h4>Para: {bday.guest}</h4>
    </div>
  )
}

export default Tarjeta