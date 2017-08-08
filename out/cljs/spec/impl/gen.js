// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__15704__auto__,writer__15705__auto__,opt__15706__auto__){
return cljs.core._write.call(null,writer__15705__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18277 = arguments.length;
var i__16207__auto___18278 = (0);
while(true){
if((i__16207__auto___18278 < len__16206__auto___18277)){
args__16213__auto__.push((arguments[i__16207__auto___18278]));

var G__18279 = (i__16207__auto___18278 + (1));
i__16207__auto___18278 = G__18279;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq18276){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18276));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18281 = arguments.length;
var i__16207__auto___18282 = (0);
while(true){
if((i__16207__auto___18282 < len__16206__auto___18281)){
args__16213__auto__.push((arguments[i__16207__auto___18282]));

var G__18283 = (i__16207__auto___18282 + (1));
i__16207__auto___18282 = G__18283;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq18280){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18280));
});

var g_QMARK__18284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_18285 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__18284){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__18284))
,null));
var mkg_18286 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__18284,g_18285){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__18284,g_18285))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__18284,g_18285,mkg_18286){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__18284).call(null,x);
});})(g_QMARK__18284,g_18285,mkg_18286))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__18284,g_18285,mkg_18286){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_18286).call(null,gfn);
});})(g_QMARK__18284,g_18285,mkg_18286))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__18284,g_18285,mkg_18286){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_18285).call(null,generator);
});})(g_QMARK__18284,g_18285,mkg_18286))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__16282__auto___18305 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__16282__auto___18305){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18306 = arguments.length;
var i__16207__auto___18307 = (0);
while(true){
if((i__16207__auto___18307 < len__16206__auto___18306)){
args__16213__auto__.push((arguments[i__16207__auto___18307]));

var G__18308 = (i__16207__auto___18307 + (1));
i__16207__auto___18307 = G__18308;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18305))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18305),args);
});})(g__16282__auto___18305))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__16282__auto___18305){
return (function (seq18287){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18287));
});})(g__16282__auto___18305))
;


var g__16282__auto___18309 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__16282__auto___18309){
return (function cljs$spec$impl$gen$list(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18310 = arguments.length;
var i__16207__auto___18311 = (0);
while(true){
if((i__16207__auto___18311 < len__16206__auto___18310)){
args__16213__auto__.push((arguments[i__16207__auto___18311]));

var G__18312 = (i__16207__auto___18311 + (1));
i__16207__auto___18311 = G__18312;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18309))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18309),args);
});})(g__16282__auto___18309))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__16282__auto___18309){
return (function (seq18288){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18288));
});})(g__16282__auto___18309))
;


var g__16282__auto___18313 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__16282__auto___18313){
return (function cljs$spec$impl$gen$map(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18314 = arguments.length;
var i__16207__auto___18315 = (0);
while(true){
if((i__16207__auto___18315 < len__16206__auto___18314)){
args__16213__auto__.push((arguments[i__16207__auto___18315]));

var G__18316 = (i__16207__auto___18315 + (1));
i__16207__auto___18315 = G__18316;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18313))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18313),args);
});})(g__16282__auto___18313))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__16282__auto___18313){
return (function (seq18289){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18289));
});})(g__16282__auto___18313))
;


var g__16282__auto___18317 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__16282__auto___18317){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18318 = arguments.length;
var i__16207__auto___18319 = (0);
while(true){
if((i__16207__auto___18319 < len__16206__auto___18318)){
args__16213__auto__.push((arguments[i__16207__auto___18319]));

var G__18320 = (i__16207__auto___18319 + (1));
i__16207__auto___18319 = G__18320;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18317))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18317),args);
});})(g__16282__auto___18317))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__16282__auto___18317){
return (function (seq18290){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18290));
});})(g__16282__auto___18317))
;


var g__16282__auto___18321 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__16282__auto___18321){
return (function cljs$spec$impl$gen$set(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18322 = arguments.length;
var i__16207__auto___18323 = (0);
while(true){
if((i__16207__auto___18323 < len__16206__auto___18322)){
args__16213__auto__.push((arguments[i__16207__auto___18323]));

var G__18324 = (i__16207__auto___18323 + (1));
i__16207__auto___18323 = G__18324;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18321))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18321),args);
});})(g__16282__auto___18321))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__16282__auto___18321){
return (function (seq18291){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18291));
});})(g__16282__auto___18321))
;


