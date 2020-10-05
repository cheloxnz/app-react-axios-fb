import React, { Component } from 'react';
import ResultsAdd from './ResultsAdd';
import instance from '../firebase/instance';
import ResultsList from './ResultsList';
import { trackPromise } from 'react-promise-tracker';
import { toast } from 'react-toastify';

class Results extends Component {
    state = {
        name: '',
        tecnology: '',
        grade: '',
        results: [],
        modalIsOpen: false,
    };

    componentDidMount() {
        trackPromise(instance.get('/results.json').then((response) => {
            const fetchedData = []

            for (let key in response.data) {
                fetchedData.push({ ...response.data[key], id: key })
            }
            this.setState({
                results: fetchedData
            })
        })
        );
    }

    handlePost = e => {
        e.preventDefault()

        const Data = {
            name: this.state.name,
            tecnology: this.state.tecnology,
            grade: this.state.grade,
        };

        trackPromise(instance.post('/results.json', Data).then((response) => {
            console.log(response);

            const results = [...this.state.results, { ...Data, id: response.data.name },];

            this.setState({
                name: '',
                tecnology: '',
                grade: '',
                results: results
            });

            toast.success('You added a new entry...')
        })
        );
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
        });

        toast.error('Entry Removed...')
    };

    handleModalOpen = (id) => {
        const result = this.state.results.find(result => result.id === id)
        this.setState({
            name: result.name,
            tecnology: result.tecnology,
            grade: result.grade,
            id: result.id,
            modalIsOpen: true,
        });
    }

    handleModalClose = () => {
        this.setState({
            modalIsOpen: false,
            name: '',
            tecnology: '',
            grade: '',
        });
    }

    handleUpdate = (e) => {
        e.preventDefault()

        this.setState({
            modalIsOpen: false,
        })

        const Data = {
            name: this.state.name,
            tecnology: this.state.tecnology,
            grade: this.state.grade,
        };

        trackPromise(instance.put(`/results/${this.state.id}.json`, Data).then((response) => {
            console.log(response)
            instance.get('/results.json').then((response) => {
                const fetchedData = []

                for (let key in response.data) {
                    fetchedData.push({ ...response.data[key], id: key })
                }
                this.setState({
                    results: fetchedData,
                    name: '',
                    tecnology: '',
                    grade: '',
                });
            });

            toast.info('Entry Updated...')
        })
        );
    }

    render() {
        const { name, tecnology, grade, results, modalIsOpen } = this.state
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
                    handleModalOpen={this.handleModalOpen}
                    handleModalClose={this.handleModalClose}
                    modalIsOpen={modalIsOpen}
                    name={name}
                    tecnology={tecnology}
                    grade={grade}
                    handleChange={this.handleChange}
                    handleUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default Results;
