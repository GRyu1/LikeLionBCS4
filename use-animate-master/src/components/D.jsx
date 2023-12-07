import ImageComp from "./ImageComp";

const D = () => {
  return (
    <div className="bg-green-950 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl text-white font-semibold animate__animated animate__delay-3s	mb-12">
        라스블랑카스의 두목 춘짱
      </h1>
      <ImageComp
        image="cat.jpg"
        animateName="animate__animated animate__zoomIn animate__verySlow"
      />
    </div>
  );
};

export default D;
