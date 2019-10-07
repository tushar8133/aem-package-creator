const replace = require('replace-in-file');
const userConfig = require('./UserConfig');

function Replacer(){

}

Replacer.prototype.doReplace = function(data) {
    return new Promise( (resolve, reject) => {

        // const NODEJS__LIST__HEADER = "COUNTRY_CODE,DOCTYPE_KEY,SUBTYPE_KEY,SUBTYPE_VALUE";
        const NODEJS__LIST__DATA = data;

        const options = {
            files: [userConfig.UNZIP_PATH + '/**/.*', userConfig.UNZIP_PATH + '/**/*.*'],
            from: [/NODEJS__USER__NAME/g, /NODEJS__TIME/g, /NODEJS__PACKAGE__NAME/g, /NODEJS__PACKAGE__VER/g, /NODEJS__PACKAGE__DESC/g, /NODEJS__PACKAGE__GROUP/g, /NODEJS__COUNTRY__NAME/g, /NODEJS__LANGUAGE__NAME/g, /NODEJS__BUILD__COUNT/g, /NODEJS__LIST__NAME/g, /NODEJS__LIST__PATH/g, /NODEJS__LIST__HEADER/g, /NODEJS__LIST__DATA/g],
            to:   [userConfig.NODEJS__USER__NAME, userConfig.NODEJS__TIME, userConfig.NODEJS__PACKAGE__NAME, userConfig.NODEJS__PACKAGE__VER, userConfig.NODEJS__PACKAGE__DESC, userConfig.NODEJS__PACKAGE__GROUP, userConfig.NODEJS__COUNTRY__NAME, userConfig.NODEJS__LANGUAGE__NAME, userConfig.NODEJS__BUILD__COUNT, userConfig.NODEJS__LIST__NAME, userConfig.NODEJS__LIST__PATH, userConfig.NODEJS__LIST__HEADER, userConfig.NODEJS__LIST__DATA],
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
