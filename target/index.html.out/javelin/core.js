// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__13375 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13373_SHARP_,p2__13374_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13373_SHARP_,p2__13374_SHARP_,p2__13374_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13375;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e13377){if((e13377 instanceof Error)){
var _ = e13377;
return null;
} else {
throw e13377;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13380 = c;
javelin.core.add_sync_BANG_(G__13380);

return G__13380;
} else {
var G__13381 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13381));

return G__13381;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13392 = arguments.length;
var i__7951__auto___13393 = (0);
while(true){
if((i__7951__auto___13393 < len__7950__auto___13392)){
args__7957__auto__.push((arguments[i__7951__auto___13393]));

var G__13394 = (i__7951__auto___13393 + (1));
i__7951__auto___13393 = G__13394;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13384){
var vec__13385 = p__13384;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13385,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13388 = cljs.core.seq(srcs);
var chunk__13389 = null;
var count__13390 = (0);
var i__13391 = (0);
while(true){
if((i__13391 < count__13390)){
var src = chunk__13389.cljs$core$IIndexed$_nth$arity$2(null,i__13391);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13395 = seq__13388;
var G__13396 = chunk__13389;
var G__13397 = count__13390;
var G__13398 = (i__13391 + (1));
seq__13388 = G__13395;
chunk__13389 = G__13396;
count__13390 = G__13397;
i__13391 = G__13398;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13388);
if(temp__4657__auto__){
var seq__13388__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13388__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13388__$1);
var G__13399 = cljs.core.chunk_rest(seq__13388__$1);
var G__13400 = c__7656__auto__;
var G__13401 = cljs.core.count(c__7656__auto__);
var G__13402 = (0);
seq__13388 = G__13399;
chunk__13389 = G__13400;
count__13390 = G__13401;
i__13391 = G__13402;
continue;
} else {
var src = cljs.core.first(seq__13388__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13403 = cljs.core.next(seq__13388__$1);
var G__13404 = null;
var G__13405 = (0);
var G__13406 = (0);
seq__13388 = G__13403;
chunk__13389 = G__13404;
count__13390 = G__13405;
i__13391 = G__13406;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13382){
var G__13383 = cljs.core.first(seq13382);
var seq13382__$1 = cljs.core.next(seq13382);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13383,seq13382__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13427 = arguments.length;
var i__7951__auto___13428 = (0);
while(true){
if((i__7951__auto___13428 < len__7950__auto___13427)){
args__7957__auto__.push((arguments[i__7951__auto___13428]));

var G__13429 = (i__7951__auto___13428 + (1));
i__7951__auto___13428 = G__13429;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13411){
var vec__13412 = p__13411;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13412,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13415_13430 = cljs.core.seq(this$.sources);
var chunk__13416_13431 = null;
var count__13417_13432 = (0);
var i__13418_13433 = (0);
while(true){
if((i__13418_13433 < count__13417_13432)){
var source_13434 = chunk__13416_13431.cljs$core$IIndexed$_nth$arity$2(null,i__13418_13433);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13434) : javelin.core.cell_QMARK_.call(null,source_13434)))){
source_13434.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13434.sinks,this$);

if((source_13434.rank > this$.rank)){
var seq__13419_13435 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13415_13430,chunk__13416_13431,count__13417_13432,i__13418_13433,source_13434,vec__13412,f,sources){
return (function (p1__13407_SHARP_){
return p1__13407_SHARP_.sinks;
});})(seq__13415_13430,chunk__13416_13431,count__13417_13432,i__13418_13433,source_13434,vec__13412,f,sources))
,source_13434));
var chunk__13420_13436 = null;
var count__13421_13437 = (0);
var i__13422_13438 = (0);
while(true){
if((i__13422_13438 < count__13421_13437)){
var dep_13439 = chunk__13420_13436.cljs$core$IIndexed$_nth$arity$2(null,i__13422_13438);
dep_13439.rank = javelin.core.next_rank();

var G__13440 = seq__13419_13435;
var G__13441 = chunk__13420_13436;
var G__13442 = count__13421_13437;
var G__13443 = (i__13422_13438 + (1));
seq__13419_13435 = G__13440;
chunk__13420_13436 = G__13441;
count__13421_13437 = G__13442;
i__13422_13438 = G__13443;
continue;
} else {
var temp__4657__auto___13444 = cljs.core.seq(seq__13419_13435);
if(temp__4657__auto___13444){
var seq__13419_13445__$1 = temp__4657__auto___13444;
if(cljs.core.chunked_seq_QMARK_(seq__13419_13445__$1)){
var c__7656__auto___13446 = cljs.core.chunk_first(seq__13419_13445__$1);
var G__13447 = cljs.core.chunk_rest(seq__13419_13445__$1);
var G__13448 = c__7656__auto___13446;
var G__13449 = cljs.core.count(c__7656__auto___13446);
var G__13450 = (0);
seq__13419_13435 = G__13447;
chunk__13420_13436 = G__13448;
count__13421_13437 = G__13449;
i__13422_13438 = G__13450;
continue;
} else {
var dep_13451 = cljs.core.first(seq__13419_13445__$1);
dep_13451.rank = javelin.core.next_rank();

var G__13452 = cljs.core.next(seq__13419_13445__$1);
var G__13453 = null;
var G__13454 = (0);
var G__13455 = (0);
seq__13419_13435 = G__13452;
chunk__13420_13436 = G__13453;
count__13421_13437 = G__13454;
i__13422_13438 = G__13455;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13456 = seq__13415_13430;
var G__13457 = chunk__13416_13431;
var G__13458 = count__13417_13432;
var G__13459 = (i__13418_13433 + (1));
seq__13415_13430 = G__13456;
chunk__13416_13431 = G__13457;
count__13417_13432 = G__13458;
i__13418_13433 = G__13459;
continue;
} else {
var temp__4657__auto___13460 = cljs.core.seq(seq__13415_13430);
if(temp__4657__auto___13460){
var seq__13415_13461__$1 = temp__4657__auto___13460;
if(cljs.core.chunked_seq_QMARK_(seq__13415_13461__$1)){
var c__7656__auto___13462 = cljs.core.chunk_first(seq__13415_13461__$1);
var G__13463 = cljs.core.chunk_rest(seq__13415_13461__$1);
var G__13464 = c__7656__auto___13462;
var G__13465 = cljs.core.count(c__7656__auto___13462);
var G__13466 = (0);
seq__13415_13430 = G__13463;
chunk__13416_13431 = G__13464;
count__13417_13432 = G__13465;
i__13418_13433 = G__13466;
continue;
} else {
var source_13467 = cljs.core.first(seq__13415_13461__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13467) : javelin.core.cell_QMARK_.call(null,source_13467)))){
source_13467.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13467.sinks,this$);

if((source_13467.rank > this$.rank)){
var seq__13423_13468 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13415_13430,chunk__13416_13431,count__13417_13432,i__13418_13433,source_13467,seq__13415_13461__$1,temp__4657__auto___13460,vec__13412,f,sources){
return (function (p1__13407_SHARP_){
return p1__13407_SHARP_.sinks;
});})(seq__13415_13430,chunk__13416_13431,count__13417_13432,i__13418_13433,source_13467,seq__13415_13461__$1,temp__4657__auto___13460,vec__13412,f,sources))
,source_13467));
var chunk__13424_13469 = null;
var count__13425_13470 = (0);
var i__13426_13471 = (0);
while(true){
if((i__13426_13471 < count__13425_13470)){
var dep_13472 = chunk__13424_13469.cljs$core$IIndexed$_nth$arity$2(null,i__13426_13471);
dep_13472.rank = javelin.core.next_rank();

var G__13473 = seq__13423_13468;
var G__13474 = chunk__13424_13469;
var G__13475 = count__13425_13470;
var G__13476 = (i__13426_13471 + (1));
seq__13423_13468 = G__13473;
chunk__13424_13469 = G__13474;
count__13425_13470 = G__13475;
i__13426_13471 = G__13476;
continue;
} else {
var temp__4657__auto___13477__$1 = cljs.core.seq(seq__13423_13468);
if(temp__4657__auto___13477__$1){
var seq__13423_13478__$1 = temp__4657__auto___13477__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13423_13478__$1)){
var c__7656__auto___13479 = cljs.core.chunk_first(seq__13423_13478__$1);
var G__13480 = cljs.core.chunk_rest(seq__13423_13478__$1);
var G__13481 = c__7656__auto___13479;
var G__13482 = cljs.core.count(c__7656__auto___13479);
var G__13483 = (0);
seq__13423_13468 = G__13480;
chunk__13424_13469 = G__13481;
count__13425_13470 = G__13482;
i__13426_13471 = G__13483;
continue;
} else {
var dep_13484 = cljs.core.first(seq__13423_13478__$1);
dep_13484.rank = javelin.core.next_rank();

var G__13485 = cljs.core.next(seq__13423_13478__$1);
var G__13486 = null;
var G__13487 = (0);
var G__13488 = (0);
seq__13423_13468 = G__13485;
chunk__13424_13469 = G__13486;
count__13425_13470 = G__13487;
i__13426_13471 = G__13488;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13489 = cljs.core.next(seq__13415_13461__$1);
var G__13490 = null;
var G__13491 = (0);
var G__13492 = (0);
seq__13415_13430 = G__13489;
chunk__13416_13431 = G__13490;
count__13417_13432 = G__13491;
i__13418_13433 = G__13492;
continue;
}
} else {
}
}
break;
}

