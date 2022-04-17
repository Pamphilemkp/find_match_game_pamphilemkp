
 const grid = document.querySelector('#grid')
 const next_level = document.querySelector('#next-level')
 const score = document.querySelector('#result')
 const win = document.querySelector('#win')
 const retry = document.querySelector('#retry')
 let cardClicked =[];
 let cardClickedid = [];
 const matchResult =[];
 

function level4(){
    const cards = [
        {
            name:'desk',image:'images/level4/desk.jfif'
        },
        {
            name:'divinebook',image:'images/level4/divinebook.jfif'
        },
        {
            name:'library',image:'images/level4/library.jfif'
        },
        {
            name:'picture',image:'images/level4/picture.jfif'
        },
        {
            name:'powerbook',image:'images/level4/powerbook.jfif'
        },
        {
            name:'view1',image:'images/level4/view1.jfif'
        },
        {
            name:'desk',image:'images/level4/desk.jfif'
        },
        {
            name:'divinebook',image:'images/level4/divinebook.jfif'
        },
        {
            name:'library',image:'images/level4/library.jfif'
        },
        {
            name:'picture',image:'images/level4/picture.jfif'
        },
        {
            name:'powerbook',image:'images/level4/powerbook.jfif'
        },
        {
            name:'view1',image:'images/level4/view1.jfif'
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
    alert("you have clicked the same image 😀 😃, try to find it match")
    view[idone].setAttribute('src','images/blank.jfif')
}
else if(cardClicked[0] === cardClicked[1]){
    alert('well played 🥲 ☺️ 😊, try to find more matches and win the game')
    view[idone].setAttribute('src','images/white.png')
    view[idone].removeEventListener("click",flip)
    view[idtwo].setAttribute('src','images/white.png')
    view[idtwo].removeEventListener("click",flip)
    matchResult.push(cardClicked[1])

    score.textContent = matchResult.length;

    if(matchResult.length === (cards.length)/2){
        win.innerHTML = ` Congratulations 🤩👏🥳🙌 <br/> <br/> 
        <img src='images/congratulation.jfif' alt="you win" >
        <br/> <br/> 
       <p> this is the end of the game if you have any suggestions on how icould <br/>  improve and perform this game,
         please let me know,<br/>  i would love to hear your  suggestions and they are very welcome!
         <br/> <br/> <span style="font-family: monospace;"> Pamphile mkp</span>
         </p>`
        const refresher = document.createElement("button")
        const text1 = document.createTextNode("Replay")
        refresher.setAttribute("id","button")
        refresher.setAttribute("style","margin-top:-50px;")
        refresher.addEventListener("click",reloadpage)
        refresher.appendChild(text1);
        retry.appendChild(refresher);
        function reloadpage(){
            location.reload()
        }
         
    }
    
    
}

else{
    alert("sorry those images don't match 🥺 😢, try to find their matches")
    view[idone].setAttribute('src','images/blank.jfif')
    view[idtwo].setAttribute('src','images/blank.jfif')
}


cardClicked = [];
cardClickedid = [];

 }
 }

 level4()



