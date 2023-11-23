const Header = () => {
    return (
      <div className=" border-b-gray-600 border-" style={{borderBottom:"solid 1px gray"}}>
      <div className="w-[1060px] flex flex-col justify-center items-start text-2xl sticky top-0 mx-auto">
        <div className="flex w-full h-16 justify-between items-center">
            <img src={`./images/logo.png`} className="h-12"/>
            <input type="text" className="h-10 w-[520px] border-2 border-green-400 rounded-full"></input>
        </div>
        <ul className="flex gap-0 text-[16px] h-14 font-medium">
            <li className="flex items-center px-0 h-11 cursor-pointer"><a>개발자 채용</a></li>
            <li className="flex items-center px-5 h-11 cursor-pointer"><a>이력서</a></li>
            <li className="flex items-center px-5 h-11 cursor-pointer"><a>취업 Q&A</a></li>
            <li className="flex items-center px-5 h-11 cursor-pointer"><a>#꿀 피드</a></li>
            <li className="flex items-center px-5 h-11 cursor-pointer"><a>개발자 인터뷰</a></li>
            <li className="flex items-center px-5 h-11 cursor-pointer"><a>개취콘</a></li>
        </ul>
      </div>
      </div>
    );
  };
  
  export default Header;