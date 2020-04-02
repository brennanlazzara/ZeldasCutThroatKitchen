$(document).ready(function () {
    var order = [];

    // GET REQUESTS
    $.get("/api/recipes", function (data) {
        console.log(data);
        // DRINKS LIST 
        for (let i = 0; i < data.drinks.length; i++) {
            $('#drink' + (i+1)).text(data.drinks[i].item + '    $' + data.drinks[i].maxSellingPrice);
        }
        
        //SOUPS LIST
        for (let i = 0; i < data.soups.length; i++) {
            $('#soup' + (i+1)).text(data.soups[i].item + '    $' + data.soups[i].maxSellingPrice)
        }



        // SKEWERS LIST 
        for (let i = 0; i < data.skewers.length; i++) {
            $('#skewer' + (i+1)).text(data.skewers[i].item + '    $' + data.skewers[i].maxSellingPrice)
        }



        // CURRIES LIST
        for (let i = 0; i < data.currys.length; i++) {
            $('#curry' + (i+1)).text(data.currys[i].item + '    $' + data.currys[i].maxSellingPrice)
        }

        //DESSERTS LIST
        for (let i = 0; i < data.desserts.length; i++) {
            $('#dessert' + (i+1)).text(data.desserts[i].item + '    $' + data.desserts[i].maxSellingPrice);
        }
    });

// USERS SELECTS







    //POST REQUESTS

//DRINKS LIST
    // $("#drinksForm").submit(function(e){
    //     console.log('Send form')
    //     e.preventDefault();
    //     $.post("/api/recipes",
    //     {
    //       item: "Donald Duck",
    //       maxsellingPrice: "Duckburg"
    //     },
    //     function(data, status){
    //       alert("Data: " + data + "\nStatus: " + status);
    //     });
    //   });

    // $(".drink").on("click", function(){
    //     alert();
    //     $("#resultsDIV ul").append("<li>" + this.text + "<li>")
    // });

    $( "li" ).on( "click", function() {
        $("#resultsDIV>ul").append( "<li>" + $( this ).text() + "</li>");
        order.push($( this ).text());
    });

    $("#placeOrder").on("click", function(){
        let url = "/checkout?";
        for(let i = 0; i < order.length; i++){
            url += "order" + i + "=" + order[i] + "&";
        }
        console.log(url);
        window.location.replace(url);
    });

    function generateUrl(url, params) {
        var i = 0, key;
        for (key in params) {
            if (i === 0) {
                url += "?";
            } else {
                url += "&";
            }
            url += key;
            url += '=';
            url += params[key];
            i++;
        }
        return url;
    }


// SOUPS

// SKEWERS 

// CURRYS

// DESSERTS

});