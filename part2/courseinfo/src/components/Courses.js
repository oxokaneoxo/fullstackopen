import React from 'react'
import './courses.css';

const Part = ({ id, name, exercise }) => {
    return (
        <li key={id}>
            {name} {exercise}
        </li>
    )
}

const Content = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <h1> {course.name} </h1>
            <ul>
                {course.parts.map((part, i) =>
                    <Part key={part.id} name={part.name} exercise={part.exercises} />
                )}
            </ul>
            <h3>total of {total} exercises</h3>
        </div>
    )

}

const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map((course, i) => <Content key={course.id} course={course}/> )}
        </div>
    )
}

export default Courses