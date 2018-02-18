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
        for (var i = 0; i < timeOfDay.length; i++) {
            return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
            
        }
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
        for (var i = 0; i < timeOfDay.length; i++) {
            return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
            
        }
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
        for (var i = 0; i < timeOfDay.length; i++) {
            return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
            
        }
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
        for (var i = 0; i < timeOfDay.length; i++) {
            return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
        }
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
        for (var i = 0; i < timeOfDay.length; i++) {
            return Math.floor(this.getRandomCustomer() * this.avgCookieSale);
        }
    },
}



var storeLocations = [pioneerSquare, portlandAirport, washingtonSquare, sellwood, pearlDistrict];

var storeHTML = "";
for (var storeIndex = 0; storeIndex < storeLocations.length; storeIndex++) {
    storeHTML += "<ul><h3>" + storeLocations[storeIndex].name + "</h3>";
    for (var hourIndex = 0; hourIndex < timeOfDay.length; hourIndex++) {
        storeHTML += "<li>" + timeOfDay[hourIndex] + ": " + storeLocations[storeIndex].getCookiesPerHour() + "</li>";

    }
    storeLocations.innerHTML += storeHTML + "</ul>";
}
document.getElementById("locations").innerHTML = storeHTML;