var g__16282__auto___18325 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__16282__auto___18325){
return (function cljs$spec$impl$gen$vector(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18326 = arguments.length;
var i__16207__auto___18327 = (0);
while(true){
if((i__16207__auto___18327 < len__16206__auto___18326)){
args__16213__auto__.push((arguments[i__16207__auto___18327]));

var G__18328 = (i__16207__auto___18327 + (1));
i__16207__auto___18327 = G__18328;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18325))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18325),args);
});})(g__16282__auto___18325))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__16282__auto___18325){
return (function (seq18292){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18292));
});})(g__16282__auto___18325))
;


var g__16282__auto___18329 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__16282__auto___18329){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18330 = arguments.length;
var i__16207__auto___18331 = (0);
while(true){
if((i__16207__auto___18331 < len__16206__auto___18330)){
args__16213__auto__.push((arguments[i__16207__auto___18331]));

var G__18332 = (i__16207__auto___18331 + (1));
i__16207__auto___18331 = G__18332;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18329))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18329),args);
});})(g__16282__auto___18329))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__16282__auto___18329){
return (function (seq18293){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18293));
});})(g__16282__auto___18329))
;


var g__16282__auto___18333 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__16282__auto___18333){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18334 = arguments.length;
var i__16207__auto___18335 = (0);
while(true){
if((i__16207__auto___18335 < len__16206__auto___18334)){
args__16213__auto__.push((arguments[i__16207__auto___18335]));

var G__18336 = (i__16207__auto___18335 + (1));
i__16207__auto___18335 = G__18336;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18333))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18333),args);
});})(g__16282__auto___18333))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__16282__auto___18333){
return (function (seq18294){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18294));
});})(g__16282__auto___18333))
;


var g__16282__auto___18337 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__16282__auto___18337){
return (function cljs$spec$impl$gen$elements(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18338 = arguments.length;
var i__16207__auto___18339 = (0);
while(true){
if((i__16207__auto___18339 < len__16206__auto___18338)){
args__16213__auto__.push((arguments[i__16207__auto___18339]));

var G__18340 = (i__16207__auto___18339 + (1));
i__16207__auto___18339 = G__18340;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18337))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18337),args);
});})(g__16282__auto___18337))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__16282__auto___18337){
return (function (seq18295){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18295));
});})(g__16282__auto___18337))
;


var g__16282__auto___18341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__16282__auto___18341){
return (function cljs$spec$impl$gen$bind(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18342 = arguments.length;
var i__16207__auto___18343 = (0);
while(true){
if((i__16207__auto___18343 < len__16206__auto___18342)){
args__16213__auto__.push((arguments[i__16207__auto___18343]));

var G__18344 = (i__16207__auto___18343 + (1));
i__16207__auto___18343 = G__18344;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18341))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18341),args);
});})(g__16282__auto___18341))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__16282__auto___18341){
return (function (seq18296){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18296));
});})(g__16282__auto___18341))
;


var g__16282__auto___18345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__16282__auto___18345){
return (function cljs$spec$impl$gen$choose(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18346 = arguments.length;
var i__16207__auto___18347 = (0);
while(true){
if((i__16207__auto___18347 < len__16206__auto___18346)){
args__16213__auto__.push((arguments[i__16207__auto___18347]));

var G__18348 = (i__16207__auto___18347 + (1));
i__16207__auto___18347 = G__18348;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18345))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18345),args);
});})(g__16282__auto___18345))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__16282__auto___18345){
return (function (seq18297){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18297));
});})(g__16282__auto___18345))
;


var g__16282__auto___18349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__16282__auto___18349){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18350 = arguments.length;
var i__16207__auto___18351 = (0);
while(true){
if((i__16207__auto___18351 < len__16206__auto___18350)){
args__16213__auto__.push((arguments[i__16207__auto___18351]));

var G__18352 = (i__16207__auto___18351 + (1));
i__16207__auto___18351 = G__18352;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18349))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18349),args);
});})(g__16282__auto___18349))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__16282__auto___18349){
return (function (seq18298){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18298));
});})(g__16282__auto___18349))
;


