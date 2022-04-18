
 const grid = document.querySelector('#grid')
 const next_level = document.querySelector('#next-level1')
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
            name:'earth',image:'images/level2/earth.jfif'
        },
        {
            name:'game',image:'images/level2/game.jfif'
        },
        {
            name:'glass',image:'images/level2/glass.jfif'
        },
        {
            name:'juice',image:'images/level2/juice.jfif'
        },
        {
            name:'kapompelo',image:'images/level2/kapompelo.jfif'
        },
        {
            name:'shelf',image:'images/level2/shelf.jfif'
        },
        {
            name:'earth',image:'images/level2/earth.jfif'
        },
        {
            name:'game',image:'images/level2/game.jfif'
        },
        {
            name:'glass',image:'images/level2/glass.jfif'
        },
        {
            name:'juice',image:'images/level2/juice.jfif'
        },
        {
            name:'kapompelo',image:'images/level2/kapompelo.jfif'
        },
        {
            name:'shelf',image:'images/level2/shelf.jfif'
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
        setTimeout(matchChecker,800)
       
        
    }
   
   
}
let view = document.querySelectorAll("img")



 function matchChecker(){

    let idone = cardClickedid[0];
    let idtwo = cardClickedid[1];
    

if(idone === idtwo){
    //deleted
    /*alert("you have clicked the same image 😀 😃, try to find its match")*/

    //new added s
    legend.textContent ="you have clicked the same image 😀 😃, try to find it match"
    //new added
    view[idone].setAttribute('src','images/blank.jfif')
}
else if(cardClicked[0] === cardClicked[1]){
    // deleted
       /*alert('well played 🥲 ☺️ 😊, try to find more matches and win the game')*/
    
    //new added s
    legend.textContent ='well played 🥲 ☺️ 😊, try to find more matches and win the game'
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
        next.setAttribute("style","margin-bottom:-55px;")
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


        //new added s
        level.textContent="";
        legend.textContent ="";
        paragraph.textContent ="";
        //new added 

        function reloadpage(){
            location.reload()
        }
    }
    
    
}

else{
      //deleted
   /* alert("sorry those images don't match 🥺 😢, try to find their matches")*/

    //new added s
    legend.textContent ="sorry those images don't match 🥺 😢, try to find their matches"
    //new added
    view[idone].setAttribute('src','images/blank.jfif')
    view[idtwo].setAttribute('src','images/blank.jfif')
}


cardClicked = [];
cardClickedid = [];

 }
 }

 level1()



