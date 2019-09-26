const resolvers = {
    Query: {
        cars: (parent, args, { models }) => {
            return models.Car.findAll();
        },
        car: (parent, { id }, { models}) => {
            return models.Car.findByPk(id);
        }
    },
    Car: {
        owner: (parent, args, { models }) => {
            return models.User.findByPk(parent.userId);
        }
    },
    Mutation: {
        createCar: (parent, { make, model, color }, { models }) => {
            const car = {
                make,
                model,
                color
            };
            return models.Car.create(car);
        },
        removeCar: (parent, { id }, { models }) => {
            return models.Car.destroy({
                where: {
                    id
                }
            });
        }
    }
};

module.exports = resolvers;