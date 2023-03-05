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
    
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <h1>{course.name}</h1>
            <ul>
                {course.parts.map((part, i) =>
                    <Part key={part.id} name={part.name} exercise={part.exercises} />
                )}
            </ul>
            <h2>total of {total}</h2>
        </div>
    )
}

export default Course