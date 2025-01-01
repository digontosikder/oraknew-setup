import sortbanner from "../assets/home/chef-service.jpg";

const ShortBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${sortbanner})`,
      }}
      className="bg-cover bg-center lg:h-[572px]  my-14 flex items-center justify-center"
    >
      <div className=" text-center bg-white w-[75%] mx-auto py-[96px]">
        <h1 className="text-5xl mb-4">Bistro Boss</h1>
        <p className="w-[82%] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          repellendus accusantium quod nam voluptatum. Beatae eius facere
          inventore quos iure fugiat magni, unde, nostrum tempora cumque
          accusantium autem aliquid quae maiores pariatur illum ullam repellat
          reprehenderit neque? Ex, quod quaerat?
        </p>
      </div>
    </div>
  );
};

export default ShortBanner;
