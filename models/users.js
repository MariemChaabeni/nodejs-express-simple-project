const sequelize = require('sequelize')
const Op = sequelize.Op
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define(
        'Users',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                commentMe: { 
                    type: DataTypes.INTEGER,
                    comment: 'Identifiant'
                }
            },

            name: {
                type: DataTypes.STRING,
                trim: true,
                commentMe: {
                    type: DataTypes.INTEGER,
                    comment: 'Name'
                },
                validate: {
                    isUnique(value, next) {
                        let ID = this.getID()
                        Users.findOne({
                            where: { name: value, id: { [Op.ne]: ID } }
                        }).done(user => {
                            if (user) {
                                return next(new Error('name should be unique'))
                            }
                            next()
                        })
                    }
                }
            },
            createdAt: {
                type: DataTypes.DATE,
                commentMe: {
                    type: DataTypes.INTEGER,
                    comment: 'Date création'
                }
            },
            updatedAt: {
                type: DataTypes.DATE,
                commentMe: {
                    type: DataTypes.INTEGER,
                    comment: 'Date modification'
                }
            },
            deletedAt: {
                type: DataTypes.DATE,
                commentMe: {
                    type: DataTypes.INTEGER,
                    comment: 'Date suppression'
                }
            }
        },
        {
            timestamps: true,
            tableName: 'Users'
        }
    )

    Users.getLabel = () => {
        return 'Users'
    }

    Users.prototype.getID = function getID() {
        return this.id
    }
    return Users
}
