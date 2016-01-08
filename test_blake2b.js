
function testROTR64() {
  assertEquals('0x0807060504030201', HEX64(ROTR64([0x4030201, 0x8070605], 0)))
  assertEquals('0x4030201080706050', HEX64(ROTR64([0x4030201, 0x8070605], 28)))
  assertEquals('0x1080706050403020', HEX64(ROTR64([0x4030201, 0x8070605], 4)))
  assertEquals('0x0403020108070605', HEX64(ROTR64([0x4030201, 0x8070605], 32)))
  assertEquals('0x8070605040302010', HEX64(ROTR64([0x4030201, 0x8070605], 60)))
}

function testADD64() {
  var ret = ADD64([0xffffffff, 1], [1, 0])
  assertEquals(0, ret[0])
  assertEquals(2, ret[1])
}

function testBLAKE2B() {
  assertEquals('todo', blake2bStringToHex('hello'))
}

function assertEquals(expected, actual) {
  if (expected !== actual) {
    throw new Error('Expected ' + expected + ' found ' + actual)
  }
}

function main() {
  var numPassed = 0, numFailed = 0
  for (var name in this) {
    if (typeof(this[name]) !== 'function') {
      continue
    }
    if (!this[name].name.startsWith('test')) {
      continue
    }
    console.log('\nTESTING ' + this[name].name)

    try {
      this[name]()
      numPassed++
    } catch (e) {
      console.error(e)
      numFailed++
    }
  }
  if (numFailed === 0) {
    console.log('\n' + numPassed + ' tests run, all passed!')
    process.exit(0)
  } else {
    console.log('\n' + numFailed + '/' + (numPassed + numFailed) + ' tests failed')
    process.exit(1)
  }
}

main()
