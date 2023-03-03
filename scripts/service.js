document.getElementById("serviceparagraph").innerHTML = "Here is our services page where our we will display our upmost skills we have obtained through school, research and years of expirence.";


document.getElementById("webdesigntext").innerHTML = "Web Design - Our Orginization offers many different types of web design, different kinds of styles and formatting is our specialty.";

document.getElementById("mobiledevtext").innerHTML = "Mobile Development - A great skill we have is mobile development. We have made plenty of apps already and are going to continue making more!";

document.getElementById("zerosandonestext").innerHTML = "General Programming - Our team is great with programming with langauges such as PHP, C++, Java, c# Python, html and more.";


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