const Box = ({ bgColor, title, isRounded }) => {
    return (
      <div
        className={`${bgColor} ${
          isRounded && "rounded-full"
        } text-white flex justify-center items-center w-32 h-32`}
      >
        {title}
      </div>
    );
  };
  
  export default Box;