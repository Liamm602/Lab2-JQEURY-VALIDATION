/* intro for the home page */
document.getElementById("indexs").innerHTML = "Welcome to our website we provide many services, you can look at our most valued projets in our projects page or even learn our skills from our skills pages, any other additional information will be placed in the about us page";


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