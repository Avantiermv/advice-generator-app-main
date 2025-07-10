
async function takeTheAdvice(url, arg1, arg2){
    try{
        const response = await fetch(url);
        const data = await response.json();
        arg1.innerText = `Advice #${data.slip.id}`;
        arg2.innerText = `"${data.slip.advice}"`;
    }catch(e){
        console.error("Error: ", e);
    }
}

let adviceNumber = document.querySelector('.advice-number');
let adviceText = document.querySelector('.advice-text');

takeTheAdvice('https://api.adviceslip.com/advice', adviceNumber, adviceText);

const rollDice = document.querySelector('.dice');

rollDice.addEventListener('click', () => {
    takeTheAdvice('https://api.adviceslip.com/advice', adviceNumber, adviceText);
});

