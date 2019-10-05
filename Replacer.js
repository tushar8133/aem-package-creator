const replace = require('replace-in-file');

function Replacer(){

}

Replacer.prototype.doReplace = function(data) {
    const path = './unzipped';
    const NODEJS__USER__NAME = "admin";
    const NODEJS__TIME = "2019-10-04T11:47:12.450-04:00";
    const NODEJS__PACKAGE__NAME = "LIST-TYPE-A";
    const NODEJS__PACKAGE__VER = "ver1";
    const NODEJS__PACKAGE__DESC = "Demo";
    const NODEJS__PACKAGE__GROUP = "my_packages";
    const NODEJS__COUNTRY__NAME = "ES";
    const NODEJS__LANGUAGE__NAME = "en";
    const NODEJS__BUILD__COUNT = "5";
    const NODEJS__LIST__NAME = "DOCUPLOAD_SUPPORT_ID_LIST";
    const NODEJS__LIST__PATH = "content/wucom/wu-lists/languages";
    const NODEJS__LIST__HEADER = "COUNTRY_CODE,DOCTYPE_KEY,DOCTYPE_VALUE";
    // const NODEJS__LIST__HEADER = "COUNTRY_CODE,DOCTYPE_KEY,SUBTYPE_KEY,SUBTYPE_VALUE";
    const NODEJS__LIST__DATA = data;

    const options = {
        files: [path + '/**/.*', path + '/**/*.*'],
        from: [/NODEJS__USER__NAME/g, /NODEJS__TIME/g, /NODEJS__PACKAGE__NAME/g, /NODEJS__PACKAGE__VER/g, /NODEJS__PACKAGE__DESC/g, /NODEJS__PACKAGE__GROUP/g, /NODEJS__COUNTRY__NAME/g, /NODEJS__LANGUAGE__NAME/g, /NODEJS__BUILD__COUNT/g, /NODEJS__LIST__NAME/g, /NODEJS__LIST__PATH/g, /NODEJS__LIST__HEADER/g, /NODEJS__LIST__DATA/g],
        to:   [ NODEJS__USER__NAME  ,  NODEJS__TIME  ,  NODEJS__PACKAGE__NAME  ,  NODEJS__PACKAGE__VER  ,  NODEJS__PACKAGE__DESC  ,  NODEJS__PACKAGE__GROUP  ,  NODEJS__COUNTRY__NAME  ,  NODEJS__LANGUAGE__NAME  ,  NODEJS__BUILD__COUNT  ,  NODEJS__LIST__NAME  ,  NODEJS__LIST__PATH  ,  NODEJS__LIST__HEADER  ,  NODEJS__LIST__DATA  ],
        dry: false,
        allowEmptyPaths: true
    };

    replace.sync(options);

}

module.exports = Replacer;
