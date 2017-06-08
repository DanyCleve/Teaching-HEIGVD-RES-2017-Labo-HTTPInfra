$(function(){


        function loadLocations(){
                $.getJSON("/api/locations/", function(locations){
                        console.log(locations);
                        var message = "No Locations to Show";
                        if(locations.length > 0){
                                message = "Province : " + locations[0].province + "\n" + "Country : " + locations[0].country;
                        }
                        $(".section-heading").text(message);
                });
        };

        loadLocations();
        setInterval(loadLocations, 3000);

});