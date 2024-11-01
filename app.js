const submit=document.querySelector(`.SubmitBtn`);
const input=document.querySelector(`.input`);
const conteinar=document.querySelector(`.conteinar`);
const listConteinar=document.querySelector(`#listConteinar`);
const from=document.querySelector(`.form`)


function addTask(){
    if(input.value===``){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listConteinar.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    input.value="";
    saveData();

}

listConteinar.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    
    }

},false);

function saveData(){
    localStorage.setItem("data",listConteinar.innerHTML);
}
function showTask(){
    listConteinar.innerHTML=localStorage.getItem("data");
}
showTask();
