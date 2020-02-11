import React from 'react'
import { addSmurf } from '../actions/Actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleSubmit = () => {

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    createSmurf = (e) => {
        e.preventDefault()
        const { name, age, height } = this.state
        this.props.addSmurf(name, age, height)
            // .then(() => {
            //     this.props.history.push('/smurfs')
            // })
            .catch((err => {
                console.log(err)
            }))
        this.setState = {
            name: '',
            age: '',
            height: '',

            // id: Date.now()
        }
    }

    render() {
        const { name, age, height } = this.state
        const { fetchingSmurfs, error } = this.state

        return (
            <form
                className="form"
                onSubmit={this.createSmurf}
            >
                {error && <p className='error'>
                    {}error</p>}

                <h2>Create a New Smurf</h2>

                <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    value={name}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name='age'
                    placeholder="Age"
                    value={age}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name='height'
                    placeholder="Height"
                    value={height}
                    onChange={this.handleChange}
                />
                <br />
                {
                    fetchingSmurfs ? <p>Loading...</p> :
                        <button type="submit">
                            Create Smurf
                </button>
                }
            </form >
        )
    }
}

const mapDispatchToProps = {
    addSmurf,
}

const mapStateToProps = (state) => ({
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form))