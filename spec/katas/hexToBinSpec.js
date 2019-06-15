const subject = require('./../../katas/hexToBin/hexToBin');

var testExample = function(hexString, expectedResult) {

  describe("when hexString = '" + hexString + "'", function() {

    it("returns " + expectedResult, function() {
      var result = subject.hexToBin(hexString);
      expect(result).toEqual(expectedResult);
    });
  });
};

describe("hexToBin", function() {

  testExample('5', '101');
  testExample('f', '1111');
  testExample('0', '0');
  testExample('4d2', '10011010010');
  testExample('2e2908709153f', '10111000101001000010000111000010010001010100111111');
  testExample('f71440f06717', '111101110001010001000000111100000110011100010111');
  testExample('34d16b82061eb', '11010011010001011010111000001000000110000111101011');
  testExample('371a3a391aed3', '11011100011010001110100011100100011010111011010011');
  testExample('2ce9dfe151501', '10110011101001110111111110000101010001010100000001');
  testExample('95fd7e9e8781', '100101011111110101111110100111101000011110000001');
  testExample('1d780db0300cf', '1110101111000000011011011000000110000000011001111');
  testExample('1c2594b105a09', '1110000100101100101001011000100000101101000001001');
  testExample('299a8549cb8b5', '10100110011010100001010100100111001011100010110101');
  testExample('1531ac8792b15', '1010100110001101011001000011110010010101100010101');
  testExample('1eef40971af99', '1111011101111010000001001011100011010111110011001');
  testExample('3139f2ce3aa5c', '11000100111001111100101100111000111010101001011100');
  testExample('318a6e1f33d81', '11000110001010011011100001111100110011110110000001');
  testExample('2f26da7f9413c', '10111100100110110110100111111110010100000100111100');
  testExample('a581ddac2fb8', '101001011000000111011101101011000010111110111000');
  testExample('5fb4d93a4e89', '10111111011010011011001001110100100111010001001');
  testExample('38bb6c1639666', '11100010111011011011000001011000111001011001100110');
  testExample('2a7a1ef421074', '10101001111010000111101111010000100001000001110100');
  testExample('61d593b474c6', '11000011101010110010011101101000111010011000110');
  testExample('1ec1cefb9a7df', '1111011000001110011101111101110011010011111011111');
  testExample('8038a85b4e45', '100000000011100010101000010110110100111001000101');
  testExample('10177be347f2e', '1000000010111011110111110001101000111111100101110');
  testExample('279b80b214a97', '10011110011011100000001011001000010100101010010111');
  testExample('379783b593f3c', '11011110010111100000111011010110010011111100111100');
  testExample('142dfe3016ee0', '1010000101101111111100011000000010110111011100000');
  testExample('50ccd422541a', '10100001100110011010100001000100101010000011010');
  testExample('2a7c5f998fd13', '10101001111100010111111001100110001111110100010011');
  testExample('281dd1bc7ac26', '10100000011101110100011011110001111010110000100110');
  testExample('1a27e6f9f3989', '1101000100111111001101111100111110011100110001001');
  testExample('37f3a4819c817', '11011111110011101001001000000110011100100000010111');
  testExample('a8634b8642ec', '101010000110001101001011100001100100001011101100');
  testExample('2083729340c49', '10000010000011011100101001001101000000110001001001');
  testExample('26ee52a166d9a', '10011011101110010100101010000101100110110110011010');
  testExample('29e71b6b33f99', '10100111100111000110110110101100110011111110011001');
  testExample('1635d5b44fd4e', '1011000110101110101011011010001001111110101001110');
  testExample('2ff56d8bd8aba', '10111111110101011011011000101111011000101010111010');
  testExample('27abd7c7ae248', '10011110101011110101111100011110101110001001001000');
  testExample('f13aff255c68', '111100010011101011111111001001010101110001101000');
  testExample('3535918a77498', '11010100110101100100011000101001110111010010011000');
  testExample('d0c6904d63d8', '110100001100011010010000010011010110001111011000');
  testExample('80e4bc071c58', '100000001110010010111100000001110001110001011000');
  testExample('314c58cd63ad0', '11000101001100010110001100110101100011101011010000');
  testExample('1f26db8959eed', '1111100100110110110111000100101011001111011101101');
  testExample('181b1ec17dc50', '1100000011011000111101100000101111101110001010000');
  testExample('1061c89435bee', '1000001100001110010001001010000110101101111101110');
  testExample('1afb46fa10779', '1101011111011010001101111101000010000011101111001');
  testExample('2cc4d5dbf0f5', '1011001100010011010101110110111111000011110101');
  testExample('9127395086fc', '100100010010011100111001010100001000011011111100');
  testExample('daba3f6ade8c', '110110101011101000111111011010101101111010001100');
  testExample('f58043114713', '111101011000000001000011000100010100011100010011');
  testExample('1433f14bbbcd0', '1010000110011111100010100101110111011110011010000');
  testExample('235575e7662a6', '10001101010101011101011110011101100110001010100110');
  testExample('2d99fdcba2352', '10110110011001111111011100101110100010001101010010');
  testExample('aef7a7ba4a21', '101011101111011110100111101110100100101000100001');
  testExample('2c8f729671e56', '10110010001111011100101001011001110001111001010110');
  testExample('36ddbc25b05f1', '11011011011101101111000010010110110000010111110001');
  testExample('1eda507117708', '1111011011010010100000111000100010111011100001000');
  testExample('3698225ae35c1', '11011010011000001000100101101011100011010111000001');
  testExample('1675db2586395', '1011001110101110110110010010110000110001110010101');
  testExample('27203ce71fcc7', '10011100100000001111001110011100011111110011000111');
  testExample('379c714d33e3f', '11011110011100011100010100110100110011111000111111');
  testExample('306c9ef4b9969', '11000001101100100111101111010010111001100101101001');
  testExample('15923e1faa1bf', '1010110010010001111100001111110101010000110111111');
  testExample('38b06f5e39674', '11100010110000011011110101111000111001011001110100');
  testExample('a4c743b530e9', '101001001100011101000011101101010011000011101001');
  testExample('188808b9df876', '1100010001000000010001011100111011111100001110110');
  testExample('30f1ef27d8a3e', '11000011110001111011110010011111011000101000111110');
  testExample('81eb0c1e519d', '100000011110101100001100000111100101000110011101');
  testExample('15499da5b799', '101010100100110011101101001011011011110011001');
  testExample('141bc99b3c552', '1010000011011110010011001101100111100010101010010');
  testExample('2248d60827450', '10001001001000110101100000100000100111010001010000');
  testExample('db73d06dcb50', '110110110111001111010000011011011100101101010000');
  testExample('198c0f7c7b6d', '110011000110000001111011111000111101101101101');
  testExample('29aa202808ee2', '10100110101010001000000010100000001000111011100010');
  testExample('26adf1a03b64b', '10011010101101111100011010000000111011011001001011');
  testExample('293b03188bb86', '10100100111011000000110001100010001011101110000110');
  testExample('31a655a37fee7', '11000110100110010101011010001101111111111011100111');
  testExample('355d7228a1666', '11010101011101011100100010100010100001011001100110');
  testExample('4d1aa8c3dd4e', '10011010001101010101000110000111101110101001110');
  testExample('23507325e8fb7', '10001101010000011100110010010111101000111110110111');
  testExample('1339ad97e9f1f', '1001100111001101011011001011111101001111100011111');
  testExample('2ed31c1f21725', '10111011010011000111000001111100100001011100100101');
  testExample('234724860cda6', '10001101000111001001001000011000001100110110100110');
  testExample('2852c28e895fc', '10100001010010110000101000111010001001010111111100');
  testExample('3250eb2b3d0cb', '11001001010000111010110010101100111101000011001011');
  testExample('b05f776d5ba7', '101100000101111101110111011011010101101110100111');
  testExample('10f11463af513', '1000011110001000101000110001110101111010100010011');
  testExample('19afe44a9201b', '1100110101111111001000100101010010010000000011011');
  testExample('ee865056121c', '111011101000011001010000010101100001001000011100');
  testExample('22183204a69c6', '10001000011000001100100000010010100110100111000110');
  testExample('64c823f785da', '11001001100100000100011111101111000010111011010');
  testExample('1f130bc14080d', '1111100010011000010111100000101000000100000001101');
  testExample('32199ef8118b5', '11001000011001100111101111100000010001100010110101');
  testExample('a18a3ad10265', '101000011000101000111010110100010000001001100101');
  testExample('1661006a6fd63', '1011001100001000000000110101001101111110101100011');
  testExample('2ee7b90666544', '10111011100111101110010000011001100110010101000100');
  testExample('2b51424678361', '10101101010001010000100100011001111000001101100001');
  testExample('30098d0ba96a9', '11000000001001100011010000101110101001011010101001');
  testExample('34be3c15fe006', '11010010111110001111000001010111111110000000000110');
  testExample('30ae59d963a42', '11000010101110010110011101100101100011101001000010');
});
