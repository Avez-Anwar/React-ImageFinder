import technology from "./assets/technology.jpg";

const Technology = () => {
  return (
    <div>
      <div>
        <strong>Technology </strong>
      </div>
      <div>
        <img width="60%" className="rounded" src={technology} alt="wild life" />
      </div>
      <button>Accept</button>
      <button>Reject</button>
    </div>
  );
};

export default Technology;
