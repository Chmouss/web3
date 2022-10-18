import pasta from 'components/Header/pasta.jpg'

//console.log(pasta);

const Header = (props) =>{
    return (
      <div>
        <p>
            <img src={pasta} alt="Pasta" />;
        </p>
        <p>
          {props.course}
        </p>
      </div>
    )
  }

  export default Header