const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
String.prototype.toBase64 = function() {
  let output = "";
  let i = 0;
  while (i < this.length) {
    let chr1 = this.charCodeAt(i++);
    let chr2 = this.charCodeAt(i++);
    let chr3 = this.charCodeAt(i++);
    let enc1 = chr1 >> 2;
    let enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    let enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    let enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    };
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
  };
  return output;
};

String.prototype.fromBase64 = function() {
  let output = "";
  let i = 0;
  let input = this.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    let enc1 = keyStr.indexOf(input.charAt(i++));
    let enc2 = keyStr.indexOf(input.charAt(i++));
    let enc3 = keyStr.indexOf(input.charAt(i++));
    let enc4 = keyStr.indexOf(input.charAt(i++));
    let chr1 = (enc1 << 2) | (enc2 >> 4);
    let chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    let chr3 = ((enc3 & 3) << 6) | enc4;
    output += String.fromCharCode(chr1);
    if (enc3 != 64) {
      output += String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output += String.fromCharCode(chr3);
    }
  };
  return output;
};