var compute_13493 = ((function (vec__13412,f,sources){
return (function (p1__13408_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13408_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13408_SHARP_)));
});})(vec__13412,f,sources))
;
this$.thunk = ((function (compute_13493,vec__13412,f,sources){
return (function (){
return this$.state = compute_13493(this$.sources);
});})(compute_13493,vec__13412,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13409){
var G__13410 = cljs.core.first(seq13409);
var seq13409__$1 = cljs.core.next(seq13409);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13410,seq13409__$1);
});


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
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
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
this$__$1.update.call(null,x);
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
var G__13494 = this$__$1;
var G__13495 = (function (){var G__13496 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13496) : f.call(null,G__13496));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13494,G__13495) : cljs.core.reset_BANG_.call(null,G__13494,G__13495));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13497 = this$__$1;
var G__13498 = (function (){var G__13499 = this$__$1.state;
var G__13500 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13499,G__13500) : f.call(null,G__13499,G__13500));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13497,G__13498) : cljs.core.reset_BANG_.call(null,G__13497,G__13498));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13501 = this$__$1;
var G__13502 = (function (){var G__13503 = this$__$1.state;
var G__13504 = a;
var G__13505 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13503,G__13504,G__13505) : f.call(null,G__13503,G__13504,G__13505));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13501,G__13502) : cljs.core.reset_BANG_.call(null,G__13501,G__13502));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13506 = this$__$1;
var G__13507 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13506,G__13507) : cljs.core.reset_BANG_.call(null,G__13506,G__13507));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13508 = cljs.core.seq(self__.watches);
var chunk__13509 = null;
var count__13510 = (0);
var i__13511 = (0);
while(true){
if((i__13511 < count__13510)){
var vec__13512 = chunk__13509.cljs$core$IIndexed$_nth$arity$2(null,i__13511);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13512,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13512,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13518 = seq__13508;
var G__13519 = chunk__13509;
var G__13520 = count__13510;
var G__13521 = (i__13511 + (1));
seq__13508 = G__13518;
chunk__13509 = G__13519;
count__13510 = G__13520;
i__13511 = G__13521;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13508);
if(temp__4657__auto__){
var seq__13508__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13508__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13508__$1);
var G__13522 = cljs.core.chunk_rest(seq__13508__$1);
var G__13523 = c__7656__auto__;
var G__13524 = cljs.core.count(c__7656__auto__);
var G__13525 = (0);
seq__13508 = G__13522;
chunk__13509 = G__13523;
count__13510 = G__13524;
i__13511 = G__13525;
continue;
} else {
var vec__13515 = cljs.core.first(seq__13508__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13526 = cljs.core.next(seq__13508__$1);
var G__13527 = null;
var G__13528 = (0);
var G__13529 = (0);
seq__13508 = G__13526;
chunk__13509 = G__13527;
count__13510 = G__13528;
i__13511 = G__13529;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7448__auto__,writer__7449__auto__,opt__7450__auto__){
return cljs.core._write(writer__7449__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.thunk;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.update;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13532__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13531 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13531) : javelin.core.cell.call(null,G__13531));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13532 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13533__i = 0, G__13533__a = new Array(arguments.length -  0);
while (G__13533__i < G__13533__a.length) {G__13533__a[G__13533__i] = arguments[G__13533__i + 0]; ++G__13533__i;}
  sources = new cljs.core.IndexedSeq(G__13533__a,0);
} 
return G__13532__delegate.call(this,sources);};
G__13532.cljs$lang$maxFixedArity = 0;
G__13532.cljs$lang$applyTo = (function (arglist__13534){
var sources = cljs.core.seq(arglist__13534);
return G__13532__delegate(sources);
});
G__13532.cljs$core$IFn$_invoke$arity$variadic = G__13532__delegate;
return G__13532;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13535 = [];
var len__7950__auto___13543 = arguments.length;
var i__7951__auto___13544 = (0);
while(true){
if((i__7951__auto___13544 < len__7950__auto___13543)){
args13535.push((arguments[i__7951__auto___13544]));

var G__13545 = (i__7951__auto___13544 + (1));
i__7951__auto___13544 = G__13545;
continue;
} else {
}
break;
}

