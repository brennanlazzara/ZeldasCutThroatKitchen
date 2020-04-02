$(document).ready(function () {

    // GET REQUESTS
    $.get("/api/recipes", function (data) {
        console.log(data);

        // DRINKS LIST 
        for (let i = 0; i < data.drinks.length; i++) {
            let li = $("<li>").text(data.drinks[i].item + '    $' + data.drinks[i].maxSellingPrice)
            $('#drinksList').append(li)
        }
        
        //SOUPS LIST
        for (let i = 0; i < data.soups.length; i++) {
            let li = $("<li>").text(data.soups[i].item + '    $' + data.soups[i].maxSellingPrice)
            $('#soupsList').append(li)
        }



        // SKEWERS LIST 
        for (let i = 0; i < data.skewers.length; i++) {
            let li = $("<li>").text(data.skewers[i].item + '    $' + data.skewers[i].maxSellingPrice)
            $('#skewersList').append(li)
        }



        // CURRIES LIST
        for (let i = 0; i < data.currys.length; i++) {
            let li = $("<li>").text(data.currys[i].item + '    $' + data.currys[i].maxSellingPrice)
            $('#currysList').append(li)
        }

        //DESSERTS LIST
        for (let i = 0; i < data.desserts.length; i++) {
            let li = $("<li>").text(data.desserts[i].item + '    $' + data.desserts[i].maxSellingPrice);
            $('#dessertsList').append(li)
        }




    });

// USERS SELECTS







    //POST REQUESTS

//DRINKS LIST
    $("#drinksForm").submit(function(e){
        console.log('Send form')
        e.preventDefault();
        $.post("/api/recipes",
        {
          item: "Donald Duck",
          maxsellingPrice: "Duckburg"
        },
        function(data, status){
          alert("Data: " + data + "\nStatus: " + status);
        });
      });



// SOUPS

// SKEWERS 

// CURRYS

// DESSERTS

});