import { useAnimate } from "../hooks";

const B = () => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <div
      ref={detectedRef}
      className="bg-red-950 min-h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl text-white font-semibold animate__animated animate__delay-3s	mb-12">
        라스블랑카스의 두목 춘짱
      </h1>
      <img
        className={`w-96 h-96 ${
          isObserve && "animate__animated animate__zoomIn animate__verySlow"
        } ${!isObserve && "invisible"} `}
        src="./images/cat.jpg"
        alt="cat"
      />
    </div>
  );
};

export default B;
