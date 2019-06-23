const {User, Role, UserRole} = require("../sequelize");

exports.getDecodedUserData = async () => {
    try {

    } catch (e) {
        throw Error('Error while decoding user data')
    }
}

exports.findAllUsers = async () => {
    try {
        return await User.findAll({
            attributes: [
                "id",
                "salutation",
                "username",
                "fullName",
                "email",
                "telephone"
            ],
            include: [
                {
                    model: Role
                }
            ]
        })
    } catch (e) {
        throw Error('Error while getting all users');
    }
}

exports.getUserById = async (userId) => {
    try {
        return await User.findOne({
            where: {
                id: userId
            }
        })
    } catch (e) {
        throw Error('Error while getting user by id');
    }
}

exports.updateUser = async (salutation, username, fullName, email, telephone, userId, roleId) => {
    try {
        User.update(
            {
                salutation: salutation,
                username: username,
                fullName: fullName,
                email: email,
                telephone: telephone
            },
            {
                where: {
                    id: userId
                }
            }
        );

        UserRole.findOne({where: {userId: userId}})
            .then(function (obj) {
                if (obj) {
                    // update
                    UserRole.update(
                        {
                            roleId: roleId
                        },
                        {
                            where: {
                                userId: userId
                            },
                            attributes: ["userId", "roleId"]
                        }
                    );
                } else {
                    // insert
                    UserRole.create({
                        userId: userId,
                        roleId: roleId
                    });
                }
            })

        return;
    } catch (e) {
        throw Error("Error while updating user" + e);
    }
}

exports.updateEmail = async (email, userId) => {
    try {
        return await User.update(
            {
                email: email
            },
            {
                where: {
                    id: userId
                },
                attributes: ["userId", "email"]
            }
        )
    } catch (e) {
        throw Error('Error while updating email');
    }
}
