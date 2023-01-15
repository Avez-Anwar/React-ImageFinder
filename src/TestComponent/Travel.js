import travel from "./assets/travel1.jpg";

const Travel = () => {
  return (
    <div >
      <div >
        <strong>Travel</strong>
      </div>
      <div >
        <img width="60%" className="rounded" src={travel} alt="travel" />
      </div>
      <button>Accept</button>
      <button>Reject</button>
      <div></div>
    </div>
  );
};

export default Travel;
