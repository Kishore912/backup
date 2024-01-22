//const ul = document.querySelector(".items");
//ul.remove();
//ul.firstElementChild.remove();
//ul.firstElementChild.textContent="hi";
//ul.lastElementChild.remove();
//ul.lastElementChild.innerHTML="<h1>hello</h1>";
//ul.children[1].textContent="bye"

/*const btn = document.querySelector(".btn");
btn.style.background="red";  */

const btn = document.querySelector(".btn");

btn.addEventListener("click",hi);

function hi(e){
    e.preventDefault();
    document.getElementById("my-form").style.backgroundColor="green";
    
    
}
