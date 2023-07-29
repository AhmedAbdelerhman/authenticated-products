"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormOptions = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const configService = new config_1.ConfigService();
exports.ormOptions = {
    type: 'mssql',
    database: configService.get('DB_NAME'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    entities: [`${__dirname}/**/*.entity{.js,.ts}`],
    subscriber: [`${__dirname}/**/subscriber/*.subscriber{.js,.ts}`],
    options: { trustServerCertificate: true },
    logging: configService.get('logging') === 'true',
    synchronize: configService.get('synchronize') === 'true',
};
const source = new typeorm_1.DataSource(exports.ormOptions);
exports.default = source;
//# sourceMappingURL=ormconfig.js.map