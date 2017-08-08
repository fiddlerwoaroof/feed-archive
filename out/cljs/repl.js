// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17291){
var map__17316 = p__17291;
var map__17316__$1 = ((((!((map__17316 == null)))?((((map__17316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17316):map__17316);
var m = map__17316__$1;
var n = cljs.core.get.call(null,map__17316__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17316__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17318_17340 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17319_17341 = null;
var count__17320_17342 = (0);
var i__17321_17343 = (0);
while(true){
if((i__17321_17343 < count__17320_17342)){
var f_17344 = cljs.core._nth.call(null,chunk__17319_17341,i__17321_17343);
cljs.core.println.call(null,"  ",f_17344);

var G__17345 = seq__17318_17340;
var G__17346 = chunk__17319_17341;
var G__17347 = count__17320_17342;
var G__17348 = (i__17321_17343 + (1));
seq__17318_17340 = G__17345;
chunk__17319_17341 = G__17346;
count__17320_17342 = G__17347;
i__17321_17343 = G__17348;
continue;
} else {
var temp__4657__auto___17349 = cljs.core.seq.call(null,seq__17318_17340);
if(temp__4657__auto___17349){
var seq__17318_17350__$1 = temp__4657__auto___17349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17318_17350__$1)){
var c__15912__auto___17351 = cljs.core.chunk_first.call(null,seq__17318_17350__$1);
var G__17352 = cljs.core.chunk_rest.call(null,seq__17318_17350__$1);
var G__17353 = c__15912__auto___17351;
var G__17354 = cljs.core.count.call(null,c__15912__auto___17351);
var G__17355 = (0);
seq__17318_17340 = G__17352;
chunk__17319_17341 = G__17353;
count__17320_17342 = G__17354;
i__17321_17343 = G__17355;
continue;
} else {
var f_17356 = cljs.core.first.call(null,seq__17318_17350__$1);
cljs.core.println.call(null,"  ",f_17356);

var G__17357 = cljs.core.next.call(null,seq__17318_17350__$1);
var G__17358 = null;
var G__17359 = (0);
var G__17360 = (0);
seq__17318_17340 = G__17357;
chunk__17319_17341 = G__17358;
count__17320_17342 = G__17359;
i__17321_17343 = G__17360;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17361 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__15098__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__15098__auto__)){
return or__15098__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17361);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17361)))?cljs.core.second.call(null,arglists_17361):arglists_17361));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17322_17362 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17323_17363 = null;
var count__17324_17364 = (0);
var i__17325_17365 = (0);
while(true){
if((i__17325_17365 < count__17324_17364)){
var vec__17326_17366 = cljs.core._nth.call(null,chunk__17323_17363,i__17325_17365);
var name_17367 = cljs.core.nth.call(null,vec__17326_17366,(0),null);
var map__17329_17368 = cljs.core.nth.call(null,vec__17326_17366,(1),null);
var map__17329_17369__$1 = ((((!((map__17329_17368 == null)))?((((map__17329_17368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17329_17368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17329_17368):map__17329_17368);
var doc_17370 = cljs.core.get.call(null,map__17329_17369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17371 = cljs.core.get.call(null,map__17329_17369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17367);

cljs.core.println.call(null," ",arglists_17371);

if(cljs.core.truth_(doc_17370)){
cljs.core.println.call(null," ",doc_17370);
} else {
}

var G__17372 = seq__17322_17362;
var G__17373 = chunk__17323_17363;
var G__17374 = count__17324_17364;
var G__17375 = (i__17325_17365 + (1));
seq__17322_17362 = G__17372;
chunk__17323_17363 = G__17373;
count__17324_17364 = G__17374;
i__17325_17365 = G__17375;
continue;
} else {
var temp__4657__auto___17376 = cljs.core.seq.call(null,seq__17322_17362);
if(temp__4657__auto___17376){
var seq__17322_17377__$1 = temp__4657__auto___17376;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17322_17377__$1)){
var c__15912__auto___17378 = cljs.core.chunk_first.call(null,seq__17322_17377__$1);
var G__17379 = cljs.core.chunk_rest.call(null,seq__17322_17377__$1);
var G__17380 = c__15912__auto___17378;
var G__17381 = cljs.core.count.call(null,c__15912__auto___17378);
var G__17382 = (0);
seq__17322_17362 = G__17379;
chunk__17323_17363 = G__17380;
count__17324_17364 = G__17381;
i__17325_17365 = G__17382;
continue;
} else {
var vec__17331_17383 = cljs.core.first.call(null,seq__17322_17377__$1);
var name_17384 = cljs.core.nth.call(null,vec__17331_17383,(0),null);
var map__17334_17385 = cljs.core.nth.call(null,vec__17331_17383,(1),null);
var map__17334_17386__$1 = ((((!((map__17334_17385 == null)))?((((map__17334_17385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17334_17385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17334_17385):map__17334_17385);
var doc_17387 = cljs.core.get.call(null,map__17334_17386__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17388 = cljs.core.get.call(null,map__17334_17386__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17384);

cljs.core.println.call(null," ",arglists_17388);

if(cljs.core.truth_(doc_17387)){
cljs.core.println.call(null," ",doc_17387);
} else {
}

var G__17389 = cljs.core.next.call(null,seq__17322_17377__$1);
var G__17390 = null;
var G__17391 = (0);
var G__17392 = (0);
seq__17322_17362 = G__17389;
chunk__17323_17363 = G__17390;
count__17324_17364 = G__17391;
i__17325_17365 = G__17392;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__17336 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17337 = null;
var count__17338 = (0);
var i__17339 = (0);
while(true){
if((i__17339 < count__17338)){
var role = cljs.core._nth.call(null,chunk__17337,i__17339);
var temp__4657__auto___17393__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17393__$1)){
var spec_17394 = temp__4657__auto___17393__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_17394));
} else {
}

var G__17395 = seq__17336;
var G__17396 = chunk__17337;
var G__17397 = count__17338;
var G__17398 = (i__17339 + (1));
seq__17336 = G__17395;
chunk__17337 = G__17396;
count__17338 = G__17397;
i__17339 = G__17398;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__17336);
if(temp__4657__auto____$1){
var seq__17336__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17336__$1)){
var c__15912__auto__ = cljs.core.chunk_first.call(null,seq__17336__$1);
var G__17399 = cljs.core.chunk_rest.call(null,seq__17336__$1);
var G__17400 = c__15912__auto__;
var G__17401 = cljs.core.count.call(null,c__15912__auto__);
var G__17402 = (0);
seq__17336 = G__17399;
chunk__17337 = G__17400;
count__17338 = G__17401;
i__17339 = G__17402;
continue;
} else {
var role = cljs.core.first.call(null,seq__17336__$1);
var temp__4657__auto___17403__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___17403__$2)){
var spec_17404 = temp__4657__auto___17403__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_17404));
} else {
}

var G__17405 = cljs.core.next.call(null,seq__17336__$1);
var G__17406 = null;
var G__17407 = (0);
var G__17408 = (0);
seq__17336 = G__17405;
chunk__17337 = G__17406;
count__17338 = G__17407;
i__17339 = G__17408;
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
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map