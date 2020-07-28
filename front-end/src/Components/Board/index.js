import React from 'react'
import './styles.css';
import {Rnd}from 'react-rnd'

function Board() {
 
    return (
      <Rnd
      className='board'
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      Rnd
    </Rnd>
    )
}

export default Board;