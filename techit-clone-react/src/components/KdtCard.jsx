const KdtCard = ({ image, title, ing, desc, period }) => {
  return (
    <div className="w-[290px] h-[416px]">
      <div className="overflow-hidden rounded-lg">
        <img
          className="hover:scale-110 duration-300 rounded-lg"
          src={`./images/${image}.webp`}
          alt={`aaaa`}
        />
      </div>
      <div className="pt-4">
        <span className="text-[#1d4ed8] text-sm font-semibold border border-[#1d4ed8] py-1 px-2 rounded-[4px]">
          모집중
        </span>
        <h3 className="pt-4 py-2 text-xl font-semibold">{title}</h3>
        <h5 className="text-lg">{desc}</h5>
        <div className="text-techit-gray-100 mt-4">{period}</div>
      </div>
    </div>
  );
};

export default KdtCard;