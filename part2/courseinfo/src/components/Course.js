import React from 'react'

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
                    <Part key={part.id} name={part.name} exercise={part.exercise} />
                )}
            </ul>
        </div>
    )
}

export default Course