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
    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    },   
    getCookiesPerHour: function(){
        return Math.floor(this.getRandomCustomer()* this.avgCookieSale);
    } 
}    

var portlandAirport = {
    location: "Portland Airport",
    minCust: 6, 
    maxCust: 24,
    avgCookieSale: 1.2,
    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function(){
        return Math.floor(this.getRandomCustomer()* this.avgCookieSale);
    }
}

var washingtonSquare = {
    location: "Washington Square",
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 1.9,
    getRandomCustomer: function() {
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function(){
        return Math.floor(this.getRandomCustomer()* this.avgCookieSale);
    }
}

var sellwood = {
    location: "sellwood",
    minCust: 20,
    maxCust: 48,
    avgCookieSale: 3.3,
    getRandomCustomer: function(){
        return Math.floor(Math.random() * (this.maxCust-this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function(){
        return Math.floor(this.getRandomCustomer()* this.avgCookieSale);
    }
}

var pearlDistrict = {
    location: "Pearl District",
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 2.6,
    getRandomCustomer: function(){
        return Math.floor(Math.random()) * (this.maxCust-this.minCust)) + this.minCust;
    },
    getCookiesPerHour: function(){
        return Math.floor(this.getRandomCustomer()* this.avgCookieSale);
    }   
}