var projects = [];

function Project (myProjects) {
  this.projectDate        = myProjects.projectDate;
  this.companyName        = myProjects.companyName;
  this.companyAddress     = myProjects.companyAddress;
  this.companyLogo        = myProjects.companyLogo;
  this.projectDescription = myProjects.projectDescription;
  this.myRole             = myProjects.myRole;
    // this.relatedLinks       = myProjects.relatedLinks;
}

//simplified version of above:  (will use one I understand it...)
// function Project (opts) {
//   for (key in opts) this[key] = opts[key];
// };



Project.prototype.toHtml = function() {
  var source = $('#projectInfo').html();
  var template=Handlebars.compile(source);
  return template(this);

//THESE ARE FOR TOMORROW:
  // Include the publication date as a 'title' attribute to show on hover:
  //$newProject.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  // $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
};

//ALSO FOR LATER
// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
