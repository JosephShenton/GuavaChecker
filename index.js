const pem = require("pem");
const fs = require("fs");

const pfx = fs.readFileSync("/Users/josephshenton/Downloads/hehe.p12");
pem.readPkcs12(pfx, { p12Password: "daddy" }, (err, cert) => {
    console.log(cert);
});