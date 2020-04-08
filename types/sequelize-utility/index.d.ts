// Type definitions for sequelize-utility 1.0
// Project: https://github.com/tahsinature/sequelize-utility#readme
// Definitions by: Saefulloh Maslul <https://github.com/saefullohmaslul>
// Definitions: https://github.com/DefinitelyTyped/sequelize-ulitity

declare module 'sequelize-utility' {
    import { Sequelize, SequelizeStatic, Model } from 'sequelize'
    /**
     * Declare new class SequelizeHelper
     */
    export class SequelizeHelper {
        /**
         * inject sequelize instance and original sequelize library
         * @param config sequelize instance
         * @param Sequelize sequelize library
         */
        constructor(config: Sequelize[], Sequelize: SequelizeStatic | { new(): Sequelize })

        /**
         * establish connection database
         */
        public establishConnections(): Promise<void>

        /**
         * sync force by table name
         * @param table table name to reset
         */
        public resetTable(table: typeof Model): Promise<void>

        /**
         * sync all force except table name
         * @param table table name to excepts
         * @param db sequelize instance
         */
        public resetTablesExcepts(table: typeof Model | typeof Model[], db: Sequelize): Promise<void>

        /**
         * sync connection
         * @param connection sequelize instance
         */
        public sync(connection?: Sequelize): Promise<void>

        /**
         * sync and reset all table
         * @param connection sequelize instance
         */
        public syncForce(connection?: Sequelize): Promise<void>

        /**
         * sync and reset all table at all sequelize instance
         */
        public syncAllForce(): Promise<void>

        /**
         * drop all table
         * @param connection sequelize instance
         */
        public dropAllTablesFromConnection(connection?: Sequelize): Promise<void>

        /**
         * drop all table at all sequelize instance
         */
        public dropAllTablesFromAllConnections(): Promise<void>

        /**
         * closing all connection
         */
        public closeAllConnections(): Promise<void>
    }
}