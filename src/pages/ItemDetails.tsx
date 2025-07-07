import { useParams } from "react-router";
import { items } from "../data/items";

const ItemDetails = () => {
  const { id } = useParams();
  const foundItem = items.find((item) => item.id === id);

  return (
    <div>
      <p>{foundItem?.name}</p>
      <p>{foundItem?.description}</p>
    </div>
  );
};

export default ItemDetails;
