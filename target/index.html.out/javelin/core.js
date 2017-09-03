// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('goog.object');





javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__5290__auto__ = pri_map.shift();
if(cljs.core.truth_(temp__5290__auto__)){
var next = temp__5290__auto__;
var old = next.prev;
var new$ = (function (){var temp__5288__auto__ = next.thunk;
if(cljs.core.truth_(temp__5288__auto__)){
var f = temp__5288__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old)){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);

var sinks_16118 = next.sinks;
var n__9673__auto___16119 = sinks_16118.length;
var i_16120 = (0);
while(true){
if((i_16120 < n__9673__auto___16119)){
var G__16115_16121 = pri_map;
var G__16116_16122 = (sinks_16118[i_16120]);
var G__16117_16123 = javelin.core.cmp_rank;
goog.array.binaryInsert(G__16115_16121,G__16116_16122,G__16117_16123);

var G__16124 = (i_16120 + (1));
i_16120 = G__16124;
continue;
} else {
}
break;
}
} else {
}

var G__16125 = pri_map;
pri_map = G__16125;
continue;
} else {
return null;
}
break;
}
});
/**
 * If x is a Cell dereferences x and returns the value, otherwise returns x.
 */
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return cljs.core.deref(x);
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cmp_rank = (function javelin$core$cmp_rank(a,b){
var a__$1 = a.rank;
var b__$1 = b.rank;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1)){
return (0);
} else {
return (a__$1 - b__$1);
}
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return goog.array.binaryInsert(javelin.core._STAR_tx_STAR_,c,javelin.core.cmp_rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e16126){if((e16126 instanceof Error)){
var _ = e16126;
return null;
} else {
throw e16126;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__16127 = c;
javelin.core.add_sync_BANG_(G__16127);

return G__16127;
} else {
var G__16128 = c;
javelin.core.propagate_STAR_([G__16128]);

return G__16128;
}
});
/**
 * Unlinks this Cell from the cell graph and resets all internal state. Watches
 *   are preserved when keep-watches? is true, otherwise they are all removed.
 */
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var G__16131 = arguments.length;
switch (G__16131) {
case 1:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,null);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,keep_watches_QMARK_){
var srcs = this$.sources;
this$.sources = [];

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;

this$.numwatches = (0);
}

var n__9673__auto__ = srcs.length;
var i = (0);
while(true){
if((i < n__9673__auto__)){
var temp__5290__auto___16136 = (function (){var G__16132 = (srcs[i]);
return (javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16132) : javelin.core.cell_QMARK_.call(null,G__16132));
})();
if(cljs.core.truth_(temp__5290__auto___16136)){
var c_16137 = temp__5290__auto___16136;
var G__16133_16138 = c_16137.sinks;
var G__16134_16139 = ((function (i,G__16133_16138,c_16137,temp__5290__auto___16136,n__9673__auto__,srcs){
return (function (p1__16129_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__16129_SHARP_,this$);
});})(i,G__16133_16138,c_16137,temp__5290__auto___16136,n__9673__auto__,srcs))
;
goog.array.removeIf(G__16133_16138,G__16134_16139);
} else {
}

var G__16140 = (i + (1));
i = G__16140;
continue;
} else {
return null;
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = 2;

javelin.core.set_formula_BANG__STAR_ = (function javelin$core$set_formula_BANG__STAR_(this$,f,sources,updatefn){
if(cljs.core.truth_(f)){
this$.constant = true;

this$.sources = (function (){var G__16141 = sources;
G__16141.push(f);

return G__16141;
})();

var n__9673__auto___16142 = this$.sources.length;
var i_16143 = (0);
while(true){
if((i_16143 < n__9673__auto___16142)){
var source_16144 = (this$.sources[i_16143]);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_16144) : javelin.core.cell_QMARK_.call(null,source_16144)))){
if(cljs.core.truth_((function (){var and__8618__auto__ = this$.constant;
if(cljs.core.truth_(and__8618__auto__)){
return cljs.core.not(source_16144.constant);
} else {
return and__8618__auto__;
}
})())){
this$.constant = false;
} else {
}

source_16144.sinks.push(this$);

if((source_16144.rank > this$.rank)){
var q_16145 = [source_16144];
while(true){
var temp__5290__auto___16146 = q_16145.shift();
if(cljs.core.truth_(temp__5290__auto___16146)){
var dep_16147 = temp__5290__auto___16146;
dep_16147.rank = javelin.core.next_rank();

var G__16148 = q_16145.concat(dep_16147.sinks);
q_16145 = G__16148;
continue;
} else {
}
break;
}
} else {
}
} else {
}

var G__16149 = (i_16143 + (1));
i_16143 = G__16149;
continue;
} else {
}
break;
}

