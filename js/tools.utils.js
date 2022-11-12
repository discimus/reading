const utils = {
    generatePercentage(numerator, denominator) {
        return `${Number((numerator * 100) / denominator).toFixed()}%`
    },
    generatePercentageWithCeil(numerator, denominator, ceil) {
        return ((numerator * 100) / denominator) > ceil ? "100%" : this.generatePercentage(numerator, denominator)
    },
    isEmptyString(value) {
        return !value || value.length === 0
    },
    isUndefined(value) {
        return value === undefined
    }
}