var g__16282__auto___18353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__16282__auto___18353){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18354 = arguments.length;
var i__16207__auto___18355 = (0);
while(true){
if((i__16207__auto___18355 < len__16206__auto___18354)){
args__16213__auto__.push((arguments[i__16207__auto___18355]));

var G__18356 = (i__16207__auto___18355 + (1));
i__16207__auto___18355 = G__18356;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18353))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18353),args);
});})(g__16282__auto___18353))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__16282__auto___18353){
return (function (seq18299){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18299));
});})(g__16282__auto___18353))
;


var g__16282__auto___18357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__16282__auto___18357){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18358 = arguments.length;
var i__16207__auto___18359 = (0);
while(true){
if((i__16207__auto___18359 < len__16206__auto___18358)){
args__16213__auto__.push((arguments[i__16207__auto___18359]));

var G__18360 = (i__16207__auto___18359 + (1));
i__16207__auto___18359 = G__18360;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18357))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18357),args);
});})(g__16282__auto___18357))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__16282__auto___18357){
return (function (seq18300){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18300));
});})(g__16282__auto___18357))
;


var g__16282__auto___18361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__16282__auto___18361){
return (function cljs$spec$impl$gen$sample(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18362 = arguments.length;
var i__16207__auto___18363 = (0);
while(true){
if((i__16207__auto___18363 < len__16206__auto___18362)){
args__16213__auto__.push((arguments[i__16207__auto___18363]));

var G__18364 = (i__16207__auto___18363 + (1));
i__16207__auto___18363 = G__18364;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18361))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18361),args);
});})(g__16282__auto___18361))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__16282__auto___18361){
return (function (seq18301){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18301));
});})(g__16282__auto___18361))
;


var g__16282__auto___18365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__16282__auto___18365){
return (function cljs$spec$impl$gen$return(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18366 = arguments.length;
var i__16207__auto___18367 = (0);
while(true){
if((i__16207__auto___18367 < len__16206__auto___18366)){
args__16213__auto__.push((arguments[i__16207__auto___18367]));

var G__18368 = (i__16207__auto___18367 + (1));
i__16207__auto___18367 = G__18368;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18365))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18365),args);
});})(g__16282__auto___18365))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__16282__auto___18365){
return (function (seq18302){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18302));
});})(g__16282__auto___18365))
;


var g__16282__auto___18369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__16282__auto___18369){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18370 = arguments.length;
var i__16207__auto___18371 = (0);
while(true){
if((i__16207__auto___18371 < len__16206__auto___18370)){
args__16213__auto__.push((arguments[i__16207__auto___18371]));

var G__18372 = (i__16207__auto___18371 + (1));
i__16207__auto___18371 = G__18372;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18369))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18369){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18369),args);
});})(g__16282__auto___18369))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__16282__auto___18369){
return (function (seq18303){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18303));
});})(g__16282__auto___18369))
;


var g__16282__auto___18373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__16282__auto___18373){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18374 = arguments.length;
var i__16207__auto___18375 = (0);
while(true){
if((i__16207__auto___18375 < len__16206__auto___18374)){
args__16213__auto__.push((arguments[i__16207__auto___18375]));

var G__18376 = (i__16207__auto___18375 + (1));
i__16207__auto___18375 = G__18376;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16282__auto___18373))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16282__auto___18373){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__16282__auto___18373),args);
});})(g__16282__auto___18373))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__16282__auto___18373){
return (function (seq18304){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18304));
});})(g__16282__auto___18373))
;

var g__16295__auto___18398 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__16295__auto___18398){
return (function cljs$spec$impl$gen$any(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18399 = arguments.length;
var i__16207__auto___18400 = (0);
while(true){
if((i__16207__auto___18400 < len__16206__auto___18399)){
args__16213__auto__.push((arguments[i__16207__auto___18400]));

var G__18401 = (i__16207__auto___18400 + (1));
i__16207__auto___18400 = G__18401;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18398))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18398){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18398);
});})(g__16295__auto___18398))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__16295__auto___18398){
return (function (seq18377){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18377));
});})(g__16295__auto___18398))
;


