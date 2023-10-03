import { useEffect, useState } from "react";
import Donations from "./Donations";

 const Donation = () => {
    const [donations, setDonation] = useState([])
    const [show, setShow] = useState(false)
    const [noFound, setNoFound] = useState(false)
    useEffect(()=>{
        const donation = JSON.parse(localStorage.getItem('donation'))  
      if (donation) {
        setDonation(donation)
     
      }else{
        setNoFound('No donation here!')
      }
    }, [])
    return (
        <div>
         {noFound? <p className=" flex justify-center items-center">{noFound}</p> :
         <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
          {
            show ? donations.map(card=> <Donations key={card.id} card={card}></Donations>) :

            donations.slice(0, 4).map(card=> <Donations key={card.id} card={card}></Donations>)
          }
          </div>
          <div className="flex justify-center items-center mt-4">
          {donations.length > 4 && <button onClick={()=> setShow(!show)} className="btn btn-primary ">{show ? "See less" : " See more"}</button>}
          </div>
         </div>

         }
        </div>
    );
};

export default Donation;