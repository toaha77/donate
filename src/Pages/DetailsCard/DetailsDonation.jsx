 import Swal from "sweetalert2";
  
const DetailsDonation = ({card}) => {
  

    
    const {id, picture, title, description,price,  } =  card
    const handleDonation =() =>{
       const addedDonation =[]
       const donation = JSON.parse(localStorage.getItem('donation'))
       if (!donation) {
        addedDonation.push(card)
        localStorage.setItem('donation', JSON.stringify(addedDonation))
        Swal.fire({
          icon: 'success',
          title: 'Thank you!',
          text: 'Your Donate is done!',
           
        })
       }else{
        const isExists = donation.find((card)=> card.id === id)
      
       if (!isExists) {
        addedDonation.push(...donation, card)
        localStorage.setItem('donation', JSON.stringify(addedDonation))
        Swal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Your Donation okay!',
           
        })
       }
       else{
        Swal.fire({
          icon: 'error',
          title: "You can't donate anymore",
           
           
        })
       }
      }
    }
    return (
        <div>
       <div className="relative flex  flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img className="w-[1320px]  h-[600px]"
            src={picture}
            alt=""
          />
         <div className="absolute  text-white w-full py-5  top-[520px] bg-opacity-50 bg-black">
         <button onClick={handleDonation} className="bg-red-500 px-4 py-3 ml-4 rounded-lg">Donate :{price} </button>
         </div>
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
           {title}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
           {description}
          </p>
        </div>
        
      </div>
        </div>
    );
};

export default DetailsDonation;