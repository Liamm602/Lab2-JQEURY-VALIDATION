
/* function to return the tabel and user information */

function validateForm() {
    let name = document.forms["myForm"]["username"].value;
    let email = document.forms["myForm"]["emailAddress"].value;
    let num = document.forms["myForm"]["phoneNumber"].value;
    let message = document.forms["myForm"]["message"].value;

    
    
        console.log(`Username: ${ name } \n Password: ${ email } \n PhoneNumebr: ${ num } \n Optional Message: ${ message }`);
    
        return false;
    
}


    
// get id for a tag in list 
var navbarProject = document.getElementById("projectsNav");

//make a variable with the value projects

newtitle = "Projects";
//change the a tag value to "projects"
navbarProject.textContent = newtitle;
navbarProject.setAttribute("class", "nav-link");

//get the id HR from the list and then create a a tag, after that set the attribute of the a tag to lav link. Then
//add the text "Human Resources to the a tag then add the a tag to the li"
var HRnav = document.getElementById("HR");

var link= document.createElement("a");

link.setAttribute("class", "nav-link");
link.textContent = "Human Resources";

HRnav.appendChild(link);