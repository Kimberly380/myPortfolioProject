

//hide all but home on load

$('section').filter('section').not('.home').hide();

//show hide by nav bar
$(function() {
    var ids = '';
    var listItems = $('li');

    $(listItems).on('click',function(){
        ids = this.id;
        $("."+ids).show();  //tricking it into showing classes of sections.....??
        $('section').filter('section').not("."+ids).hide();
    });
});
