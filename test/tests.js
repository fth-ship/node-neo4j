/*** Generated by streamline --lines-mark 0.1.11 - DO NOT EDIT ***/

var __global = typeof global !== 'undefined' ? global : window;
function __cb(_, fn) { var ctx = __global.__context; return function(err, result) { __global.__context = ctx; if (err) return _(err); return fn(null, result); } }
function __propagate(_, err) { try { _(err); } catch (ex) { __trap(ex); } }
function __trap(err) { if (err) { if (__global.__context && __global.__context.errorHandler) __global.__context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + err.message + "\n" + err.stack); } }
            (function(_) {
              var __ = (_ = (_ || __trap));
/*   109 */   function getNodeId(url) {
/*   110 */     var NODE_REGEX = /node\/(\d+)/g;
/*   111 */     var match = NODE_REGEX.exec(url);
/*   112 */     return (match ? parseInt(match[1]) : null);
              };
/*     5 */   var assert = require("assert");
/*     6 */   var neo4j = require("../lib/neo4j.js");
/*     9 */   var DB_HOST = "localhost";
/*    10 */   var DB_PORT = 7474;
/*    11 */   var db = new neo4j.Client(DB_HOST, DB_PORT, true);
/*    14 */   var data = {
/*    15 */     name: "Daniel Gasienica",
/*    16 */     magicNumber: 42,
/*    17 */     lovesIceCream: true
              };
/*    19 */   var newData = {
/*    20 */     name: "Daniel Gasienica",
/*    21 */     father: {
/*    22 */       firstName: "Jan",
/*    23 */       lastName: "Gasienica"
                },
/*    25 */     tired: false
              };
/*    32 */   console.log("Running tests...");
/*    40 */   return db.createNode(data, __cb(_, function(__0, url1) {
/*    41 */     var id = getNodeId(url1);
/*    43 */     return db.getNode(id, __cb(_, function(__0, res2) {
/*    44 */       assert.deepEqual(res2, data, "Retrieved data does not match original data.");
/*    46 */       return db.updateNode(id, newData, __cb(_, function(__0, res3) {
/*    47 */         return db.getNode(id, __cb(_, function(__0, res4) {
/*    48 */           assert.deepEqual(res4, newData, "Retrieved data does not match updated data.");
/*    50 */           return db.deleteNode(id, __cb(_, function() {
                        return function(__) {
                          return function(_) {
                            try {
/*    53 */                   return db.getNode(id, __cb(_, function() {
/*    54 */                     assert.fail("Found node even though it was deleted.");
                                return __();
                              }));
                            } catch (e) {
                              return __propagate(_, e);
                            };
                          }(function(err, __result) {
                            try {
                              if (err) {
/*    56 */                     assert.strictEqual(err.statusCode, 404, "Nonexistent node returned non-404 error.");
                              }
                               else return _(null, __result)
                            ;
                            } catch (e) {
                              return __propagate(_, e);
                            };
                            return __();
                          });
                        }(function() {
                          try {
/*    62 */                 function transform(o) {
/*    63 */                   return neo4j.deserialize(neo4j.serialize(o));
                            };
/*    66 */                 assert.deepEqual(transform(data), data);
/*    67 */                 assert.deepEqual(transform(newData), newData);
/*    69 */                 var o;
/*    72 */                 o = 1;
/*    73 */                 assert.strictEqual(transform(o), o);
/*    76 */                 o = "gasi";
/*    77 */                 assert.strictEqual(transform(o), o);
/*    80 */                 o = true;
/*    81 */                 assert.strictEqual(transform(o), o);
/*    84 */                 o = [true,false,true,];
/*    85 */                 assert.throws(transform(o));
/*    88 */                 o = {
/*    88 */                   "this.that": "shouldn't work"
                            };
/*    89 */                 assert.notDeepEqual(transform(o), o);
/*   100 */                 console.log("Finished running tests.");
/*   105 */                 function print(error, result) {
/*   106 */                   console.log(((error || result) || ""));
                            };
                            return __();
                          } catch (e) {
                            return __propagate(_, e);
                          };
                        });
                      }));
                    }));
                  }));
                }));
              }));
            })();
