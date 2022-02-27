class AppResponse {
    constructor(data = {},code = 1000, status = 200 , message = "SUCCESS") {
        this.success = true;
        this.data = data;
        this.code = code;
        this.statusCode = status;
        this.message = message
        console.log('this',this);
    }

    toJson() {
        return this;
    }
}

module.exports = AppResponse