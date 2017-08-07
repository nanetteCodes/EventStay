// =====================//
// ======EVENT STAY=====//
// =====================//


// *Global artist var
// ===================

var artist;
var clientId = "&client_id=ODM4NTkyM3wxNTAxNzgxMjczLjM5";
$("#eventResults").hide();

// *Calling ajax for events
// ==========================
function findEvent(events){

	// var for query url
	var queryURL2 = "https://api.seatgeek.com/2/events?performers.slug=" + artist + clientId;


	$.ajax({
      url: queryURL2,
      method: "GET"
    }).done(function(response2) {

      // Printing the entire object to console
      console.log(response2);

// *Construct HTML 
// ====================


	$(".result").remove();


	for(var i = 0; i<response2.events.length; i++){
		var object = response2.events[i];

	// set variables for info i need
	var lat = object.venue.location.lat;
	var lon = object.venue.location.lon;
	var eventName = object.title;
	var tickets = $("<a>").attr("href",object.url).text("Buy Tickets");
		tickets.attr("target", "_blank");
	var eventDate = object.datetime_utc;
	var eventCity = object.venue.display_location;



	// Generating new div
		var newList = $("<li>");
		var newEvent = $("<div>");
		$(newEvent).addClass("collapsible-header result");
		$(newEvent).attr("id", "new-event");
		$(newEvent).attr("lat", lat);
		$(newEvent).attr("lon", lon);

	// making first col for event name and location
		var col1= $("<span>");
		$(col1).addClass("col s10");
	
	// append to col1
	col1.append(eventName + "<br/>" + eventCity + "<br/>" + eventDate);
		

	// making second col for ticket url
		var col2 = $("<span>");
		$(col2).addClass("col s2"); 

	// append to col2
	col2.append(tickets);


	// append columns
   	newEvent.append(col1, col2);
   	newList.append(newEvent);
   	

   	$("#eventResults").append(newList);

};     
});
};


// *Calling ajax for artist
// ==========================
function findArtist(artist){
	var queryURL1 = "https://api.seatgeek.com/2/performers?slug=" + artist + clientId;

	$.ajax({
      url: queryURL1,
      method: "GET"
    }).done(function(response) {

      // Printing the entire object to console
      // console.log(response);

      // image, name, upcoming events

      var artistName = response.performers[0].short_name;
     	// console.log(artistName);

      var bandImage = response.performers[0].image;
      	// console.log(bandImage);

// *Construct HTML
// ================
	// Clear text and append artist name
	$("#band-name").empty();
	$("#band-name").append(artistName);

	// Clear img and attr new img
	$("#band-image").empty();
	$("#band-image").attr("src", bandImage);


});
};

  




// *Capture user input in search box..
// =====================================

  	// Event handler for user clicking the select-artist button
$("#search").submit(function(event){
	$("#eventResults").show();
   	// Preventing the button from trying to submit the form
    event.preventDefault();

    // Storing the artist name
   artist = $("#searchText").val().toLowerCase().trim().split(" ").join("-");
    	// console.log(artist);
    
    // Running the findEvent function (passing in the artist as an argument)
    findEvent(event);
    findArtist(artist);


});

