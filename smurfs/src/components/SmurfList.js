import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <div className="smurf-container">
            {props.smurfs.characters.map(smurf => {
                return <Smurf key={smurf.name} smurf={smurf} />
            })}
            {console.log(props)}
        </div>

    )
}

export default SmurfList