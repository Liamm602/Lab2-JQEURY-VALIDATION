
    //function which gets a username value from the user form then appends the value to navbar 
function DisplayUserName()
{
    //online source ChatGPT gave me the reccomdation of using the function "preventDefualt" so the page wont refresh (https://chat.openai.com/chat)
    event.preventDefault();
  
    let username = document.forms["userForm"]["username"].value;

    
    

   
    $("#usernameNav").append(`<a id="MainParagraph" class="nav-link">${ username }</a>`)
}




var navbarProject = document.getElementById("projectsNav");

newtitle = "Projects";
//change the a tag value to "projects"
navbarProject.textContent = newtitle;

navbarProject.setAttribute("class", "nav-link");


var HRnav = document.getElementById("HR");

var link= document.createElement("a");

link.setAttribute("class", "nav-link");
link.textContent = "Human Resources";

HRnav.appendChild(link);