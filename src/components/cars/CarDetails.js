import React from 'react'

const CarDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Registration Number - {id}</span>
                    <p>Lorem ipsum</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>notesssss</div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails
