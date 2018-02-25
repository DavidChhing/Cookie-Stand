'use strict';

var timeOfDay = ['10AM', '11AM', '12pm', '1PM', '2PM', '3PM', '4PM', '5PM'];

// var storeHTML = document.getElementById("locations");
// var rowHeaders = document.createElement("tr");
// table.appendChild(rowHeaders);

// for (var = index; index < timeOfDay.length; index++) {
//     var cells = document.createElement("td");
//     cells.textContent = timeOfDay[index]; 
//     rowHeaders.appendChild(cell);
// }

// var store = new CookieStores('Pioneer Square', 17, 88, 5.2);

// var cell = document.createElement("td");
// cell.textContent = store.name;



function CookieStores(name, minCust, maxCust, avgCookieSale, getRandomCustomer,getCookiesPerHour) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale; 
    this.getRandomCustomer = function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    }
    this.getCookiesPerHour = function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
    }    
}

var storeLocations = [];
storeLocations.push(new CookieStores('Pioneer Square', 17, 88, 5.2));
storeLocations.push(new CookieStores('Portland Airport', 6, 24, 1.2));
storeLocations.push(new CookieStores('Washington Square', 11, 38, 1.9));
storeLocations.push(new CookieStores('Sellwood', 20, 48, 3.3));
storeLocations.push(new CookieStores('Pearl District', 3, 24, 2.6));

function makeTable() {
    var storeHTML = document.getElementById("locations").firstElementChild;
    console.log(storeHTML);
    storeHTML.innerHTML = "";
    console.log(storeHTML);
    for (var storeIndex = 0; storeIndex < storeLocations.length; storeIndex++) {
        storeHTML.innerHTML += "<tr><th>" + storeLocations[storeIndex].name + "</th></tr>";
        var totalCookies = 0;  
        for (var hourIndex = 0; hourIndex < timeOfDay.length; hourIndex++) {
            var cookiesForHour = storeLocations[storeIndex].getCookiesPerHour();
            storeHTML.innerHTML += "<tr><td>" + timeOfDay[hourIndex] + ": " + cookiesForHour + " cookies" + "</td></tr>";
            totalCookies += cookiesForHour;
        }
        storeHTML.innerHTML += "<tr><td>" + "Total" + ": " + totalCookies + " cookies" + "</td></tr>";
    }
}

function getStoreInfo(form) {
    var storeName = form["store-name"].value;
    var minCustomers = form["min-customers"].value;
    var maxCustomers = form["max-customers"].value;
    var newAverageCookieSale = form["average-cookie-sale"].value;
    storeLocations.push(new CookieStores(storeName, minCustomers, maxCustomers, newAverageCookieSale));
    makeTable();
    form.reset();
}

makeTable();






// function validateNewStoreInfo(form) {
//     var allFieldsFilled = true;
//     for (var index = 0; index < fieldset.elements.length; index++) {
//          if (fieldset.elements[index].value =="") {
//             allFieldsFilled = false;
//         } 
//         var newStoreInfo = document.createElement("fieldset");
//     }
//     if (allFieldsFilled) {
//         alert("Please fill all necessary fields and submit again.");
//         return false;
//     }
//     return true;
// }








