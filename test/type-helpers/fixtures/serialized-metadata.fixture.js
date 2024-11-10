"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SERIALIZED_METADATA = void 0;
exports.SERIALIZED_METADATA = {
    '@nestjs/swagger': {
        models: [
            [
                Promise.resolve().then(() => require('./create-user-dto.fixture')),
                {
                    CreateUserDto: {
                        active: {
                            type: () => Boolean
                        },
                        role: {
                            type: () => String
                        }
                    }
                }
            ]
        ]
    }
};
