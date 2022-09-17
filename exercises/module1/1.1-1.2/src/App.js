const Header = (props) =>{
  return (
    <div>
      <p>
        {props.course}
      </p>
    </div>
  )
}

const Content = (props) =>{
  return (
    <div>
      <p>
        <Part part={props.exercises}/>
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part}
    </div>
  )
}

const Total = (props) =>{
  return (
    <div>
      <p>
         Number of exercises = {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        <Header course={part1} /> 
        <Content exercises={exercises1} />
      </p>
      <p>
        <Header course={part2} />
        <Content exercises={exercises2} />
      </p>
      <p>
        <Header course={part3} />
        <Content exercises={exercises3} />
      </p>
      <p>
        <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      </p>
    </div>
  )
}

export default App