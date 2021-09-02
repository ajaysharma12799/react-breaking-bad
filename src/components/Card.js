import React from 'react'

const Card = ({character}) => {
    const {birthday, img, name, nickname, portrayed, status} = character;

    return (
        <div className="card mb-3" style={{width: "20rem"}}>
            <img src={img} className="card-img-top" alt={name} style={{width: "100%", height: "100%"}} />
            <div className="card-body">
                <h5 className="lead">Name : {name}</h5>
                <h5 className="lead">NickName : {nickname}</h5>
                <h5 className="lead">Birthday : {birthday}</h5>
                <h5 className="lead">Portrayed : {portrayed}</h5>
                <h5 className="lead">Status : {status}</h5>
            </div>
        </div>
    )
}

export default Card
