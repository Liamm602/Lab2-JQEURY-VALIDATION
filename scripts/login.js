(function () {
    //function which gets a username value from the user form then appends the value to navbar 
function DisplayUserName()
{
    //online source ChatGPT gave me the reccomdation of using the function "preventDefualt" so the page wont refresh (https://chat.openai.com/chat)
    event.preventDefault();
    var navbarUsername = document.getElementById("usernameNav");
    let username = document.forms["userForm"]["username"].value;

    
    

   
    $("#usernameNav").append(`<a id="MainParagraph" class="nav-link">${ username }</a>`)
  

   
  

  
    
   


}
})()








var HRnav = document.getElementById("HR");

var link= document.createElement("a");

link.setAttribute("class", "nav-link");
link.textContent = "Human Resources";

HRnav.appendChild(link);