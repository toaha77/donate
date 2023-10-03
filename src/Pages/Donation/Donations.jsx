 
const Donations = ({card}) => {
    const {id, picture, title, category, color_text, color_button_bg,price, color_card_bg } =  card
    return (
        <div className="gap-4">
            
            <div style={{background: color_card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <button style={{background: color_card_bg, color: color_text}} className="px-2 rounded-sm">{category}</button>
    <h4 className="mb-2 block   text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
   {title}
    </h4>
    <p className="mb-8 block   text-base font-normal leading-relaxed   antialiased">
      {price}
    </p>
     <button style={{background:  color_button_bg}} className="text-white  btn ">View Details</button>
  </div>
</div>

        </div>
    );
};

export default Donations;