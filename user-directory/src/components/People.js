import React, { Component } from 'react'

export default function People(props) {
    const person = props.info
    return (
        <div>
            <h4 className="slide">{person.id}/25</h4>
            <h4 className="name">{person.name.first} {person.name.last}</h4>
            <div className="info">
                <div className="location"><strong>From:</strong> {person.city}, {person.country}</div>
                <div className="position"><strong>Job Title:</strong> {person.title}</div>
                <div className="job"><strong>Employer:</strong> {person.employer}</div>
            </div>
            <div className="topic"><strong>Favorite Movies:</strong></div>
            <ol className="movies">
                <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}