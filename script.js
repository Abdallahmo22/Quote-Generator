const quote = document.getElementById('quote')
const author = document.getElementById('author')
const newQ = document.getElementsByTagName('button')[0]
const tweet = document.getElementsByTagName('button')[1]
let data;


async function getQuote() {
    let response = await fetch('https://api.quotable.io/random');
    data = await response.json();

    typeWriter()
}

getQuote()

function typeWriter() {
    var i = 0;
    var typeWriter = setInterval(() => {

        quote.innerHTML += data.content[i];
        i++;

        if (i > data.content.length - 1) {
            author.textContent = data.author
            clearInterval(typeWriter);
        }

    }, 50);
}

newQ.addEventListener('click', () => {
    // Clear existing content
    quote.innerHTML = '';
    author.innerHTML = '';
    getQuote()
    changeBg()
})


function tweetQ() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(data.content + '...\n by: ' + data.author), 'tweet a quote', 'width=600px, height=300px, left=200px, top=300px');

}

tweet.addEventListener('click', tweetQ)


function changeBg() {
    var bgList = [
      "./images/pexels-esranur-kalay-7907548 (1).jpg",
      "./images/pexels-ena-marinkovic-3622632.jpg",
      "./images/pexels-feyza-daştan-9843522.jpg",
      "./images/pexels-freestocksorg-942007.jpg",
      "./images/pexels-roman-odintsov-4925716.jpg",
      "./images/pexels-matej-698324.jpg",
      "./images/pexels-ylanite-koppens-1906440.jpg",
      "./images/pexels-thought-catalog-2228578.jpg",
      "./images/pexels-roman-odintsov-4925682.jpg",
      "./images/pexels-roman-odintsov-4925716.jpg",
      "./images/pexels-leeloo-thefirst-5408818.jpg",
      "./images/pexels-tima-miroshnichenko-6614747.jpg"
    ];

    var randomIndex = Math.floor(Math.random()*bgList.length)

    document.querySelector('body').style.backgroundImage = 'url("' + bgList[randomIndex] + '")'
}