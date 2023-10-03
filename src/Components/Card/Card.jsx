import { Link } from "react-router-dom";

const Card = ({card}) => {
   const {id, picture, title, category, color_text, color_card_bg } = card
  return (
    <div style={{background: color_card_bg}}>
   <Link to={`cards/${id}`}>
   <div className="card  shadow-xl">
  <figure><img src={picture} alt=" " /></figure>
  <div className="px-5 py-4">

    <button style={{background: color_card_bg, color: color_text}}  className="  px-2 "> {category}</button>
    <p style={{color: color_text}} className="text-xl">{title}  </p>
    
  </div>
</div>
   </Link>
    </div>
  );
};

export default Card;