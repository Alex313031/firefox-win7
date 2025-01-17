// Copyright 2024 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Elbasan`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v16.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x0000B7,
    0x000305
  ],
  ranges: [
    [0x010500, 0x010527]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Elbasan}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Elbasan}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Elba}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Elba}"
);
testPropertyEscapes(
  /^\p{scx=Elbasan}+$/u,
  matchSymbols,
  "\\p{scx=Elbasan}"
);
testPropertyEscapes(
  /^\p{scx=Elba}+$/u,
  matchSymbols,
  "\\p{scx=Elba}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0000B6],
    [0x0000B8, 0x000304],
    [0x000306, 0x00DBFF],
    [0x00E000, 0x0104FF],
    [0x010528, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Elbasan}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Elbasan}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Elba}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Elba}"
);
testPropertyEscapes(
  /^\P{scx=Elbasan}+$/u,
  nonMatchSymbols,
  "\\P{scx=Elbasan}"
);
testPropertyEscapes(
  /^\P{scx=Elba}+$/u,
  nonMatchSymbols,
  "\\P{scx=Elba}"
);

reportCompare(0, 0);
