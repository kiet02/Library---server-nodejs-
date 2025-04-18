const forge = require("node-forge");
const fs = require("fs");
const path = require("path");

// Tạo thư mục ssl nếu chưa tồn tại
const sslDir = path.join(__dirname, "../ssl");
if (!fs.existsSync(sslDir)) {
  fs.mkdirSync(sslDir);
}

// Generate key pair
const keys = forge.pki.rsa.generateKeyPair(2048);

// Create X.509 certificate
const cert = forge.pki.createCertificate();
cert.publicKey = keys.publicKey;
cert.serialNumber = "01";
cert.validity.notBefore = new Date();
cert.validity.notAfter = new Date();
cert.validity.notAfter.setFullYear(cert.validity.notBefore.getFullYear() + 1);

const attrs = [
  {
    name: "commonName",
    value: "localhost",
  },
  {
    name: "countryName",
    value: "VN",
  },
  {
    name: "organizationName",
    value: "Test",
  },
  {
    shortName: "ST",
    value: "Test",
  },
];

cert.setSubject(attrs);
cert.setIssuer(attrs);
cert.sign(keys.privateKey);

// Convert to PEM format
const privateKeyPem = forge.pki.privateKeyToPem(keys.privateKey);
const certPem = forge.pki.certificateToPem(cert);

// Save files
fs.writeFileSync(path.join(sslDir, "private.key"), privateKeyPem);
fs.writeFileSync(path.join(sslDir, "certificate.crt"), certPem);

console.log("SSL certificate generated successfully!");
