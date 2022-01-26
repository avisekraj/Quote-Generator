const content = document.getElementById("conten");
const author = document.getElementById("author");
const getQuotesbtn = document.getElementById("getQ");



let realData = "";
let quoteData = "";

const getQutoes = () => {


    let rnum = Math.floor(Math.random() * 1643) + 1;
    quoteData = realData[rnum];

    content.innerHTML = `${quoteData.text}`
    quoteData.author == null ? (author.innerHTML = "Unknown") : (author.innerHTML = `${quoteData.author}`);
}


const Quote = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        getQutoes();
        console.log(realData.length);
    } catch (error) {}
};

getQuotesbtn.addEventListener("click", getQutoes);

Quote();