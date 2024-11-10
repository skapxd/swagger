"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidationMetadataByTarget = getValidationMetadataByTarget;
const class_validator_1 = require("class-validator");
function getValidationMetadataByTarget(target) {
    const metadataStorage = (0, class_validator_1.getFromContainer)(class_validator_1.MetadataStorage);
    const targetMetadata = metadataStorage.getTargetValidationMetadatas(target, null);
    return targetMetadata;
}