var g__16295__auto___18402 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__16295__auto___18402){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18403 = arguments.length;
var i__16207__auto___18404 = (0);
while(true){
if((i__16207__auto___18404 < len__16206__auto___18403)){
args__16213__auto__.push((arguments[i__16207__auto___18404]));

var G__18405 = (i__16207__auto___18404 + (1));
i__16207__auto___18404 = G__18405;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18402))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18402){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18402);
});})(g__16295__auto___18402))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__16295__auto___18402){
return (function (seq18378){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18378));
});})(g__16295__auto___18402))
;


var g__16295__auto___18406 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__16295__auto___18406){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18407 = arguments.length;
var i__16207__auto___18408 = (0);
while(true){
if((i__16207__auto___18408 < len__16206__auto___18407)){
args__16213__auto__.push((arguments[i__16207__auto___18408]));

var G__18409 = (i__16207__auto___18408 + (1));
i__16207__auto___18408 = G__18409;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18406))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18406){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18406);
});})(g__16295__auto___18406))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__16295__auto___18406){
return (function (seq18379){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18379));
});})(g__16295__auto___18406))
;


var g__16295__auto___18410 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__16295__auto___18410){
return (function cljs$spec$impl$gen$char(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18411 = arguments.length;
var i__16207__auto___18412 = (0);
while(true){
if((i__16207__auto___18412 < len__16206__auto___18411)){
args__16213__auto__.push((arguments[i__16207__auto___18412]));

var G__18413 = (i__16207__auto___18412 + (1));
i__16207__auto___18412 = G__18413;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18410))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18410){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18410);
});})(g__16295__auto___18410))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__16295__auto___18410){
return (function (seq18380){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18380));
});})(g__16295__auto___18410))
;


var g__16295__auto___18414 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__16295__auto___18414){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18415 = arguments.length;
var i__16207__auto___18416 = (0);
while(true){
if((i__16207__auto___18416 < len__16206__auto___18415)){
args__16213__auto__.push((arguments[i__16207__auto___18416]));

var G__18417 = (i__16207__auto___18416 + (1));
i__16207__auto___18416 = G__18417;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18414))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18414){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18414);
});})(g__16295__auto___18414))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__16295__auto___18414){
return (function (seq18381){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18381));
});})(g__16295__auto___18414))
;


var g__16295__auto___18418 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__16295__auto___18418){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18419 = arguments.length;
var i__16207__auto___18420 = (0);
while(true){
if((i__16207__auto___18420 < len__16206__auto___18419)){
args__16213__auto__.push((arguments[i__16207__auto___18420]));

var G__18421 = (i__16207__auto___18420 + (1));
i__16207__auto___18420 = G__18421;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18418))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18418){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18418);
});})(g__16295__auto___18418))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__16295__auto___18418){
return (function (seq18382){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18382));
});})(g__16295__auto___18418))
;


var g__16295__auto___18422 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__16295__auto___18422){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18423 = arguments.length;
var i__16207__auto___18424 = (0);
while(true){
if((i__16207__auto___18424 < len__16206__auto___18423)){
args__16213__auto__.push((arguments[i__16207__auto___18424]));

var G__18425 = (i__16207__auto___18424 + (1));
i__16207__auto___18424 = G__18425;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18422))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18422){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18422);
});})(g__16295__auto___18422))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__16295__auto___18422){
return (function (seq18383){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18383));
});})(g__16295__auto___18422))
;


var g__16295__auto___18426 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__16295__auto___18426){
return (function cljs$spec$impl$gen$double(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18427 = arguments.length;
var i__16207__auto___18428 = (0);
while(true){
if((i__16207__auto___18428 < len__16206__auto___18427)){
args__16213__auto__.push((arguments[i__16207__auto___18428]));

var G__18429 = (i__16207__auto___18428 + (1));
i__16207__auto___18428 = G__18429;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18426))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18426){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18426);
});})(g__16295__auto___18426))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__16295__auto___18426){
return (function (seq18384){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18384));
});})(g__16295__auto___18426))
;


