import ButtonComponent from "../ButtonComponent";

function Hero() {
  return (
    <div className="flex">
      <div className="w-1/2 flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold">Welcome to our fake store</h2>
        <p className="text-gray-400 mb-5">
          Many products, luxury items, low price!.
        </p>
        <ButtonComponent title="Start Shopping" />
      </div>
      <div className="w-1/2">
        <img src="heroimage.png" />
      </div>
    </div>
  );
}

export default Hero;
