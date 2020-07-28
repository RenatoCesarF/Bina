import React from 'react'
import './styles.css';
import {AiOutlinePlus} from 'react-icons/ai'


//função que retorna o footer/rodapé da pagina
function Plus() {
    return (
        <div className="plus">
          <AiOutlinePlus className='plusIcon'/>
        </div>
    )
}

//exportação da função de rodapé
export default Plus;
