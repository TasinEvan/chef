

const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px] my-6" style={{backgroundImage: 'url(https://i.ibb.co/Xszd6dn/banner.png)'}}>
  <div className="bg-opacity-50 "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-white text-5xl font-bold">Unlock the secrets of delicious dishes <br /> from around the globe</h1>
      <p className="mb-5">Explore a diverse culinary landscape and unlock the secrets of global cuisine with our expert-led cooking classes. Join us for delicious, hands-on experiences and unforgettable culinary adventures</p>
      <div className=" flex justify-center items-center gap-3 ">
      <button className="rounded-3xl btn bg-green-500 border-none text-black btn-primary">Explore Now</button>
      <button className=" rounded-3xl text-white btn btn-outline ">Our Feedback</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;