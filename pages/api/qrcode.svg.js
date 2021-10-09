const QRCode = require('qrcode-svg');

export default async (req, res) => {
  const text = req.query.text;
  const svg = new QRCode(text).svg();
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}