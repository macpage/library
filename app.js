
       const val = document.createElement("p");
       val.innerHTML = "* Fill Empty!"
       val.style.fontSize = "16px";
       val.style.color = "red";

const addBook = document.querySelector(".add");
addBook.addEventListener("click", ()=>{

addBook.classList.add("no-click");
document.querySelector(".modal").style.display = "flex";
document.querySelector("#popup").classList.add("modal-bg");
document.querySelector(".books").classList.add("modal-books");


document.querySelector("#title").value = "";
document.querySelector("#title").style.border = "none"
document.querySelector("#author").value = "";
document.querySelector("#author").style.border = "none"
document.querySelector("#pages").value = "";
document.querySelector("#pages").style.border = "none"
document.querySelector("#check").checked = false;
if(document.querySelector(".modal-main").childElementCount > 3){
  document.querySelector(".modal-main").removeChild(val); 
   }

}) 

const submit = document.querySelector("#submit");

submit.addEventListener("click", ()=>{

    if(document.querySelector("#title").value == "" || document.querySelector("#author").value == "" || document.querySelector("#pages").value == ""){

       if(document.querySelector("#title").value == ""){
        document.querySelector("#title").style.border = "2px solid red";
       } else{
        document.querySelector("#title").style.border = "none";
       }
       if(document.querySelector("#author").value == ""){
        document.querySelector("#author").style.border = "2px solid red";
       } else{
        document.querySelector("#author").style.border = "none";
       }
       if(document.querySelector("#pages").value == ""){
        document.querySelector("#pages").style.border = "2px solid red";
       } else{
        document.querySelector("#pages").style.border = "none";
       }
       
       if(document.querySelector(".modal-main").childElementCount < 4){
        document.querySelector(".modal-main").appendChild(val);
       }
       
        }
        
        else{
                  const booksGrid = document.querySelector(".books");
const book = document.createElement("div");
const author = document.createElement("p");
const bookName = document.createElement("p");
const pages = document.createElement("p");
const read = document.createElement("button");

const remove = document.createElement("button")

read.style.fontWeight = "500";
remove.style.fontWeight = "500";
bookName.style.fontWeight = "500";
author.style.fontWeight = "500";
pages.style.fontWeight = "500";

const t = document.querySelector("#title").value;
const a = document.querySelector("#author").value;
const p = document.querySelector("#pages").value;
let r = document.querySelector("#check").checked;

 function abook (a,n,p){
   author.innerHTML = a; 
   bookName.innerHTML = `" `+n+` "`;
   pages.innerHTML = p + " pages";

   if(r){
    read.innerHTML = "Read";   
    read.style.backgroundColor = "rgb(159, 255, 156)";
   }else{
        read.innerHTML = "Not read";   
    read.style.backgroundColor = "rgb(255, 156, 156)";
   }

   
}


abook(a,t,p);



remove.innerHTML = "Remove";

book.appendChild(author);
book.appendChild(bookName);
book.appendChild(pages);
book.appendChild(read);
book.appendChild(remove);



booksGrid.appendChild(book);
book.classList.add("book");



read.addEventListener("click", () => {
    if(!r){
        read.innerHTML = "Read";   
        read.style.backgroundColor = "rgb(159, 255, 156)";
      r = true;
    } else{
        read.innerHTML = "Not read";   
        read.style.backgroundColor = "rgb(255, 156, 156)";
        r = false;
    }
    
   
})

remove.addEventListener("click", ()=>{
    booksGrid.removeChild(book);
})


document.querySelector(".modal").style.display = "none";
document.querySelector("#popup").classList.remove("modal-bg");
document.querySelector(".books").classList.remove("modal-books");
addBook.classList.remove("no-click");
    

    
        } 




})    








let mg = document.querySelector(".modal-bg");


window.onclick = function(event) {
    if (event.target == document.querySelector(".modal-bg")) {
        document.querySelector(".modal").classList.add("gone");
        function meineFunktion() {
           document.querySelector(".modal").style.display = "none";
           document.querySelector("#popup").classList.remove("modal-bg");
document.querySelector(".books").classList.remove("modal-books");
addBook.classList.remove("no-click");
document.querySelector(".modal").classList.remove("gone");
          }
          
          setTimeout(meineFunktion, 500);
       
        

    }
  }