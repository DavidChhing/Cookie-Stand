var cookieStand = [];
cookieStand.push({location: "Pioneer Square", minCust: "17", maxCust: "88", avgCookieSale:"5.2"});
cookieStand.push({location: "Portland Airport", minCust: "6", maxCust: "24", avgCookieSale: "1.2"});
cookieStand.push({location: "Washington Square", minCust: "11", maxCust: "38", avgCookieSale: "1.9"});
cookieStand.push({location: "Sellwood", minCust: "20", maxCust: "48", avgCookieSale: "3.3"});
cookieStand.push({location: "Pearl District", minCust: "3", maxCust: "24", avgCookieSale: "2.6"});



var pioneerSquare = {
    location: "Pioneer Square",
    minCust: 17, 
    maxCust: 88,
    avgCookieSale: 5.2,
    getRandomNumber: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    }
}

var portlandAirport = {
    location: "Portland Airport",
    minCust: 6, 
    maxCust: 24,
    avgCookieSale: 1.2,
    getRandomNumber: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    }
}

var washingtonSquare = {
    location: "Washington Square",
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
    getRandomNumber: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    }
}

var sellwood = {
    location: "sellwood",
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    getRandomNumber: function(){
        return Math.floor(Math.random()) * (this.maxCust-this.minCust)) + this.minCust;
    }
}

var pearlDistrict = {
    location: "Pearl District",
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
    getRandomNumber: function(){
        return Math.floor(Math.random()) * (this.maxCust-this.minCust)) + this.minCust;
    }
}