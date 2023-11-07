const clock = document.querySelector(".clock")

const getTime = () => {    
    const date = new Date();
    const sec = date.getSeconds().toString().padStart(2,'0');
    const min = date.getMinutes().toString().padStart(2,'0');
    const hour = (date.getHours()>=12 && date.getHours()!==24 ? "PM " : "AM " )+ (date.getHours()%12).toString().padStart(2,'0');

    clock.innerText = `${hour}:${min}:${sec}`    
};

getTime()
setInterval(getTime,1000);

function getQuotes() {
    const quotes = document.querySelector(".quotes");
  
    let savedQuotes = localStorage.getItem("QUOTES_LIST");
  
    if (!savedQuotes) {
      localStorage.setItem("QUOTES_LIST", JSON.stringify(["열심히 살자!"]));
  
      savedQuotes = localStorage.getItem("QUOTES_LIST");
    }
  
    let parsedQuotes = JSON.parse(savedQuotes);
  
    quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
  }
  getQuotes();

  function onClickNewQuotes() {
    const quotes = document.querySelector(".quotes");
    const newQuotes = document.querySelector(".new-quotes");
    const newQuotesInput = document.querySelector(".new-quotes-input");
    if (!newQuotesInput.value) return;
  
    // 로컬 스토리지에 저장
    let savedQuotes = localStorage.getItem("QUOTES_LIST");
    let parsedQuotes = JSON.parse(savedQuotes);
  
    parsedQuotes.push(newQuotesInput.value);
  
    localStorage.setItem("QUOTES_LIST", JSON.stringify(parsedQuotes));
  
    // 현재 페이지 반영
    quotes.innerText = newQuotesInput.value;
    newQuotesInput.value = "";

    quotes.style.display = "block";
    newQuotes.style.display = "none";
  }

  function onClickQuotes() {
    const quotes = document.querySelector(".quotes");
    const newQuotes = document.querySelector(".new-quotes");
  
    quotes.style.display = "none";
    newQuotes.style.display = "block";
  }
  async function getNft() {
    const nftImg = document.querySelector(".nft-img");
    const nftName = document.querySelector(".nft-name");
    const nftDesc = document.querySelector(".nft-desc");
  
    const response = await axios.get(
      "https://olbm.mypinata.cloud/ipfs/QmfLuVV5GdfjvzGgxJDU684B9tyhD4KY5vQD6ZwiAWBd5P"
    );

    nftImg.src = response.data.image
    nftName.innerText = response.data.name;
    nftDesc.innerText = response.data.description;
    
  }
  
  getNft();