import React, { Component } from 'react';
import ResultsAdd from './ResultsAdd';
import instance from '../firebase/instance';
import ResultsList from './ResultsList';

class Results extends Component {
    state = {
        name: '',
        tecnology: '',
        grade: '',
        results: [],
    };

    componentDidMount() {
        instance.get('/results.json').then((response) => {
            const fetchedData = []

            for (let key in response.data) {
                fetchedData.push({ ...response.data[key], id: key })
            }
            this.setState({
                results: fetchedData
            })
        });
    }

    handlePost = e => {
        e.preventDefault()

        const Data = {
            name: this.state.name,
            tecnology: this.state.tecnology,
            grade: this.state.grade,
        };

        instance.post('/results.json', Data).then((response) => {
            console.log(response);

            const results = [...this.state.results, { ...Data, id: response.data.name },];

            this.setState({
                name: '',
                tecnology: '',
                grade: '',
                results: results
            })
        });
    };


    handleChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        });
    }

    handleDelete = (id) => {
        instance.delete(`/results/${id}.json`).then((response) => {
            console.log(response);
        });

        this.setState({
            results: this.state.results.filter(result => result.id !== id)
        })
    }

    render() {
        const { name, tecnology, grade, results } = this.state
        return (
            <div className='container'>
                <ResultsAdd
                    name={name}
                    tecnology={tecnology}
                    grade={grade}
                    handleChange={this.handleChange}
                    handlePost={this.handlePost}
                />
                <ResultsList
                    results={results}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default Results;
