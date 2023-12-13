import { FC } from "react";
import { Link } from "react-router-dom";

interface MyNftCardProps {
  image: string;
  name: string;
  tokenId: number;
}

const MyNftCard: FC<MyNftCardProps> = ({ image, name,tokenId }) => {
  return (
    <li>
      <Link to={`/detail/${tokenId}`}>
      <img src={image} alt={name} />
      <div className="font-semibold mt-1">{name}</div>
      </Link>
    </li>
  );
};

export default MyNftCard;