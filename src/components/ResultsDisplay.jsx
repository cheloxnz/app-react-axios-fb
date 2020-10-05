import React from 'react';

const ResultsDisplay = ({ result, handleDelete }) => {
    return (
        <div className='allProperties'>
            <span className='display'>{result.name}</span>
            <span className='display'>{result.tecnology}</span>
            <span className='display'>{result.grade}</span>
            <button className='remove-btn' onClick={() => handleDelete(result.id)}>Delete</button>
            <hr />
        </div>
    );
}

export default ResultsDisplay;