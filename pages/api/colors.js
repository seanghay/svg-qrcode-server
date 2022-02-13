
function randomHSLColor() {
    const randomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
  
    const h = randomInt(0, 360);
    const s = randomInt(42, 98);
    const l = randomInt(40, 90);
  
    return [h, s, l];
  }
  
  function HSLToRGB(hsl) {
    let [h, s, l] = hsl;
    s /= 100;
    l /= 100;
    const k = (n) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n) =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [255 * f(0), 255 * f(8), 255 * f(4)];
  }
  
  function componentToHex(c) {
    c = Math.round(c);
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }
  
  function rgbToHex(rgb) {
    return (
      '#' +
      componentToHex(rgb[0]) +
      componentToHex(rgb[1]) +
      componentToHex(rgb[2])
    );
  }
  
  

export default async (req, res) => {
    res.json({ hex: rgbToHex(HSLToRGB(randomHSLColor())) });
}
