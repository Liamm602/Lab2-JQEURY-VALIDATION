document.getElementById("Desc1a").innerHTML = "The developers of this website are top classs programmers who attend Durham college enrolled in the Computer Programming Course and ready to make millions of dollars";
//add another resume here
document.getElementById("aboutresume1").innerHTML = "Liam's Resume -- password=123: <a href=\"https://www.protectedtext.com/-Lresume\">Resume</a> ";



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