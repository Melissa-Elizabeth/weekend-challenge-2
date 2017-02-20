  var arrayOfPeople = [];
  var clickNumber = 0;

$(document).ready(function(){
  console.log("");
  // make AJAX reqest
  $.ajax({
    url: '/data',
    method: 'GET',
    success: function(data) {
      // when the response returns
      // console.log('data from server: ', data.phirephiters);
      var phirephitersArray = data.phirephiters;
      buildPhirephitersArray(phirephitersArray);
      // console.log(arrayOfPeople);
      loopingThroughPeople(arrayOfPeople);

      $('#next').on('click', function() {
        clickNumber++;
        if(clickNumber > arrayOfPeople.length - 1) {
          clickNumber = 0;
        }
        // console.log(clickNumber);
        shiftingThroughPeople();
      });


        $('#previous').on('click', function() {
          clickNumber--;
          if(clickNumber < 0) {
            clickNumber = arrayOfPeople.length - 1;
          }
          // console.log(clickNumber);
          shiftingThroughPeople();
      });

  }


});

});


function buildPhirephitersArray(array) {
  for (var i = 0; i < array.length; i++) {
  arrayOfPeople.push(array[i]);
  }
}
function appendPersonToDOM(person) {
  $('#dataContainer').append('<div class="person"</div>');
  var $el = $('#dataContainer');
  $el.append('<img src ="' + person.image + '" height = "300px" width = "300px"/>');
  $el.append('<h1> Name: ' + person.name + '</h1>');
  $el.append('<h2> Github Username: ' +  person.git_username + '</h2>');
  $el.append('<h3> Shoutout: ' + person.shoutout + '</h3>');
}
function loopingThroughPeople(array) {
 appendPersonToDOM(array[clickNumber]);
 }
function shiftingThroughPeople() {
  $('#dataContainer').empty();
  loopingThroughPeople(arrayOfPeople);
}
