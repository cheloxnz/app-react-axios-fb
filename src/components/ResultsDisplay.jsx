import React from 'react';
import Modal from 'react-modal';
import ResultsUpdate from './ResultsUpdate';

Modal.setAppElement('#root');

const ResultsDisplay = ({
    result,
    handleDelete,
    handleModalOpen,
    handleModalClose,
    modalIsOpen,
    name,
    tecnology,
    grade,
    handleChange,
    handleUpdate
}) => {
    return (
        <div className='allProperties'>
            <span className='display'>Name: {result.name}</span>
            <span className='display'>Tecnology: {result.tecnology}</span>
            <span className='display'>Grade: {result.grade}</span>
            <button className='remove-btn' onClick={() => handleDelete(result.id)}>Delete</button>
            <button className="edit-btn" onClick={() => handleModalOpen(result.id)}>Edit</button>
            <hr />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => handleModalClose()}
                style={{
                    overlay: {
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                    },
                    content: {
                        border: "none",
                        background: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }}>
                <ResultsUpdate
                    handleModalClose={handleModalClose}
                    name={name}
                    tecnology={tecnology}
                    grade={grade}
                    handleChange={handleChange}
                    handleUpdate={handleUpdate}
                />
            </Modal>
        </div>
    );
}

export default ResultsDisplay;