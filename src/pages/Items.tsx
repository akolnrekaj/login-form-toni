import { Link } from "react-router";
import { items } from "../data/items";

const Items = () => {
  return (
    <div>
      {items.map((item) => (
        <>
          <h2>
            <Link key={item.id} to={item.id}>
              {item.name}
            </Link>
          </h2>
          <br />
        </>
      ))}
    </div>
  );
};

export default Items;
