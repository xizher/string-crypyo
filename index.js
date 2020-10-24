const CryptoJS = require('./crypto-js.min.js')

// 474965071E8DBE5B96F7BC159F1B20E728A3D4309625F83CF16D482173780301
const STRING_CRYPTO_IV = ''
// 474965071E8DBE5B96F7BC159F1B20E7D88F11257FCA2FE5F92BCF9F20EEEBE78676E55236777A02362A57562F28557B
const STRING_CRYPTO_KEY = ''

class StringCrypto {

  static encrypto (val) {
    const key = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_KEY)
    const iv = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_IV)
    let encrypted = ''
    const newVal = CryptoJS.enc.Utf8.parse(val)
    encrypted = CryptoJS.AES.encrypt(newVal, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    })
    return encrypted.ciphertext.toString()
  }

  static decrypto (val) {
    const key = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_KEY);
    const iv = CryptoJS.enc.Utf8.parse(STRING_CRYPTO_IV);
    const encryptedHexStr = CryptoJS.enc.Hex.parse(val);
    const newVal = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(newVal, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }

}

