import cars from "./assets/car1.jpg";

const Cars = () => {
  return (
    <div>
      <div>
        <strong>Cars </strong>
      </div>
      <div>
        <img width="60%" className="rounded" src={cars} alt="benz" />
      </div>
      <button>Accept</button>
      <button>Reject</button>
      <div></div>
    </div>
  );
};

export default Cars;
