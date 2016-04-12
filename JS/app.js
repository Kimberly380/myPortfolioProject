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

Project.prototype.toHtml = function() {
    var $newProject = $('article.template').clone();

  // $newProject.attr('data-category', this.category);

    $newProject.find('#projectDate').text(this.projectDate);
    $newProject.find('#companyName').text(this.companyName);
    $newProject.find('address').text(this.companyAddress);
    $newProject.find('#companyLogo').attr('src', this.companyLogo);
    $newProject.find('#projectDescription').text(this.projectDescription);
  // $newProject.find('#relatedLinks').text(this.relatedLinks);





  // Include the publication date as a 'title' attribute to show on hover:
  //$newProject.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  // $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

    $newProject.append('<hr>');

    $newProject.removeClass('template');

    return $newProject;
}


// rawData.sort(function(a,b) {
//   return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
// });

projectData.forEach(function(ele) {
    projects.push(new Project(ele));
})

projects.forEach(function(a){
    $('#projects').append(a.toHtml())
});
