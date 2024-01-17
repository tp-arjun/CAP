const cds = require('@sap/cds');
const bodyParser = require('body-parser');
const xsenv = require("@sap/xsenv");
const xsHDBConn = require("@sap/hdbext");
const proxy = require("@sap/cds-odata-v2-adapter-proxy");


//Initialize Express App for XSA UAA  Middleware
const passport = require("passport");
xsenv.loadEnv();
var xssec = require("@sap/xssec");
 cds.on("bootstrap", (app) => {

   //CDS v2 proxy
   app.use(proxy());


 });
module.exports = cds.server;
