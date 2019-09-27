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
        createCar: (parent, { make, model, color }, { models, me }) => {
            if (!me) {
                throw new Error('Not authenticated');
            }
            const car = {
                make,
                model,
                color,
                userId: me.id
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