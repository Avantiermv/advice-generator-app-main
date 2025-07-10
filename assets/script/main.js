async function takeTheAdvice2(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.slip.advice);
        console.log(data.slip.id);
    }catch(e){
        console.error("Error: ", e);
    }
}

takeTheAdvice2('https://api.adviceslip.com/advice');