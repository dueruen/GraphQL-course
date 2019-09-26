let users = [{
    id: 1,
    name: 'Tamas',
    car: [1, 2]
},{
    id: 2,
    name: 'Susan',
    car: []
},{
    id: 3,
    name: 'Steven ',
    car: [3]
}];

let cars = [{
    id: 1,
    make: 'Ford',
    model: 'Focus',
    color: 'red',
    ownedBy: 1
},{
    id: 2,
    make: 'Fiat',
    model: '500',
    color: 'blue',
    ownedBy: 1
},{
    id: 1,
    make: 'Mercedes',
    model: 'C250',
    color: 'silver',
    ownedBy: 3
}]

module.exports = {
    users,
    cars
};