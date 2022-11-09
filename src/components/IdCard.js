function IdCard(props) {
  const height = props.height / 100;
  const birth = props.birth.toLocaleString();
  return (
    <div className="main" key={props.firstName}>
      <div>
        <img src={props.picture} alt="perfil" />
      </div>

      <div className="dados">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {height}m</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
