export class InMemoryDataService {
  createDb() {
    let cars = [
      {id: 11, name: 'Ford Focus',year: 2009, capacity: 2000, horsepower:200, type:'Hatchbag'},
      {id: 12, name: 'Honda Civic',year: 2014, capacity: 1600, horsepower:120, type:'Hatchbag'},
      {id: 13, name: 'Mercedes Benz CLA',year: 2015, capacity: 2000, horsepower:380, type:'Coupe'},
      {id: 14, name: 'Audi A6',year: 2012, capacity: 1800, horsepower:220, type:'Sedan'},
      {id: 15, name: 'Bmw Z4',year: 2016, capacity: 3200, horsepower:360, type:'Cabrio'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];
    return {cars};
  }
}
