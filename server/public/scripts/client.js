  var arrayOfPeople = [];

$(document).ready(function(){
  console.log("");



  // make AJAX reqest

  $.ajax({
    url: '/data',
    method: 'GET',
    success: function(data) {
      // when the response returns
      console.log('data from server: ', data.phirephiters);
      var phirephitersArray = data.phirephiters;
      buildPhirephitersArray(phirephitersArray);
      console.log(arrayOfPeople);
      loopingThroughPeople(arrayOfPeople);
    }
  });
});

function buildPhirephitersArray(array) {
  for (var i = 0; i < array.length; i++) {
  arrayOfPeople.push(array[i]);
  }
}




  //     $el = arrayOfPersonDivs[0];
  //     $el.show();
  //   } // end of success
  // });


//   $("phirephiters[i]").hide();
//   nextDiv.show();
// });
//
  function appendPersonToDOM(person) {
    $('#dataContainer').append('<div class="person"</div>');
    var $el = $('#dataContainer');
    //  $el.append('<img src ="' + person.image + '" height = "200px" width = "200px"/>');
    $el.append('<h1>' + person.name + '</h1>');
    $el.append('<h2>' +  person.git_username + '</h2>');
    $el.append('<h3>' + person.shoutout + '</h3>');
    // arrayOfPersonDi.push($el);
    // $el.hide();
  }
 function loopingThroughPeople(array) {
   for (var i = 0; i < array.length; i++) {
     appendPersonToDOM(array[i]);
   }
 }


//
//
//   }
// });
