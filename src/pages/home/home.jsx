import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuCard from "../../components/home/menuCard";

const Home = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div className="grid grid-cols-2">
      {menu.map((pizza) => (
        <MenuCard pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
};

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Home;
