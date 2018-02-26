'use strict';

var timeOfDay = ['10AM', '11AM', '12pm', '1PM', '2PM', '3PM', '4PM', '5PM'];

var tableBody = document.getElementById("locations");

function makeRowHeader () {
    var rowHeader = document.createElement("tr");
    tableBody.appendChild(rowHeader);
    var blankCell = document.createElement("td");
    blankCell.textContent = "";
    rowHeader.appendChild(blankCell);

    for (var index = 0; index < timeOfDay.length; index++) {
        var cell = document.createElement("td");
        cell.textContent = timeOfDay[index]; 
        rowHeader.appendChild(cell);
    }
    var totalCell = document.createElement("td");
    totalCell.textContent = "Total";
    rowHeader.appendChild(totalCell);

}



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
    tableBody.innerHTML = "";
    makeRowHeader(); 
    for (var storeIndex = 0; storeIndex < storeLocations.length; storeIndex++) {
        var locations = storeLocations[storeIndex];
        var storeRow = document.createElement("tr");
        var storeData = document.createElement("td");
        storeData.textContent = locations.name;
        storeRow.appendChild(storeData);
        tableBody.appendChild(storeRow);

        var totalCookies = 0;  
        for (var hourIndex = 0; hourIndex < timeOfDay.length; hourIndex++) {
            var storeData = document.createElement("td");
            var cookiesForHour = locations.getCookiesPerHour();
            storeData.textContent = cookiesForHour;
            storeRow.appendChild(storeData);
            totalCookies += cookiesForHour;
    }
    var storeData = document.createElement("td");
    storeData.textContent = totalCookies;
    storeRow.appendChild(storeData);
}

}

makeTable();


function getStoreInfo(form) {
    var storeName = form["store-name"].value;
    var minCustomers = form["min-customers"].value;
    var maxCustomers = form["max-customers"].value;
    var newAverageCookieSale = form["average-cookie-sale"].value;
    storeLocations.push(new CookieStores(storeName, minCustomers, maxCustomers, newAverageCookieSale));
    makeTable();
    form.reset();
}















