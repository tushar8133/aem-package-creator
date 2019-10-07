const fsExtra = require('fs-extra');
const {zip, unzip, list } = require('zip-unzip-promise');
const Excel = require('./Excel');
const Replacer = require('./Replacer');
const userConfig = require('./UserConfig');

async function init(){

  console.log("Starting...");

  console.log("Cleaning previous temp files.");
  await fsExtra.emptyDir('./unzipped');
  await fsExtra.emptyDir('./zipped');
  
  console.log("Creating folder structure.");
  await fsExtra.ensureDir(userConfig.UNZIP_PATH+"/"+userConfig.AEM_PATH);
  await unzip("./aem_packages/META-INF.zip", userConfig.UNZIP_PATH);
  await unzip("./aem_packages/content_xml_type_"+userConfig.LIST_TYPE+".zip", "./unzipped/"+userConfig.AEM_PATH);
  
  console.log("Getting excel data.");
  var excel = new Excel();
  var data = await excel.getData(userConfig.FILE, userConfig.LIST_TYPE);
  
  console.log("Inserting data into folder structure.");
  var r = new Replacer();
  await r.doReplace(data);
  
  console.log("Creating zip package of folder structure.");
  var package_name = userConfig.NODEJS__LIST__NAME+'-'+userConfig.NODEJS__PACKAGE__VER+'.zip'
  await zip("./unzipped", userConfig.ZIP_PATH+'/'+package_name);
  
  console.log("Final Package created inside 'zipped' folder.");
}

init();

// process.on('unhandledRejection', err => {});
