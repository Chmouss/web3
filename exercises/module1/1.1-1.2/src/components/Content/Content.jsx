import Part from "components/Part/Part"

const Content = (props) =>{
    return (
      <div>
        <p>
          <Part part={props.exercises}/>
        </p>
      </div>
    )
  }

  export default Content