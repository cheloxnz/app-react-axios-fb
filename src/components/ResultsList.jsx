import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const ResultsList = ({
    results,
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
        <div className='results-display'>
            <h2>{results.length} - Results Found</h2>
            {results.map((result) =>
                <ResultsDisplay
                    result={result}
                    key={result.id}
                    handleDelete={handleDelete}
                    handleModalOpen={handleModalOpen}
                    handleModalClose={handleModalClose}
                    modalIsOpen={modalIsOpen}
                    name={name}
                    tecnology={tecnology}
                    grade={grade}
                    handleChange={handleChange}
                    handleUpdate={handleUpdate}
                />
            )}
        </div>
    );
}

export default ResultsList;