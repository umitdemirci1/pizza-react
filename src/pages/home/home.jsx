import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <button>
        <Link to={"/order"}>Go Order</Link>
      </button>
    </div>
  );
};

export default Home;
