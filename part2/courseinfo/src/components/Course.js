import React from 'react'
import './course.css';

const Part = ({ id, name, exercise }) => {
    return (
        <li key={id}>
            {name} {exercise}
        </li>
    )
}

const Course = ({ course }) => {

    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map((part, i) =>
                    <Part key={part.id} name={part.name} exercise={part.exercises} />
                )}
            </ul>
        </div>
    )
}

export default Course