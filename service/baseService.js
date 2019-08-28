
class BaseService {

    constructor() {
        if(!this.getInfo()) {
            console.log('Yet, no data was collected from site')
        }
    }

    collectData() {}
}

module.exports = BaseService;