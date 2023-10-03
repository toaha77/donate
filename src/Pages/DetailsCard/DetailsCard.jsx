import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
 import DetailsDonation from "./DetailsDonation";

const DetailsCard = () => {
  const [card, setCard] = useState({});
  const { id } = useParams();
  const cards = useLoaderData();
  useEffect(() => {
    const findCard = cards?.find((card) => card.id === id);
    setCard(findCard);
  }, [id, cards]);
  return (
    <div>
     <DetailsDonation card={card}></DetailsDonation>
    </div>
  );
};

export default DetailsCard;
