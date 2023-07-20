/*
document.querySelector(".w.drum").addEventListener("click",handleClick);
//if the call to handleClick method is like "handleClick()" , then the function immediately executes which we don't want  
function handleClick(){
        alert("I am clicked");
}
*/
//in most cases we actually do not give a name to the function and directly just put the function in the place of functon name
//this is done as shown

//*************Alternate way  ********************/
/*
document.querySelector(".w.drum").addEventListener("click",function {
    alert("I am clicked");
    //do whatever you want to do
    // the function is an anonymous function
});
*/
let numOfButtons = document.querySelectorAll(".drum").length;
for(let i =0; i<numOfButtons;i++)
{
 
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
       
});
}
document.addEventListener("keydown",function(event){
    // console.log(event);
    // console.log("key pressed");
    makeSound(event.key);
    animation(event.key);
})
function makeSound(key){
    switch(key)
    {   
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a" :
          new Audio("sounds/tom-2.mp3").play();
          break;
        case "a" :
         new Audio("sounds/tom-2.mp3").play();
         break;
        case "s" :
        new Audio("sounds/tom-3.mp3").play();
        break;
        case "d" :
        new Audio("sounds/tom-4.mp3").play();
        break;
        case "j" :
        new Audio("sounds/snare.mp3").play();
        break;  
        case "k" :
        new Audio("sounds/crash.mp3").play();
        break; 
        case "l" :
        new Audio("sounds/kick-bass.mp3").play();
        break;
        default:console.log(this);


    }

}
function animation(ckey){
    var activeButton = document.querySelector("."+ckey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")

    },100); 

}



