const request = require('request');


class Collector {

    constructor(service) {
        this.service = service;
    }

    // Methods

    fetchData() {

        request(this.service.getUrl(), (error, response, htmlResult) => {
            if(!error) {
                this.service.collectData(htmlResult);
                console.log('*** process ended ***');
            }
        });
    }


}


module.exports = Collector;