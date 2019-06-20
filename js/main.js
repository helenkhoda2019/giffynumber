// allows the user to create a button and then puts the new button with the rest 
$("#submitPress").on("click", function () {
  event.preventDefault()
  var buttonInput = $("#user-input").val();
  var newButton = $("<button>").attr('data-animal', buttonInput).addClass('ghipy').text(buttonInput);
  $("#display-buttons").append(newButton);
});


$(".ghipy").on('click', function () {

  var animal = $(this).attr('data-animal')
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var results = response.data;
    console.log(results)
    for (var i = 0; i < results.length; i++) {
      var gifDiv = $("<div>");

      // var rating = results[i].rating;

      // var p = $("<p>").text("Rating: " + rating);

      var personImage = $("<img>");
      personImage.attr("src", results[i].images.fixed_height_still.url);
      personImage.attr(
        'data-still',results[i].images.fixed_height_still.url
      );
      personImage.attr('data-animate', results[i].images.fixed_height.url);
      personImage.attr('data-state', 'still');
      personImage.addClass("img")

      gifDiv.append(personImage);

      $('#display-images').append(gifDiv);
    }
  });
});

$(document).on('click', '.img', function () {
  var state = $(this).attr('data-state');
  if (state === 'still') {
    $(this).attr('src', $(this).attr('data-animate'));
    $(this).attr('data-state', 'animate');
  } else {
    $(this).attr('src', $(this).attr('data-still'));
    $(this).attr('data-state', 'still');

 }
 });



      // gifDiv.prepend();

//       $("#display-images").append(gifDiv);
//     }

//   })
// })
