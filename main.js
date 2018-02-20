'use strict';

var timeOfDay = ['10AM', '11AM', '12pm', '1PM', '2PM', '3PM', '4PM', '5PM'];

var pioneerSquare = {
    name: "Pioneer Square",
    minCust: 17,
    maxCust: 88,
    avgCookieSale: 5.2,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
    },
}

var portlandAirport = {
    name: "Portland Airport",
    minCust: 6,
    maxCust: 24,
    avgCookieSale: 1.2,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);    
    },
}

var washingtonSquare = {
    name: "Washington Square",
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
    },
}

var sellwood = {
    name: "sellwood",
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);  
    },
}

var pearlDistrict = {
    name: "Pearl District",
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
    getRandomCustomer: function () {
        return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function () {
        return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
    },
}

var storeLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

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










