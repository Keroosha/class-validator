/**
 * Validation types.
 */
export class ValidationTypes {
    /**
     * Checks if validation type is valid.
     */
    static isValid(type) {
        return (type !== 'isValid' &&
            type !== 'getMessage' &&
            Object.keys(this)
                .map(key => this[key])
                .indexOf(type) !== -1);
    }
}
/* system */
ValidationTypes.CUSTOM_VALIDATION = 'customValidation'; // done
ValidationTypes.NESTED_VALIDATION = 'nestedValidation'; // done
ValidationTypes.PROMISE_VALIDATION = 'promiseValidation'; // done
ValidationTypes.CONDITIONAL_VALIDATION = 'conditionalValidation'; // done
ValidationTypes.WHITELIST = 'whitelistValidation'; // done
ValidationTypes.IS_DEFINED = 'isDefined'; // done
//# sourceMappingURL=ValidationTypes.js.map