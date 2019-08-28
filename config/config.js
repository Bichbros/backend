
// Service Configurations

const Config = {

    sites: [
        {
            name: 'ynet',
            title: 'Ynet news',
            url: 'https://www.ynet.co.il'
        },
        {
            name: 'stocks',
            title: 'Stocks Info',
            url: 'https://www.investing.com'
        }
    ],
    data: [
        {
            name: 'ynet',
            fields: [
                'title',
                'articles',
                'links'
            ]
        }
    ]
};

module.exports = Config;