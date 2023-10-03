const Banner = () => {
  return (
    <div className="">
      <div
        className="hero h-[80vh]"
        style={{
          backgroundImage: "url(https://i.ibb.co/ZXRTy2K/donate.jpg)",
        }}
      >
        <div className="hero-overlay bg-white bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" ">
           <div>
           <h1 className="mb-5 text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
           </div>
            <div className="form-control flex justify-center items-center">
              
              <div>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Search here..... "
                  className="input input-bordered"
                />
                 <button  className="bg-red-600 text-white px-3">Search</button>
              </label>
              </div>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
