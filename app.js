
 const grid = document.querySelector('#grid')
 const next_level = document.querySelector('#next-level')
 const score = document.querySelector('#result')
 const win = document.querySelector('#win')
 const retry = document.querySelector('#retry')
  //new added s
  const phone = document.querySelector(".phone")
  const level = document.querySelector("#level")
  const paragraph = document.querySelector("#paragraph")
  const legend = document.querySelector("#status")
 
  //new added 
 let cardClicked =[];
 let cardClickedid = [];
 const matchResult =[];
 

function level1(){
    const cards = [
    {
        name:'cheeseburger',image:'images/cheeseburger.png'
    },
    {
        name:'fries',image:'images/fries.png'
    },
    {
        name:'hotdog',image:'images/hotdog.png'
    },
    {
        name:'ice-cream',image:'images/ice-cream.png'
    },
    {
        name:'milkshake',image:'images/milkshake.png'
    },
    {
        name:'pizza',image:'images/pizza.png'
    },
    {
        name:'cheeseburger',image:'images/cheeseburger.png'
    },
    {
        name:'fries',image:'images/fries.png'
    },
    {
        name:'hotdog',image:'images/hotdog.png'
    },
    {
        name:'ice-cream',image:'images/ice-cream.png'
    },
    {
        name:'milkshake',image:'images/milkshake.png'
    },
    {
        name:'pizza',image:'images/pizza.png'
    }
    
]

cards.sort(() => 0.5 - Math.random());
console.log(cards)


function display(){ 
 for(let i = 0; i < cards.length; i++){
   const images = document.createElement("img")
   images.setAttribute("src", 'images/blank.jfif')
   images.setAttribute("data-id",i)
   images.setAttribute("width","100px")
   images.setAttribute("height","100px")
   images.addEventListener('click',flip)
   grid.append(images);
   
}
}
display()


function flip(){
    const ids = this.getAttribute('data-id')
    cardClicked.push(cards[ids].name)
    cardClickedid.push(ids)
    this.setAttribute('src',cards[ids].image)

    if(cardClicked.length === 2){
        setTimeout(matchChecker,500)
       
        
    }
   
   
}
let view = document.querySelectorAll("img")



 function matchChecker(){

    let idone = cardClickedid[0];
    let idtwo = cardClickedid[1];
    

if(idone === idtwo){
        //deleted
    /*alert("You have clicked on the same image 😀 😃, try to find another one that  matches it")*/

    //new added s
    legend.textContent ="You have clicked on the same image 😀 😃, try to find another one that  matches it"
    //new added
    view[idone].setAttribute('src','images/blank.jfif')
}
else if(cardClicked[0] === cardClicked[1]){
     // deleted
       /*alert('Well played 😊😇😉, try to find more matches and win the game')*/
    
    //new added s
    legend.textContent ='Well played 😊😇😉, try to find more matches and win the game'
    //new added
    view[idone].setAttribute('src','images/white.png')
    view[idone].removeEventListener("click",flip)
    view[idtwo].setAttribute('src','images/white.png')
    view[idtwo].removeEventListener("click",flip)
    matchResult.push(cardClicked[1])

    score.textContent = matchResult.length;

    if(matchResult.length === (cards.length)/2){
        win.innerHTML = ` Congratulations 🤩👏🥳🙌 <br/> <br/> <br/> 
        <img src='images/congratulation.jfif' alt="you win" >`
        const next = document.createElement("button")
        const text = document.createTextNode("⏩next")
        next.setAttribute("id","button")
        next.appendChild(text);
        next_level.appendChild(next);

        //retry
        const refresher = document.createElement("button")
        const text1 = document.createTextNode("🔁Replay")
        refresher.setAttribute("id","button")
        refresher.setAttribute("style","margin-top:-55px;")
        refresher.setAttribute("style","margin-right:29px;")
        refresher.addEventListener("click",reloadpage)
        refresher.appendChild(text1);
        retry.appendChild(refresher);
        //added
        level.textContent="";
        legend.textContent ="";
        paragraph.textContent ="";

        function reloadpage(){
            location.reload()
        }
    }
    
    
}

else{
       //deleted
   /* alert("Sorry those images don't match 🥺 😢, try to find their matches")*/

    //new added s
    legend.textContent ="Sorry those images don't match 🥺 😢, try to find their matches"
    //new added
    view[idone].setAttribute('src','images/blank.jfif')
    view[idtwo].setAttribute('src','images/blank.jfif')
}


cardClicked = [];
cardClickedid = [];

 }
 }

 level1()



