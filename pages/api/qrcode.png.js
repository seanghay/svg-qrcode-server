const qrcode = require('qrcode');

export default async (req, res) => {
  
  const text = req.query.text;
  const data = await qrcode.toBuffer(text, { type: 'png', width: 512 });

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  
  res.send(data);
}
