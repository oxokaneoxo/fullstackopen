const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={[props.parts[0]]} />
      <Part part={[props.parts[1]]} />
      <Part part={[props.parts[2]]} />
    </>
  )
}
const Part = (props) => {
  const { name, exercises } = props.part[0];
 
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
const Total = (props) => {
  const { exercises } = props.parts[0];

  return (
    <p>Number of exercises {exercises + exercises + exercises}</p>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App