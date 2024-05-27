const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play= false;
let sWords = ["ronaldo", "bale", "benzema", "modric" ,"kroos", 
"casemiro", "marcelo", "ramos", "varane", "carvahal", "navas","bellingham",
"courtois","vinicius","rodrigo", "valvarde","camavinga","alaba",
"militao","nacho","isco","james","brahim"];
let newWords = "";
let ranWords ="";

const createNewWords = () => {
        let ranNum = Math.floor(Math.random() * sWords.length);
        let newtempWord =sWords[ranNum];
        return newtempWord;
}

const scrambleWords =(arr)=>{
        for( let i = arr.length -1; i>0; i--){
            let temp =arr[i];
            let j = Math.floor(Math.random()*(i+1));
            arr[i] =arr[j];
            arr[j] =temp;
        }
        return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play =true;
        btn.innerHTML= "Guess";
        guess.classList.toggle("hidden");
        newWords =createNewWords();
        ranWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML =`Guess this player name:${ranWords}`;
    }
    else{
        let tempWords = guess.value;
        if(tempWords === newWords){
            play =false;
            msg.innerHTML= `Awesome Is's correct , The player is ${newWords}.`;
            btn.innerHTML ="Next";
            guess.classList.toggle("hidden");
            guess.value ="";
        }else{
            msg.innerHTML = `Sorry its incorrect , please try again (${ranWords})`;
            btn.innerHTML = "Try Again";
            guess.classList.toggle("hidden");
            guess.value ="";
        }
    }
});