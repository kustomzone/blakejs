BLAKE.js
====

Pure Javascript implementation of the BLAKE2b and BLAKE2s hash functions.

```js
var blake = require('blake')
console.log(blake.blake2bHex('hello world'))
// prints ba80a53f981c4d0d6a2797b69f12f6e94c212f14685ac4b74b12bb6fdbffa2d17d87c5392aab792dc252d5de4533cc9518d38aa8dbf1925ab92386edd4009923

console.log(blake.blake2sHex('abc'))
// prints 508c5e8c327c14e2e1a72ba34eeb452f37458b209ed63a294d999b4c86675982
```

API
---
Exports two functions:

```js
// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a Uint8Array or ASCII string
// - key - optional key, either a 32 or 64-byte Uint8Array
// - outlen - optional output length in bytes, default 64
function blake2b(input, key, outlen) {
    [...]
}

// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a Uint8Array or ASCII string
// - outlen - optional output length in bytes, default 64
function blake2bHex(input, outlen) {
    [...]
}
```

Limitations
---
* Can only handle up to 2**53 bytes of input

Testing
---
* Examples from the RFC
* A longer set of test vectors generated by https://github.com/jedisct1/crypto-test-vectors/tree/master/crypto/hash/blake2/blake2b/nosalt-nopersonalization/generators/libsodium

Performance
---
```
BLAKE2b: 15.2 MB / second on a 2.2GHz i7-4770HQ
BLAKE2s: 20 MB / second

¯\_(ツ)_/¯
```

If you're using BLAKE2b in server side code, you probably want the [native wrapper](https://www.npmjs.com/package/blake2) which should be able to do several hundred MB / second on the same processor.

If you're using BLAKE2b in a web app, 15 MB/sec is probably fine.

Javascript doesn't have 64-bit integers, and BLAKE2b is a 64-bit integer algorithm. Writing it with`Uint32Array` is not that fast.

If we want better machine code at the expense of gross looking JS code, we could use asm.js


License
---
Creative Commons CC0. Ported from the reference C implementation in
[RFC 7693](https://tools.ietf.org/html/rfc7693).
