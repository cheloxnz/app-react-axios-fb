import React from 'react';

const ResultsAdd = ({ name, tecnology, grade, handleChange, handlePost }) => {
    return (
        <div className='results-add'>
            <form className='ui-form' autoComplete='off' onSubmit={handlePost}>
                <h2>New Entry</h2>
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
                <input type="submit" />
            </form>
        </div>
    );
}

export default ResultsAdd;