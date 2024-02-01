import { formatCurrency } from "../../ultils/helpers";

/* eslint-disable react/prop-types */
const MenuCard = ({ pizza }) => {
  const { name, imageUrl, soldOut, unitPrice } = pizza;
  return (
    <div className="flex flex-col shadow-sm p-2">
      <div className="ml-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={imageUrl}
            alt={name}
            className={`h-24 ${soldOut ? "grayscale opacity-70" : ""}`}
          />
          <div>
            <p className="font-semibold ml-4 mb-1">{name}</p>
            <p className="ml-4">{formatCurrency(unitPrice)}</p>
          </div>
        </div>
        <div className="mr-4">
          <button className="px-4 py-2 rounded-sm bg-red-500 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
