
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
    //deleted
    /*alert("you have clicked on the same image 😀 😃, try to find another one that  matches it")*/

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
        //win text modified
        win.innerHTML = ` Congratulations 🤩👏🥳🙌 <br/> <br/> 
        <img src='images/congratulation.jfif' alt="you win" >
        <br/>  <br/> 
       <p> this is the end of the game if you have any suggestions on how i could  improve and perform this game,
         please let me know,i would love to hear your  suggestions and they are very welcome!
         <br/> <br/> <span style="font-family: monospace;"> Pamphile mkp <br/>     
         To contact me 📞📳 click on this whatsapp icon 👉 <a href="https://wa.me/+905338829657"> <img src="images/whatsapp.png" width="30px" height="30px"></a></span>
         </p>
         <p style="font-family: FreeMono,monospace;">&copy;copyright 2022 by Pamphile mkp</p>`
        const refresher = document.createElement("button")
        const text1 = document.createTextNode("🔁Replay")
        refresher.setAttribute("id","button")
        refresher.setAttribute("style","margin-top:-50px;")
        refresher.addEventListener("click",reloadpage)
        refresher.appendChild(text1);
        retry.appendChild(refresher);

       
        //new added s
        const phoneback = document.createElement("button")
        const textphone = document.createTextNode("⏪back")
        phoneback.setAttribute("id","phoneback")
        phoneback.setAttribute("style","margin-top:-95px;")
        phoneback.appendChild(textphone);
        phone.appendChild(phoneback);
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

 level4()