this$.thunk = (function (){
var argv = this$.sources.slice();
var f__$1 = javelin.core.deref_STAR_(argv.pop());
var n__9673__auto___16150 = argv.length;
var i_16151 = (0);
while(true){
if((i_16151 < n__9673__auto___16150)){
(argv[i_16151] = javelin.core.deref_STAR_((argv[i_16151])));

var G__16152 = (i_16151 + (1));
i_16151 = G__16152;
continue;
} else {
}
break;
}

return this$.state = f__$1.apply(null,argv);
});

this$.update = updatefn;
} else {
}

return javelin.core.propagate_BANG_(this$);
});
/**
 * Given a Cell and optional formula function f and the cells f depends on,
 *   sources, updates the formula for this cell in place. If f and/or sources
 *   is not spcified they are set to nil.
 */
javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var G__16154 = arguments.length;
switch (G__16154) {
case 1:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,null,null,null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,f){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,[],null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,f,sources){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),null);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,f,sources,updatefn){
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$2(this$,true);

return javelin.core.set_formula_BANG__STAR_(this$,f,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(sources),updatefn);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = 4;


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.constant = constant;
this.numwatches = numwatches;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
});
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#object [javelin.core.Cell ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.state], 0)),"]"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update,self__.constant,self__.numwatches));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
var fexpr__16156_16173 = this$__$1.update;
(fexpr__16156_16173.cljs$core$IFn$_invoke$arity$1 ? fexpr__16156_16173.cljs$core$IFn$_invoke$arity$1(x) : fexpr__16156_16173.call(null,x));
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16157 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16157) : f.call(null,G__16157));
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16158 = this$__$1.state;
var G__16159 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__16158,G__16159) : f.call(null,G__16158,G__16159));
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,(function (){var G__16160 = this$__$1.state;
var G__16161 = a;
var G__16162 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__16160,G__16161,G__16162) : f.call(null,G__16160,G__16161,G__16162));
})());
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_(this$__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
if(((0) < this$__$1.numwatches)){
var seq__16163 = cljs.core.seq(self__.watches);
var chunk__16164 = null;
var count__16165 = (0);
var i__16166 = (0);
while(true){
if((i__16166 < count__16165)){
var vec__16167 = chunk__16164.cljs$core$IIndexed$_nth$arity$2(null,i__16166);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16167,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16174 = seq__16163;
var G__16175 = chunk__16164;
var G__16176 = count__16165;
var G__16177 = (i__16166 + (1));
seq__16163 = G__16174;
chunk__16164 = G__16175;
count__16165 = G__16176;
i__16166 = G__16177;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__16163);
if(temp__5290__auto__){
var seq__16163__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16163__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__16163__$1);
var G__16178 = cljs.core.chunk_rest(seq__16163__$1);
var G__16179 = c__9561__auto__;
var G__16180 = cljs.core.count(c__9561__auto__);
var G__16181 = (0);
seq__16163 = G__16178;
chunk__16164 = G__16179;
count__16165 = G__16180;
i__16166 = G__16181;
continue;
} else {
var vec__16170 = cljs.core.first(seq__16163__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16170,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16170,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__16182 = cljs.core.next(seq__16163__$1);
var G__16183 = null;
var G__16184 = (0);
var G__16185 = (0);
seq__16163 = G__16182;
chunk__16164 = G__16183;
count__16165 = G__16184;
i__16166 = G__16185;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
} else {
this$__$1.numwatches = (this$__$1.numwatches + (1));
}

return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(this$__$1.watches,k)){
this$__$1.numwatches = (this$__$1.numwatches - (1));

return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
} else {
return null;
}
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update,cljs.core.cst$sym$constant,cljs.core.cst$sym$numwatches], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__9301__auto__,writer__9302__auto__,opt__9303__auto__){
return cljs.core._write(writer__9302__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update,constant,numwatches));
});

/**
 * Returns c if c is a Cell, nil otherwise.
 */
javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){

if(cljs.core.truth_((function (){var and__8618__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8618__auto__)){
return c.thunk;
} else {
return and__8618__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){

if(cljs.core.truth_((function (){var and__8618__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8618__auto__)){
return c.update;
} else {
return and__8618__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){

if(cljs.core.truth_((function (){var and__8618__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8618__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__8618__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.constant_QMARK_ = (function javelin$core$constant_QMARK_(c){

if(cljs.core.truth_((function (){var and__8618__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__8618__auto__)){
return c.constant;
} else {
return and__8618__auto__;
}
})())){
return c;
} else {
return null;
}
});
/**
 * Converts c to an input cell in place, setting its contents to x. It's okay
 *   if c was already an input cell. Changes will be propagated to any cells that
 *   depend on c.
 */
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$1(c);
});
/**
 * Returns a function that returns a formula cell with f as its formula, and
 *   if updatefn is provided the returned cell is a lens.
 * 
 *   See also: the javelin.core/cell= macro.
 * 
 *    (def x (cell 100))
 *    (def y (cell 200))
 * 
 *    (def z1 (cell= (+ x y)))
 *    (def z2 ((formula +) x y))
 * 
 *   The formula cells z1 and z2 are equivalent.
 */
javelin.core.formula = (function javelin$core$formula(var_args){
var G__16187 = arguments.length;
switch (G__16187) {
case 1:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$1 = (function (f){
return javelin.core.formula.cljs$core$IFn$_invoke$arity$2(f,null);
});

javelin.core.formula.cljs$core$IFn$_invoke$arity$2 = (function (f,updatefn){
return (function (){
return javelin.core.set_formula_BANG__STAR_((function (){var G__16188 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__16188) : javelin.core.cell.call(null,G__16188));
})(),f,Array.prototype.slice.call(arguments),updatefn);
});
});

javelin.core.formula.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new lens whose value is the same as c's with update function f.
 *   This is equivalent to ((formula identity f) c).
 */
javelin.core.lens = (function javelin$core$lens(c,f){
var fexpr__16190 = javelin.core.formula.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,f);
return (fexpr__16190.cljs$core$IFn$_invoke$arity$1 ? fexpr__16190.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16190.call(null,c));
});
/**
 * Returns a new input cell containing value x. The :meta option can be used
 *   to create the cell with the given metadata map.
 */
javelin.core.cell = (function javelin$core$cell(var_args){
var G__16194 = arguments.length;
switch (G__16194) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__9930__auto__ = [];
var len__9907__auto___16199 = arguments.length;
var i__9908__auto___16200 = (0);
while(true){
if((i__9908__auto___16200 < len__9907__auto___16199)){
args_arr__9930__auto__.push((arguments[i__9908__auto___16200]));

var G__16201 = (i__9908__auto___16200 + (1));
i__9908__auto___16200 = G__16201;
continue;
} else {
}
break;
}

var argseq__9931__auto__ = (new cljs.core.IndexedSeq(args_arr__9930__auto__.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9931__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return (new javelin.core.Cell(null,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__16195){
var map__16196 = p__16195;
var map__16196__$1 = ((((!((map__16196 == null)))?((((map__16196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16196):map__16196);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16196__$1,cljs.core.cst$kw$meta);
return (new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,[],[],null,cljs.core.PersistentArrayMap.EMPTY,null,false,(0)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq16192){
var G__16193 = cljs.core.first(seq16192);
var seq16192__$1 = cljs.core.next(seq16192);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__16193,seq16192__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

/**
 * This function is deprecated, please use #'javelin.core/formula instead.
 */
javelin.core.lift = javelin.core.formula;
/**
 * Calls the thunk with no arguments within a transaction. Propagation of
 *   updates to formula cells is deferred until the transaction is complete.
 *   Input cells *will* update during the transaction. Transactions may be
 *   nested.
 * 
 *   See also: the javelin.core/dosync macro.
 */
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
var _STAR_tx_STAR_16202 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = [];

try{(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

var tx = javelin.core._STAR_tx_STAR_;
var _STAR_tx_STAR_16203 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16203;
}}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_16202;
}}
});
/**
 * Given a number of cells, returns a formula cell whose value is a seq of
 *   values from cells that changed in the last update. Note that multiple cells
 *   may update atomically, which is why the formula's value is a seq.
 * 
 *   Consider:
 * 
 *    (def a (cell {:x 1 :y 2}))
 *    (def x (cell= (:x a)))
 *    (def y (cell= (:y a)))
 *    (def z (alts! x y))
 * 
 *   then,
 * 
 *    (deref z) ;=> (1 2)
 * 
 *    (swap! a assoc :x 42)
 *    (deref z) ;=> (42)
 * 
 *    (reset! a {:x 10 :y 20})
 *    (deref z) ;=> (10 20)
 *   
 */
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__9914__auto__ = [];
var len__9907__auto___16210 = arguments.length;
var i__9908__auto___16211 = (0);
while(true){
if((i__9908__auto___16211 < len__9907__auto___16210)){
args__9914__auto__.push((arguments[i__9908__auto___16211]));

var G__16212 = (i__9908__auto___16211 + (1));
i__9908__auto___16211 = G__16212;
continue;
} else {
}
break;
}

var argseq__9915__auto__ = ((((0) < args__9914__auto__.length))?(new cljs.core.IndexedSeq(args__9914__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__9915__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none));
var tag_neq = ((function (olds){
return (function (p1__16204_SHARP_,p2__16205_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__16204_SHARP_,p2__16205_SHARP_),p2__16205_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__16207_SHARP_,p2__16206_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__16207_SHARP_,p2__16206_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__16213__delegate = function (rest__16208_SHARP_){
var news = diff(cljs.core.deref(olds),rest__16208_SHARP_);
cljs.core.reset_BANG_(olds,rest__16208_SHARP_);

return news;
};
var G__16213 = function (var_args){
var rest__16208_SHARP_ = null;
if (arguments.length > 0) {
var G__16214__i = 0, G__16214__a = new Array(arguments.length -  0);
while (G__16214__i < G__16214__a.length) {G__16214__a[G__16214__i] = arguments[G__16214__i + 0]; ++G__16214__i;}
  rest__16208_SHARP_ = new cljs.core.IndexedSeq(G__16214__a,0,null);
} 
return G__16213__delegate.call(this,rest__16208_SHARP_);};
G__16213.cljs$lang$maxFixedArity = 0;
G__16213.cljs$lang$applyTo = (function (arglist__16215){
var rest__16208_SHARP_ = cljs.core.seq(arglist__16215);
return G__16213__delegate(rest__16208_SHARP_);
});
G__16213.cljs$core$IFn$_invoke$arity$variadic = G__16213__delegate;
return G__16213;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula.cljs$core$IFn$_invoke$arity$1(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq16209){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16209));
});

/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   returns a seq of formula cells such that the ith formula cell is equivalent
 *   to (cell= (f (nth c i))).
 */
javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = (function (){var fexpr__16217 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.seq);
return (fexpr__16217.cljs$core$IFn$_invoke$arity$1 ? fexpr__16217.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16217.call(null,c));
})();
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__16216_SHARP_){
var fexpr__16218 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth));
return (fexpr__16218.cljs$core$IFn$_invoke$arity$2 ? fexpr__16218.cljs$core$IFn$_invoke$arity$2(cseq,p1__16216_SHARP_) : fexpr__16218.call(null,cseq,p1__16216_SHARP_));
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.deref(cseq))));
});
/**
 * Given a function f and a cell c that contains a seqable collection of items,
 *   calls f for side effects once for each item in c, passing one argument: a
 *   formula cell equivalent to (cell= (nth c i)) for the ith item in c. Whenever
 *   c grows beyond its previous maximum size f is called as above for each item
 *   beyond the maximum size. Nothing happens when c shrinks.
 * 
 *   See also: the javelin.core/cell-doseq macro.
 * 
 *   Consider:
 * 
 *    (def things (cell [:a :b :c]))
 *    (cell-doseq*
 *      things
 *      (fn doit [x]
 *        (prn :creating @x)
 *        (add-watch x nil #(prn :updating %3 %4))))
 * 
 *    ;; the following is printed:
 * 
 *    :creating :a
 *    :creating :b
 *    :creating :c
 * 
 *   Shrink things by removing the last item:
 * 
 *    (swap! things pop)
 * 
 *    ;; the following is printed (because the 3rd item in things is now nil,
 *    ;; since things only contains 2 items) -- note that the doit function is
 *    ;; not called (or we would see a :creating message):
 * 
 *    :updating :c nil
 * 
 *   Grow things such that it is one item larger than it ever was:
 * 
 *    (swap! things into [:u :v])
 * 
 *    ;; the following is printed (because things now has 4 items, so the 3rd
 *    ;; item is now :u and the max size increases by one with the new item :v):
 * 
 *    :updating nil :u
 *    :creating :v
 * 
 *   A weird imagination is most useful to gain full advantage of all the features.
 */
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(c,f){
var pool_size = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var fexpr__16223 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (pool_size){
return (function (items){
var cnt = cljs.core.count(items);
if((cljs.core.deref(pool_size) < cnt)){
var n__9673__auto___16228 = (cnt - cljs.core.deref(pool_size));
var i_16229 = (0);
while(true){
if((i_16229 < n__9673__auto___16228)){
var G__16224_16230 = (function (){var G__16226 = c;
var G__16227 = (i_16229 + cljs.core.deref(pool_size));
var fexpr__16225 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(javelin.core.safe_nth);
return (fexpr__16225.cljs$core$IFn$_invoke$arity$2 ? fexpr__16225.cljs$core$IFn$_invoke$arity$2(G__16226,G__16227) : fexpr__16225.call(null,G__16226,G__16227));
})();
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__16224_16230) : f.call(null,G__16224_16230));

var G__16231 = (i_16229 + (1));
i_16229 = G__16231;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_(pool_size,cnt);
} else {
return null;
}
});})(pool_size))
);
return (fexpr__16223.cljs$core$IFn$_invoke$arity$1 ? fexpr__16223.cljs$core$IFn$_invoke$arity$1(c) : fexpr__16223.call(null,c));
});
