const { add } = require("../script");
const assert = require("assert");

try {
  assert.strictEqual(add(2, 3), 5);
  console.log("Test passed ✅");
} catch (err) {
  console.error("Test failed ❌", err);
  process.exit(1);
}
