import React, {useState} from 'react'
import { Modal} from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import {FaRegCommentAlt,FaImage,FaReply} from 'react-icons/fa'
import {BsCardText} from 'react-icons/bs'
import './styles.css';
//onClick() => open modal windows with new options

//função que retorna o footer/rodapé da pagina
function Plus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    < >
      <div
        className="plus"
        onClick={handleShow}
      >
        <AiOutlinePlus className='plusIcon' />

      </div>
      
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className='modal'
        backdrop="true"
        autoFocus="false"
        enforceFocus="false"
      >
        <form> 
        
          <div className="item"> 
            <FaReply className="itemSymble" size={25} />
            <h3 className="itemText">Arrow</h3>
            <hr className="line"/>
          </div>

          <div className="item"> 
            <FaRegCommentAlt className="itemSymble" size={25}/>
            <h3 className="itemText">Comentary</h3 >
            <hr className="line"/>
          </div>

          <div className="item"> 
            <FaImage  className="itemSymble" size={25}/>
            <h3 className="itemText">Image</h3 >
            <hr className="line"/>
          </div>

          <div className="item"> 
            <BsCardText className="itemSymble" size={25}/>
            <h3 className="itemText">Card</h3 >
            <hr className="line"/>
          </div>

        </form>
        <AiOutlinePlus className='Xicon' onClick={handleClose} />
      </Modal>

    </>
  )
}

//exportação da função de rodapé
export default Plus;
