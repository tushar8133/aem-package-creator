const replace = require('replace-in-file');
const userConfig = require('./UserConfig');

function Replacer(){

}

Replacer.prototype.doReplace = function(data) {
    return new Promise( (resolve, reject) => {

        userConfig['NODEJS__LIST__HEADER'] = (userConfig['LIST_TYPE'] == 'A') ? "COUNTRY_CODE,DOCTYPE_KEY,DOCTYPE_VALUE":"COUNTRY_CODE,DOCTYPE_KEY,SUBTYPE_KEY,SUBTYPE_VALUE";
        userConfig['NODEJS__LIST__DATA'] = data;

        var constList = [
            "NODEJS__LIST__DATA",
            "NODEJS__USER__NAME",
            "NODEJS__TIME",
            "NODEJS__PACKAGE__NAME",
            "NODEJS__PACKAGE__VER",
            "NODEJS__PACKAGE__DESC",
            "NODEJS__PACKAGE__GROUP",
            "NODEJS__COUNTRY__NAME",
            "NODEJS__LANGUAGE__NAME",
            "NODEJS__BUILD__COUNT",
            "NODEJS__LIST__NAME",
            "NODEJS__LIST__PATH",
            "NODEJS__LIST__HEADER",
            "NODEJS__LIST__DATA"
        ]

        var regexList = [];
        var dataList = [];

        constList.forEach(function(val) {
            regexList.push(new RegExp(val,'g'));
            dataList.push(userConfig[val]);
        })

        const options = {
            files: [userConfig.UNZIP_PATH + '/**/.*', userConfig.UNZIP_PATH + '/**/*.*'],
            from: [...regexList],
            to:   [...dataList],
            dry: false,
            allowEmptyPaths: true
        };

        replace(options).then(() => {
            resolve();
        }).catch(() => {
            reject();
        });

    });

}

module.exports = Replacer;
