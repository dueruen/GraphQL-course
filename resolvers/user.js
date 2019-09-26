const resolvers = {
    Query: {
        users: (parent, args, { models }) => {
            return models.User.findAll();
        },
        user: (parent, { id }, { models }) => {
            return models.User.findByPk(id);
        }, 
        // me: (parent, args, { me }) => me
    },
    User: {
        car: (parent, args, { models }) => {
            return models.Car.findAll({
                where: {
                    userId: parent.id
                }
            });
        }
    },
    Mutation: {
        makeUser: (parent, { id, name }, { models}) => {
            const user = {
                name
            };
            return models.User.create(user);
        },
        removeUser: (parent, { id }, { models}) => {
            return models.User.destroy({
                where: {
                    id
                }
            });
        }
    }
};

module.exports = resolvers;