var G__13539 = args13535.length;
switch (G__13539) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13535.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13540){
var map__13541 = p__13540;
var map__13541__$1 = ((((!((map__13541 == null)))?((((map__13541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13541):map__13541);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13541__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13536){
var G__13537 = cljs.core.first(seq13536);
var seq13536__$1 = cljs.core.next(seq13536);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13537,seq13536__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13547_SHARP_){
var _STAR_tx_STAR_13551 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13552 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13552) : cljs.core.atom.call(null,G__13552));
})();

try{return (p1__13547_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13547_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13547_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13551;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13553 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13553;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13561 = arguments.length;
var i__7951__auto___13562 = (0);
while(true){
if((i__7951__auto___13562 < len__7950__auto___13561)){
args__7957__auto__.push((arguments[i__7951__auto___13562]));

var G__13563 = (i__7951__auto___13562 + (1));
i__7951__auto___13562 = G__13563;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13560 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13560) : cljs.core.atom.call(null,G__13560));
})();
var tag_neq = ((function (olds){
return (function (p1__13554_SHARP_,p2__13555_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13554_SHARP_,p2__13555_SHARP_),p2__13555_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13557_SHARP_,p2__13556_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13557_SHARP_,p2__13556_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13564__delegate = function (rest__13558_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13558_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13558_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13558_SHARP_));

return news;
};
var G__13564 = function (var_args){
var rest__13558_SHARP_ = null;
if (arguments.length > 0) {
var G__13565__i = 0, G__13565__a = new Array(arguments.length -  0);
while (G__13565__i < G__13565__a.length) {G__13565__a[G__13565__i] = arguments[G__13565__i + 0]; ++G__13565__i;}
  rest__13558_SHARP_ = new cljs.core.IndexedSeq(G__13565__a,0);
} 
return G__13564__delegate.call(this,rest__13558_SHARP_);};
G__13564.cljs$lang$maxFixedArity = 0;
G__13564.cljs$lang$applyTo = (function (arglist__13566){
var rest__13558_SHARP_ = cljs.core.seq(arglist__13566);
return G__13564__delegate(rest__13558_SHARP_);
});
G__13564.cljs$core$IFn$_invoke$arity$variadic = G__13564__delegate;
return G__13564;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13559){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13559));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13567_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13567_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13568_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13568_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13575_13581 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13576_13582 = null;
var count__13577_13583 = (0);
var i__13578_13584 = (0);
while(true){
if((i__13578_13584 < count__13577_13583)){
var i_13585 = chunk__13576_13582.cljs$core$IIndexed$_nth$arity$2(null,i__13578_13584);
var G__13579_13586 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13585) : ith_item__$1.call(null,i_13585));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13579_13586) : f__$1.call(null,G__13579_13586));

