"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var cars = [
            { id: 11, name: 'Ford Focus', year: 2009, capacity: 2000, horsepower: 200, type: 'Hatchbag' },
            { id: 12, name: 'Honda Civic', year: 2014, capacity: 1600, horsepower: 120, type: 'Hatchbag' },
            { id: 13, name: 'Mercedes Benz CLA', year: 2015, capacity: 2000, horsepower: 380, type: 'Coupe' },
            { id: 14, name: 'Audi A6', year: 2012, capacity: 1800, horsepower: 220, type: 'Sedan' },
            { id: 15, name: 'Bmw Z4', year: 2016, capacity: 3200, horsepower: 360, type: 'Cabrio' },
            { id: 16, name: 'Bmw M3', year: 2013, capacity: 3000, horsepower: 420, type: 'Coupe' },
            { id: 17, name: 'Mazda MX-5', year: 2011, capacity: 1800, horsepower: 160, type: 'Cabrio' },
            { id: 18, name: 'Mercedes Benz Class C', year: 2010, capacity: 1600, horsepower: 140, type: 'Sedan' },
            { id: 19, name: 'Seat Ibiza', year: 2006, capacity: 1400, horsepower: 75, type: 'Hatchbag' },
            { id: 20, name: 'Lamborghini Gallardo', year: 2014, capacity: 4800, horsepower: 560, type: 'Coupe' }
        ];
        return { cars: cars };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map