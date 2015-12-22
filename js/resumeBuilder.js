/*
This is empty on purpose! Your code to build the resume will go here.

 var awesomeThoughts = "I am Sergey and I am AWESOME!";

 var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
 $("#main").append(funThoughts);

 var email = "schistyakov@gmail.com";
 var newEmail = email.replace("gmail", "terra-bloom")

 console.log (email);
 console.log (newEmail);
 var Name = "Sergey Chistyakov";
 var Role = "web-developer";
 var formattedName = HTMLheaderName.replace("%data%", Name);
 var formattedRole = HTMLheaderRole.replace("%data%", Role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/

var bio = {
	"name": "Sergey Chistyakov",
	"role": "Front-end web-developer",
	"welcomeMessage": "Welcome to my resume page",
	"contacts": {
		"mobile": "415-595-8012", 
		"email": "sergsseller@gmail.com",
		"github": "sergsseller",
		"twitter": "sergsseller",
		"location": "Oakland, CA"
	},
	"welcomeMessage": "Welcome to my resume page, I made it while taking a frond-end web develompent course with Udacity",
	"skills": ["Data Analysis", "Financial Instruments", "SQL", "HTML/CSS"],
	"bioPic": "images/me.jpg"
}

function displayBio() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedPic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",
			bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",
			bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",
			bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}
displayBio();

var education = {
	"schools": [
		{
			"name": "CUNY Baruch College",
			"location": "New York, NY",
			"degree": "Bachelor Business Administration",
			"majors": "Finance",
			"dates": 2011,
			"URL": "www.baruch.cuny.edu"

		},
		{	"name": "Southern Ural State University",
			"location": "Chelyabinsk, Russia",
			"degree": "Transfered after junior year",
			"majors": "English",
			"dates": 2004,
			"URL": "www.susu.ac.ru"
		} 
	],
	"onlineClasses": [
		{
			"title": "Front-End Web-Developer Nanodgree",
			"school": "Udacity",
			"dates": "In Progress",
			"URL": "https://www.udacity.com/course/front-end-web-developer-nanodegree"
		}
	]
}


education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].locations);
		$(".education-entry:last").append(formattedLocation);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	    for (onlineClass in education.onlineClasses) {
		    $("#education").append(HTMLschoolStart);
			
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
			var formattedTitleSchool = formattedTitle + formattedSchool;
			$(".education-entry:last").append(formattedTitleSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
			$(".education-entry:last").append(formattedDates);

			var formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].URL);
			$(".education-entry:last").append(formattedURL);
	}
};
education.display();


var work = {
	"jobs": [
		{
			"employer": "Self-employed",
			"title": "E-commerce Ninja",
			"location": "San Francisco, CA",
			"dates": "4/2015 - now",
			"description": "Import and sales of air ventilation equipment using Amazon FBA service"
		},
		{
			"employer": "Bank of America",
			"title": "Financial Reporting Analyst",
			"location": "San Francisco, CA",
			"dates": "4/2014 - 4/2015",
			"description": "Analyzed earning reports using SQL and advised management on MoM and QoQ changes in key financial metrics, as well as underlying model paramenters contributing to these changes"
		},
			{
			"employer": "Bank of America",
			"title": "Financial Auditor, AVP",
			"location": "New York, NY",
			"dates": "5/2012 - 4/2014",
			"description": "Analyzed the bank's infrastructure for compiance with regulatory requirements and remediated gaps in coverage"
		},
		{
			"employer": "Ipreo",
			"title": "Financial Analyst",
			"location": "New York, NY",
			"dates": "12/2011 - 5/2012",
			"description": "Consulted investment relations proffesionals of publicly traded companies on the performance of their equity and ownership changes among insitutional investors"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace
	("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace
	("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedEmployerDates = HTMLworkDates.replace
	("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedEmployerDates);

	var formattedEmployerLocation = HTMLworkLocation.replace
	("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedEmployerLocation);

	var formattedEmployerDescription = HTMLworkDescription.replace
	("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerDescription);
	}
}
displayWork();


var projects = {
	"projects": [
		{
			"title": "Portfolio Page",
			"dates": "9/2015 - 10/2015",
			"description": "Created a front page for a portfolio site using Bootstrap CSS frameowrk",
			"images": []
		},
		{
			"title": "Resume Page",
			"dates": "10/2015 - 10/2015",
			"description": "Created Resume Page using JavaScript",
			"images": []
		}
	]
}


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);


		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);


		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();


$("#mapDiv").append(googleMap);


$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y); 
});




