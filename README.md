# qr-code-generator
# QR Code Generator for IMIT Park

This is a simple Node.js script to generate a QR code that links directly to the [IMIT Park](https://www.imitpark.com) website. The QR code can be used on employee ID cards, brochures, banners, and more.

## 🔧 Features

- Generates a high-quality QR code in PNG format
- Simple, lightweight, and fast
- Easy to modify for other URLs or bulk generation

## 📁 Project Structure
qr-code-generator/
├── generateQR.js # Main script to generate the QR code
├── package.json # Node project metadata
├── package-lock.json # Auto-generated lock file
└── imitpark-qr.png # Output QR code image
## 🚀 How to Use

### 1. Clone or download the project

```bash
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
2. Install dependencies

npm install
3. Run the script

node generateQR.js
You’ll find the generated QR code as imitpark-qr.png in the project folder.

✏️ Customization
You can change the website URL by editing the websiteURL variable in generateQR.js:


const websiteURL = 'https://www.imitpark.com';
📷 Example Output

Scan this QR to visit imitpark.com

📄 License
This project is licensed under the MIT License.
