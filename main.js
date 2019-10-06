const fsExtra = require('fs-extra');
const {zip, unzip, list } = require('zip-unzip-promise');
const Excel = require('./Excel');
const Replacer = require('./Replacer');

const FILE = 'test.xlsx'
const LIST_TYPE = "B";

async function init(){

  console.log("\nStarting...\n");
  
  console.log("Cleaning previous temp files.");
  await fsExtra.emptyDir('./unzipped');
  await fsExtra.emptyDir('./zipped');
  console.log("Done");

  console.log();

  console.log("Creating folder structure.");
  await unzip(`./aem_packages/PACKAGE_TYPE_${LIST_TYPE}.zip`, `./unzipped`, { overwrite: true });
  console.log("Done");

  console.log();

  console.log("Getting excel data.");
  var excel = new Excel();
  var data = await excel.getData(FILE, LIST_TYPE);
  console.log("Done");

  console.log();

  console.log("Inserting data into folder structure.");
  var r = new Replacer();
  await r.doReplace(data);
  console.log("Done");

  console.log();

  console.log("Creating zip package of folder structure.");
  await zip('./unzipped/', './zipped/output.zip', {overwrite: true });
  console.log("Done");


  console.log("\nFinal Package created inside 'zipped' folder.");

}

init();

// process.on('unhandledRejection', err => {});
