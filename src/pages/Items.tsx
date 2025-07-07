import { Link } from "react-router";
import { items } from "../data/items";

const Items = () => {
  return (
    <div>
      {items.map((item) => (
        <Link key={item.id} to={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Items;
