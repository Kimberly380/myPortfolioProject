

//hide all but home on load

function onLoad (){
  $('section').filter('section').not('.home').hide();
}
onLoad();

//show hide by nav bar (TODO fix to use data-* tag instead of id/class tags)
$(function() {
  var ids = '';
  var listItems = $('li');

  $(listItems).on('click',function(){
    ids = this.id;
    $('.'+ids).show();  //tricking it into showing classes of sections.....??
    $('section').filter('section').not('.'+ids).hide();
  });
});


// TO make nav bars visible/invisible on hover (which is click on mobile) (don't like how this looks with current formatting.  omit for now)
// $('#hamburger').hover(function(){
//   $('nav ul').css('display','flex');
// }, function(){
//   $('nav ul').css('display','none');
// }
// );
