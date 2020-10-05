import React from 'react';
import ResultsDisplay from './ResultsDisplay';

const ResultsList = ({ results, handleDelete }) => {
    return (
        <div className='results-display'>
            <h2>{results.length} - Results Found</h2>
            {results.map((result) =>
                <ResultsDisplay
                    result={result}
                    key={result.id}
                    handleDelete={handleDelete} />
            )}
        </div>
    );
}

export default ResultsList;