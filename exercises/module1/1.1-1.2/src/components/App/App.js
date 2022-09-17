import Header from 'components/Header/Header'
import Content from 'components/Content/Content'
import Total from 'components/Total/Total'

import './App.css'

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