var G__13587 = seq__13575_13581;
var G__13588 = chunk__13576_13582;
var G__13589 = count__13577_13583;
var G__13590 = (i__13578_13584 + (1));
seq__13575_13581 = G__13587;
chunk__13576_13582 = G__13588;
count__13577_13583 = G__13589;
i__13578_13584 = G__13590;
continue;
} else {
var temp__4657__auto___13591 = cljs.core.seq(seq__13575_13581);
if(temp__4657__auto___13591){
var seq__13575_13592__$1 = temp__4657__auto___13591;
if(cljs.core.chunked_seq_QMARK_(seq__13575_13592__$1)){
var c__7656__auto___13593 = cljs.core.chunk_first(seq__13575_13592__$1);
var G__13594 = cljs.core.chunk_rest(seq__13575_13592__$1);
var G__13595 = c__7656__auto___13593;
var G__13596 = cljs.core.count(c__7656__auto___13593);
var G__13597 = (0);
seq__13575_13581 = G__13594;
chunk__13576_13582 = G__13595;
count__13577_13583 = G__13596;
i__13578_13584 = G__13597;
continue;
} else {
var i_13598 = cljs.core.first(seq__13575_13592__$1);
var G__13580_13599 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13598) : ith_item__$1.call(null,i_13598));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13580_13599) : f__$1.call(null,G__13580_13599));

var G__13600 = cljs.core.next(seq__13575_13592__$1);
var G__13601 = null;
var G__13602 = (0);
var G__13603 = (0);
seq__13575_13581 = G__13600;
chunk__13576_13582 = G__13601;
count__13577_13583 = G__13602;
i__13578_13584 = G__13603;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
