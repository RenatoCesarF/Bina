import React, {useState, setShow,Button} from 'react';
import {Modal} from 'react-bootstrap';
import './styles.css';
import { Rnd } from 'react-rnd'
import 'react-bootstrap'


function Board() {
  
  //if (description.height > board.height) description.fontcolor = 0000000 (transparent)
  // minWidth: var titulo.width
  return (
        <Rnd
        className='board'
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
          
          
        }}
        minWidth='50'
        minHeight='45'

        >
            
          <h3 className="title">TITUlO</h3>
            
          <p className="description">Aprende que o tempo não é algo que possa voltar atrás.
            Portanto, plante você mesmo seu jardim e decore sua alma –
            ao invés de esperar eternamente que alguém lhe traga flores.
            E você aprende que, realmente, tudo pode suportar;
            que realmente é forte e que pode ir muito mais longe –
            mesmo após ter pensado não ser capaz.E que realmente a vida tem seu valor,
            e, você, o seu próprio e inquestionável valor perante a vida.
          </p>
     
      </Rnd>
    
  )
}

export default Board;