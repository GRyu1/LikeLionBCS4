import { useAnimate } from "../hooks";

const ImageComp = ({ animateName, image }) => {
  const { detectedRef, isObserve } = useAnimate();

  return (
    <img
      ref={detectedRef}
      className={`w-96 h-96 ${isObserve && animateName} ${
        !isObserve && "invisible"
      }`}
      src={`./images/${image}`}
      alt={image}
    />
  );
};

export default ImageComp;
