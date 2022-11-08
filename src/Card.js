import React from 'react';

function Card(props) {
    function handleSubmit() {
        alert(`${props.id} ${props.firstName} ${props.lastName}`)
    }
    return (
        <div className="cardholderitem">
            <div className="datainfo">
                <h4>{props.version} {props.date}</h4>
            </div>
            <div className="profile">
                <div className={`status ${props.status.toLowerCase()}`}>{props.status}</div>
                <div className="profile-info">
                    <img className="holding-img-profile" src={props.avatar} />
                    <h5>{props.firstName} {props.lastName}</h5>
                </div>
            </div>
            <div className="card-description">
                <p>{props.description}</p>
            </div>
            <div className="button-container">
                <button onClick={handleSubmit} type="button" className="download-button">Download</button>
            </div>
        </div>
    );
}

export default Card;