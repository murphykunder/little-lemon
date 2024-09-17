import './ModalDailog.css';
import { ModalBody } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export const ModalDailog = ({show, handleClose, message}) => {

    return (

        <>
            <Modal show={show} onHide={handleClose} centered>
                <ModalBody>
                    <p className='modal-message'>{message}</p>
                    <button className="btn" id="modalCloseButton" onClick={handleClose}>Close</button>
                </ModalBody>
            </Modal>
        </>
    )
}