var g__16295__auto___18430 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__16295__auto___18430){
return (function cljs$spec$impl$gen$int(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18431 = arguments.length;
var i__16207__auto___18432 = (0);
while(true){
if((i__16207__auto___18432 < len__16206__auto___18431)){
args__16213__auto__.push((arguments[i__16207__auto___18432]));

var G__18433 = (i__16207__auto___18432 + (1));
i__16207__auto___18432 = G__18433;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18430))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18430){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18430);
});})(g__16295__auto___18430))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__16295__auto___18430){
return (function (seq18385){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18385));
});})(g__16295__auto___18430))
;


var g__16295__auto___18434 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__16295__auto___18434){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18435 = arguments.length;
var i__16207__auto___18436 = (0);
while(true){
if((i__16207__auto___18436 < len__16206__auto___18435)){
args__16213__auto__.push((arguments[i__16207__auto___18436]));

var G__18437 = (i__16207__auto___18436 + (1));
i__16207__auto___18436 = G__18437;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18434))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18434){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18434);
});})(g__16295__auto___18434))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__16295__auto___18434){
return (function (seq18386){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18386));
});})(g__16295__auto___18434))
;


var g__16295__auto___18438 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__16295__auto___18438){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18439 = arguments.length;
var i__16207__auto___18440 = (0);
while(true){
if((i__16207__auto___18440 < len__16206__auto___18439)){
args__16213__auto__.push((arguments[i__16207__auto___18440]));

var G__18441 = (i__16207__auto___18440 + (1));
i__16207__auto___18440 = G__18441;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18438))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18438){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18438);
});})(g__16295__auto___18438))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__16295__auto___18438){
return (function (seq18387){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18387));
});})(g__16295__auto___18438))
;


var g__16295__auto___18442 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__16295__auto___18442){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18443 = arguments.length;
var i__16207__auto___18444 = (0);
while(true){
if((i__16207__auto___18444 < len__16206__auto___18443)){
args__16213__auto__.push((arguments[i__16207__auto___18444]));

var G__18445 = (i__16207__auto___18444 + (1));
i__16207__auto___18444 = G__18445;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18442))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18442){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18442);
});})(g__16295__auto___18442))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__16295__auto___18442){
return (function (seq18388){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18388));
});})(g__16295__auto___18442))
;


var g__16295__auto___18446 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__16295__auto___18446){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18447 = arguments.length;
var i__16207__auto___18448 = (0);
while(true){
if((i__16207__auto___18448 < len__16206__auto___18447)){
args__16213__auto__.push((arguments[i__16207__auto___18448]));

var G__18449 = (i__16207__auto___18448 + (1));
i__16207__auto___18448 = G__18449;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18446))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18446){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18446);
});})(g__16295__auto___18446))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__16295__auto___18446){
return (function (seq18389){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18389));
});})(g__16295__auto___18446))
;


var g__16295__auto___18450 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__16295__auto___18450){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18451 = arguments.length;
var i__16207__auto___18452 = (0);
while(true){
if((i__16207__auto___18452 < len__16206__auto___18451)){
args__16213__auto__.push((arguments[i__16207__auto___18452]));

var G__18453 = (i__16207__auto___18452 + (1));
i__16207__auto___18452 = G__18453;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18450))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18450){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18450);
});})(g__16295__auto___18450))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__16295__auto___18450){
return (function (seq18390){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18390));
});})(g__16295__auto___18450))
;


var g__16295__auto___18454 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__16295__auto___18454){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18455 = arguments.length;
var i__16207__auto___18456 = (0);
while(true){
if((i__16207__auto___18456 < len__16206__auto___18455)){
args__16213__auto__.push((arguments[i__16207__auto___18456]));

var G__18457 = (i__16207__auto___18456 + (1));
i__16207__auto___18456 = G__18457;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18454))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18454){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18454);
});})(g__16295__auto___18454))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__16295__auto___18454){
return (function (seq18391){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18391));
});})(g__16295__auto___18454))
;


