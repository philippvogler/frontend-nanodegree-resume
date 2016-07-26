/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Biography Object

var bio =
{
  "name" : "Philipp Vogler",
  "role" : "Machine Learning Enineer",
  "contacts" :
    {
      "mobile" : "0049 151 15779608",
      "email": "p.i.vogler@gmail.com",
      "github" : "https://github.com/philippvogler",
      "twitter" : "https://twitter.com/phil_ceptron",
      "location" : "Hamburg, Germany"
    },
  "welcomeMessage" : "Welcome!",
  "skills" : ["Python", "HTML/CSS/JS", "Visual Basic", "German", "English"],
  "biopic" : "images/fry.jpg"
};
// display: function taking no parameters


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// Flow Control - Quiz: If statements - HTMLskillsStart

if (bio.skills.length > 0){

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkills);
}

//Education Object

var education =
{
  "schools" :
    [
      {
        "name" : "University of Bremen",
        "location" : "Bremen",
        "degree" : "BSc",
        "majors" : ["Industrial Engineering", "Business Studies"],
        "dates" : "2004-2007",
        "url" : "http://dbs.uni-bremen.de/sixcms/detail.php?id=18701&template=fach_neu&lang=en"
      },
      {
        "name" : "International School of Management Frankfurt",
        "location" : "Frankfurt a.M.",
        "degree" : "MSc",
        "majors" : ["International Transport and Logistics"],
        "dates" : "2007-2009",
        "url" : "http://en.ism.de/full-degree-students/programs-in-english/master-logistics"
      }
    ],

  "onlineCourses":
    [
      {
         "title" : "HBX -  CORe: Credential of Readiness",
         "school" : "Harvard Business School",
         "dates" : "2014",
         "url" : "http://hbx.hbs.edu/hbx-core"
      },
      {
         "title" : "Machine Learning Engineer Nano Degree",
         "school" : "Udacity",
         "dates" : "2015-2016",
         "url" : "https://www.udacity.com/course/machine-learning-engineer-nanodegree-by-google--nd009"
      }
    ]
};
// display: function taking no parameters

// Work Object

var work =
{
  "jobs" :
    [
      {
       "employer" : "DHL Freight GmbH",
       "title" : "Program Manager",
       "location" : "Munich, Germany",
       "dates" : "2014-2015",
       "description" :  "- Coordinated and controlled six projects in the area south-east Germany using MSProject/Visio<br>" +
                        "- Monitored and facilitated process improvement activities with First Choice methodology<br>" +
                        "- Responsible for performance-controlling and reporting of seven branches (~400M€ ins ales)"
      },
      {
       "employer" : "Oliver Wyman Consulting GmbH",
       "title" : "Research Analyst",
       "location" : "Munich, Germany",
       "dates" : "2012-2013",
       "description" : "- Researched corporate,financial and market information in online databases and the internet for about 100 cases concerning transportation, energy and sustainability<br>" +
                      "- Presented results in Excel and PowerPoint and prepared pressclippings for about 40 cases"
      }
    ]
};
// display: function taking no parameters

// Flow Controll - Quiz: for in loop

for (job in work.jobs)
{
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace ("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace ("%data%", work.jobs[job].title);

  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace ("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedLocation = HTMLworkLocation.replace ("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDescription = HTMLworkDescription.replace ("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}

// Project Object

var projects =
{
  "projects":
    [
      {
        "title" : "Creating Customer Segments",
        "dates" : "2016",
        "description" :  "- Reviewed unstructured data to understand the patterns and natural categories that the data fits into using matplotlib - Used multiple algorithms and both empirically and theoretically compared and contrasted their results utilizing scikit-learn - Made predictions about the natural categories of multiple types in a dataset, then checked these predictions against the result of unsupervised analysis documented in a Jupiter notebook",
        "images" : "array with string urls"
      },
      {
        "title" : "Bike Sharing Demand Prediction",
        "dates" : "2016",
        "description" :  "- Utilizing machine learning to forecast the demand for the Washington DC bike sharing system 'capital bike share'. - Using different types of regression to find an algorithm to predict the demand for bikes based on calendric and weather information. - This project tries to create a forecasting function based on two years of historical data by utilizing the machine learning libraries scikit-learn and tensor-flow.",
        "images" : "array with string urls"
      }
    ]
};
// display: function taking no parameters
