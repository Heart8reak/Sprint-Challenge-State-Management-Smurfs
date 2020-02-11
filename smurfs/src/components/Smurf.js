import React from 'react'

const Smurf = props => {
    return (
        <div className="smurf">
            <h3>Name:</h3>
            <p>{props.smurf.name}</p>
            <h3>Age:</h3>
            <p>{props.smurf.age}</p>
            <h3>Height:</h3>
            <p>{props.smurf.height}</p>
        </div>
    )
}

export default Smurf