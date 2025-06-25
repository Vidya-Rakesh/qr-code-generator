// generateQR.js
const QRCode = require('qrcode');

// Replace this with your actual website URL
const websiteURL = 'https://www.imitpark.com';

// Save QR code as PNG image
QRCode.toFile('imitpark-qr.png', websiteURL, {
  color: {
    dark: '#000000',  // Black dots
    light: '#ffffff'  // White background
  }
}, function (err) {
  if (err) {
    console.error('Failed to generate QR code:', err);
  } else {
    console.log('✅ QR Code generated successfully! Check the file: imitpark-qr.png');
  }
});
