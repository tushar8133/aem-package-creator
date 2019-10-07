const USER_CONFIG = {
	NODEJS__USER__NAME : "admin",
	NODEJS__TIME : "2019-10-04T11:47:12.450-04:00",
	NODEJS__PACKAGE__NAME : "LIST-TYPE-A",
	NODEJS__PACKAGE__VER : "ver1",
	NODEJS__PACKAGE__DESC : "Demo",
	NODEJS__PACKAGE__GROUP : "my_packages",
	NODEJS__COUNTRY__NAME : "ES",
	NODEJS__LANGUAGE__NAME : "en",
	NODEJS__BUILD__COUNT : "5",
	NODEJS__LIST__NAME : "DOCUPLOAD_SUPPORT_ID_LIST",
	NODEJS__LIST__PATH : "content/wucom/wu-lists/languages",
	NODEJS__LIST__HEADER : "COUNTRY_CODE,DOCTYPE_KEY,DOCTYPE_VALUE",
	UNZIP_PATH : './unzipped',
	ZIP_PATH : './zipped',
	FILE : 'test.xlsx',
	LIST_TYPE : "B",
	AEM_PATH : `jcr_root/content/wucom/wu-lists/languages/${this.NODEJS__LANGUAGE__NAME}/${this.NODEJS__LIST__NAME}`
}

module.exports = USER_CONFIG;