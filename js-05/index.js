const list =[];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const fillList = () =>{
    const randomNumber = Math.floor(Math.random()*10);
    const listWord = ["mones","ali", "hossin", "keshavarz","maasomi"]
    const randomWord =  listWord[Math.floor(Math.random()*listWord.length)];
    const randomDate = Date.now()+ getRandomInt(1000, 4000);

    newlist = {
        randomNumber,
        randomDate,
        randomWord,
    }

    list.push(newlist);
}
fillList();
console.log(list);
