//// [tests/cases/compiler/genericFunctionHasFreshTypeArgs.ts] ////

//// [genericFunctionHasFreshTypeArgs.ts]
function f(p: <T>(x: T) => void) { };
f(x => f(y => x = y));

//// [genericFunctionHasFreshTypeArgs.js]
function f(p) { }
;
f(x => f(y => x = y));
