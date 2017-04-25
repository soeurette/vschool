var validate = function (obj) {
    for (key in obj) {
        if (obj[key] === undefined || obj[key] === "") {
            return {
                pass: false,
                message: " missingdata" + key
            }
        }
    }
    return true
}

module.exports = validate;