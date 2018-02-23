'use strict';

var timeOfDay = ['10AM', '11AM', '12pm', '1PM', '2PM', '3PM', '4PM', '5PM'];

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
storeLocations.push(new CookieStores('Sellwd', 20, 48, 3.3));
storeLocations.push(new CookieStores('Pearl District', 3, 24, 2.6));

var storeHTML = "";
    for (var storeIndex = 0; storeIndex < storeLocations.length; storeIndex++) {
        storeHTML += "<table><tr><th>" + storeLocations[storeIndex].name + "</th></tr>";
        var totalCookies = 0;  
        for (var hourIndex = 0; hourIndex < timeOfDay.length; hourIndex++) {
            var cookiesForHour = storeLocations[storeIndex].getCookiesPerHour();
            totalCookies += cookiesForHour;
            storeHTML += "<tr><td>" + timeOfDay[hourIndex] + ": " + cookiesForHour + " cookies" + "</td></tr>";
        }
        storeHTML += "<tr><td>" + "Total" + ": " + totalCookies + " cookies" + "</td></tr></table>";
        storeLocations.innerHTML += storeHTML;
    }
document.getElementById("locations").innerHTML = storeHTML;