var g__16295__auto___18458 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__16295__auto___18458){
return (function cljs$spec$impl$gen$string(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18459 = arguments.length;
var i__16207__auto___18460 = (0);
while(true){
if((i__16207__auto___18460 < len__16206__auto___18459)){
args__16213__auto__.push((arguments[i__16207__auto___18460]));

var G__18461 = (i__16207__auto___18460 + (1));
i__16207__auto___18460 = G__18461;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18458))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18458){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18458);
});})(g__16295__auto___18458))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__16295__auto___18458){
return (function (seq18392){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18392));
});})(g__16295__auto___18458))
;


var g__16295__auto___18462 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__16295__auto___18462){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18463 = arguments.length;
var i__16207__auto___18464 = (0);
while(true){
if((i__16207__auto___18464 < len__16206__auto___18463)){
args__16213__auto__.push((arguments[i__16207__auto___18464]));

var G__18465 = (i__16207__auto___18464 + (1));
i__16207__auto___18464 = G__18465;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18462))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18462){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18462);
});})(g__16295__auto___18462))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__16295__auto___18462){
return (function (seq18393){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18393));
});})(g__16295__auto___18462))
;


var g__16295__auto___18466 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__16295__auto___18466){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18467 = arguments.length;
var i__16207__auto___18468 = (0);
while(true){
if((i__16207__auto___18468 < len__16206__auto___18467)){
args__16213__auto__.push((arguments[i__16207__auto___18468]));

var G__18469 = (i__16207__auto___18468 + (1));
i__16207__auto___18468 = G__18469;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18466))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18466){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18466);
});})(g__16295__auto___18466))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__16295__auto___18466){
return (function (seq18394){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18394));
});})(g__16295__auto___18466))
;


var g__16295__auto___18470 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__16295__auto___18470){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18471 = arguments.length;
var i__16207__auto___18472 = (0);
while(true){
if((i__16207__auto___18472 < len__16206__auto___18471)){
args__16213__auto__.push((arguments[i__16207__auto___18472]));

var G__18473 = (i__16207__auto___18472 + (1));
i__16207__auto___18472 = G__18473;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18470))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18470){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18470);
});})(g__16295__auto___18470))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__16295__auto___18470){
return (function (seq18395){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18395));
});})(g__16295__auto___18470))
;


var g__16295__auto___18474 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__16295__auto___18474){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18475 = arguments.length;
var i__16207__auto___18476 = (0);
while(true){
if((i__16207__auto___18476 < len__16206__auto___18475)){
args__16213__auto__.push((arguments[i__16207__auto___18476]));

var G__18477 = (i__16207__auto___18476 + (1));
i__16207__auto___18476 = G__18477;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18474))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18474){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18474);
});})(g__16295__auto___18474))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__16295__auto___18474){
return (function (seq18396){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18396));
});})(g__16295__auto___18474))
;


var g__16295__auto___18478 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__16295__auto___18478){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18479 = arguments.length;
var i__16207__auto___18480 = (0);
while(true){
if((i__16207__auto___18480 < len__16206__auto___18479)){
args__16213__auto__.push((arguments[i__16207__auto___18480]));

var G__18481 = (i__16207__auto___18480 + (1));
i__16207__auto___18480 = G__18481;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});})(g__16295__auto___18478))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__16295__auto___18478){
return (function (args){
return cljs.core.deref.call(null,g__16295__auto___18478);
});})(g__16295__auto___18478))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__16295__auto___18478){
return (function (seq18397){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18397));
});})(g__16295__auto___18478))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__16213__auto__ = [];
var len__16206__auto___18484 = arguments.length;
var i__16207__auto___18485 = (0);
while(true){
if((i__16207__auto___18485 < len__16206__auto___18484)){
args__16213__auto__.push((arguments[i__16207__auto___18485]));

var G__18486 = (i__16207__auto___18485 + (1));
i__16207__auto___18485 = G__18486;
continue;
} else {
}
break;
}

var argseq__16214__auto__ = ((((0) < args__16213__auto__.length))?(new cljs.core.IndexedSeq(args__16213__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__16214__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__18482_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__18482_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq18483){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18483));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__18487_SHARP_){
return (new Date(p1__18487_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map