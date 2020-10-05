import React from 'react';

const ResultsUpdate = ({ name, tecnology, grade, handleChange, handleUpdate, handleModalClose }) => {
    return (
        <div className='results-edit'>
            <form className='ui-form' autoComplete='off' onSubmit={handleUpdate}>
                <h2>Update Entry</h2>
                <label htmlFor="">Name:</label>
                <input
                    autoFocus
                    name='name'
                    required
                    placeholder='Name'
                    value={name}
                    type="text"
                    onChange={handleChange}
                />
                <label htmlFor="">Tecnology:</label>
                <input
                    name='tecnology'
                    required
                    placeholder='Tecnology'
                    value={tecnology}
                    type="text"
                    onChange={handleChange}
                />
                <label htmlFor="">Grade:</label>
                <input
                    name='grade'
                    required
                    placeholder='Grade'
                    value={grade}
                    type="text"
                    onChange={handleChange}
                />
                <input type="submit" value='Update' />
            </form>
            <button className='close-btn' onClick={() => handleModalClose()}>Close</button>
        </div>
    );
}

export default ResultsUpdate;