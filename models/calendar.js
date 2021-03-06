const Sequelize = require('sequelize');
/**
 * @swagger
 *  definitions:
 *    Calendar:
 *      type: object
 *      required:
 *        - id
 *        - snsId
 *        - dateStart
 *        - dateEnd
 *      properties:
 *        id:
 *          type: int
 *        snsId:
 *          type: string
 *        content:
 *          type: string
 *        dateStart:
 *          type: string
 *          format: date
 *        dateEnd:
 *          type: string
 *          format: date
 *      example:
 *         content: content
 *         dateStart: 2021-01-01 00:00:00
 *         dateEnd: 2021-01-01 00:00:00
 */

module.exports = class Calendar extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING(100),
          allowNull: true,
        },
        dateStart: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        dateEnd: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'Calendar',
        tableName: 'calendars',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
      }
    );
  }

  static associate(db) {}
};
