function DriverCard(props) {
  const rating = Math.floor(props.rating);

  console.log(rating);

  return (
    <div className="drivercard">
      <div>
        <img src={props.img} alt="img" className="img" />
      </div>
      <div className="dados">
        <div className="name">{props.name}</div>
        <div>
          {[...Array(5)].map((start, index) => {
            index += 1;
            return (
              <span className={index <= rating ? 'on' : 'off'}>
                &#9733;
              </span>
            );
          })}
        </div>
        <div className="car">
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
