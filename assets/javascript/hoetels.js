function hoeTels(){
var hotelRooms = ["assets/images/room1.jpg","assets/images/room2.jpg","assets/images/room3.jpg","assets/images/room4.jpg","assets/images/room5.jpg"]

//HotWire.com API//
var long =37.792;
var lat = -122.397;
var queryURL = "https://hotwire.herokuapp.com/v1/deal/hotel?format=json&apikey=8bya58qw23u2q33c7cmwb34d&limit=20&dest=="+long+","+lat+"&distance=*~30&starrating=4~*&sort=price&sortorder=asc";

$.ajax({
		url:queryURL,
		method: "GET"
	})
	.done(function(response){
		for (var i = 0; i < 5; i++) {

		var object = JSON.parse(response);
			var price = object.Result[i].Price;
			var hotelURL = object.Result[i].Url;
			var starRating = object.Result[i].StarRating;
			var savingsPercentage = object.Result[i].SavingsPercentage;
			var city = object.Result[i].City;
			var state = object.Result[i].StateCode;
			var Neighborhood = object.Result[i].Neighborhood;
			var nights = object.Result[i].NightDuration;
		

		var hotelImg = $("<span>");
		$(hotelImg).addClass("col s4");
		$(hotelImg).attr("id","hotelImg");

		var hotelPic = $("<img>");
		hotelPic.attr("src", hotelRooms[i]);
		hotelPic.attr("id","hotelPic");
		hotelImg.append(hotelPic)


		var hotelArea = $("<span>");
		$(hotelArea).addClass("col s6");
		$(hotelArea).attr("id","hotelinfo")
		hotelArea.append("<b>"+Neighborhood+"</b><br/>");
		hotelArea.append(city + ", "+ state);
		hotelArea.append("<br/>Rating: " + starRating + " &#9734;&#9734;&#9734;&#9734;")
		hotelArea.append("<br/>"+ "<a href='" + hotelURL + "' " + "> Hotwire LINK</a>" );

		var priceInfo = $("<span>");
		$(priceInfo).addClass("col s2");
		$(priceInfo).attr("id","hotelPrices");
		priceInfo.append("<h2>$" + Math.trunc(price) + "</h2><br/>Per Night</h1><br/>A " + savingsPercentage + "% Discount");
	
		var row = $("<div>");
		$(row).addClass("row valign-wrapper");
		row.append(hotelImg,hotelArea,priceInfo)

		$("#Hoevents").append(row);


	}


	});
};


// var queryURL2 = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Stack%20Overflow";


// $.ajax({
// 		url:queryURL2,
// 		method: "GET"
// 	})
// 	.done(function(response){
// 			console.log(response)
// 	});





hoeTels();