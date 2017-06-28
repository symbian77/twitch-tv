$(document).ready(function() {
	
	var inp = $("input").val();
	var streamers = ["esl_sc2", "ogamingsc2", "cretetion", "freecodecamp", "storbeck", "habathcx", "robotcaleb", "noobs2ninjas"];
	
	for (var i = 0; i < streamers.length; i++) {
		$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + streamers[i] + "?callback=?", function(data) {
			console.log(data);
				var str_num = streamers[i];
				var j = data.stream;
				var off_logo = 'https://www.sap.com/dam/application/shared/icons/dev-mobile-offline.svg';
					if ( j === null ) {
					$("#one").append('<div id="stream"><div id="avatar"><img src="' + off_logo + '"></div><div id="name_link ">' + str_num + '</div><div id="icon"></div></div>');
					} else {
						var avat = data.stream.channel.logo;
						var name_l = data.stream.channel.display_name;
						var chan = data.stream.channel.url;
						$("#one").append('<div id="stream"><div id="avatar"><img src="' + avat + '"></div><div id="name_link "><h3>' + name_l + '</h3><br><p><a href="' + chan + '" target="_blank">' + chan + '</a></p></div></div>');
					}
		})
	}
	
// ----- showing pointer triangle on mouseover ------
	$("#list")
    .hover(function(){ 
        $("#arrow-list") 
            .show(); 
    }, function(){ 
        $("#arrow-list") 
            .hide(); 
    });
	$("#online")
    .hover(function(){ 
        $("#arrow-online") 
            .show(); 
    }, function(){ 
        $("#arrow-online") 
            .hide(); 
    });
	$("#offline") 
    .hover(function(){ 
        $("#arrow-offline") 
            .show();
    }, function(){ 
        $("#arrow-offline") 
            .hide(); 
    });
// ----- showing pointer triangle on mouseover ------
});