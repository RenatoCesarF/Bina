import React, {useState} from 'react'
import './styles.css';
import { AiOutlinePlus } from 'react-icons/ai'
import { Modal, Button } from 'react-bootstrap'

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
      variant="primary"
      onClick={handleShow}
    >
      <AiOutlinePlus className='plusIcon' />

    </div>
      <Modal show={show} onHide={handleClose} animation={false} className='modal'>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
    </Modal>
    </>
  )
}

//exportação da função de rodapé
export default Plus;
