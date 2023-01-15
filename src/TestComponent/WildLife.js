import wildLife from "./assets/wild-life.jpg"

const Wildlife = () => {
  return (
    <div >
      <div >
        <strong>WildLife </strong>
        
      </div>
      <div >
        <img width="60%" className="rounded" src={wildLife} alt="wild life" />
      </div>
      <button>Accept</button>
      <button>Reject</button>
      <div>

      </div>
    </div>
  );
};

export default Wildlife;
