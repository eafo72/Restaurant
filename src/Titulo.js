import React from 'react'

const Titulo = (props) => {
  return (
    <>
    <h2 align="center">{props.title}</h2>
    <p align="center">{props.subtitle}</p>
    </>
  )
}

export default Titulo