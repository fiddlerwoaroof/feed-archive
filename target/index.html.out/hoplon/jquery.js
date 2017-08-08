// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var args14290 = [];
var len__7950__auto___14309 = arguments.length;
var i__7951__auto___14310 = (0);
while(true){
if((i__7951__auto___14310 < len__7950__auto___14309)){
args14290.push((arguments[i__7951__auto___14310]));

var G__14311 = (i__7951__auto___14310 + (1));
i__7951__auto___14310 = G__14311;
continue;
} else {
}
break;
}

var G__14296 = args14290.length;
switch (G__14296) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14290.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14297 = cljs.core.seq(kvs);
var chunk__14299 = null;
var count__14300 = (0);
var i__14301 = (0);
while(true){
if((i__14301 < count__14300)){
var vec__14303 = chunk__14299.cljs$core$IIndexed$_nth$arity$2(null,i__14301);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(1),null);
var k_14313__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14313__$1);
} else {
e.attr(k_14313__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14313__$1:v));
}

var G__14314 = seq__14297;
var G__14315 = chunk__14299;
var G__14316 = count__14300;
var G__14317 = (i__14301 + (1));
seq__14297 = G__14314;
chunk__14299 = G__14315;
count__14300 = G__14316;
i__14301 = G__14317;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14297);
if(temp__4657__auto__){
var seq__14297__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14297__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14297__$1);
var G__14318 = cljs.core.chunk_rest(seq__14297__$1);
var G__14319 = c__7656__auto__;
var G__14320 = cljs.core.count(c__7656__auto__);
var G__14321 = (0);
seq__14297 = G__14318;
chunk__14299 = G__14319;
count__14300 = G__14320;
i__14301 = G__14321;
continue;
} else {
var vec__14306 = cljs.core.first(seq__14297__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14306,(1),null);
var k_14322__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14322__$1);
} else {
e.attr(k_14322__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14322__$1:v));
}

var G__14323 = cljs.core.next(seq__14297__$1);
var G__14324 = null;
var G__14325 = (0);
var G__14326 = (0);
seq__14297 = G__14323;
chunk__14299 = G__14324;
count__14300 = G__14325;
i__14301 = G__14326;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14291){
var G__14292 = cljs.core.first(seq14291);
var seq14291__$1 = cljs.core.next(seq14291);
var G__14293 = cljs.core.first(seq14291__$1);
var seq14291__$2 = cljs.core.next(seq14291__$1);
var G__14294 = cljs.core.first(seq14291__$2);
var seq14291__$3 = cljs.core.next(seq14291__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14292,G__14293,G__14294,seq14291__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var args14327 = [];
var len__7950__auto___14344 = arguments.length;
var i__7951__auto___14345 = (0);
while(true){
if((i__7951__auto___14345 < len__7950__auto___14344)){
args14327.push((arguments[i__7951__auto___14345]));

var G__14346 = (i__7951__auto___14345 + (1));
i__7951__auto___14345 = G__14346;
continue;
} else {
}
break;
}

var G__14333 = args14327.length;
switch (G__14333) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args14327.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7969__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14334 = cljs.core.seq(kvs);
var chunk__14335 = null;
var count__14336 = (0);
var i__14337 = (0);
while(true){
if((i__14337 < count__14336)){
var vec__14338 = chunk__14335.cljs$core$IIndexed$_nth$arity$2(null,i__14337);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14338,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14348 = seq__14334;
var G__14349 = chunk__14335;
var G__14350 = count__14336;
var G__14351 = (i__14337 + (1));
seq__14334 = G__14348;
chunk__14335 = G__14349;
count__14336 = G__14350;
i__14337 = G__14351;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14334);
if(temp__4657__auto__){
var seq__14334__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14334__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14334__$1);
var G__14352 = cljs.core.chunk_rest(seq__14334__$1);
var G__14353 = c__7656__auto__;
var G__14354 = cljs.core.count(c__7656__auto__);
var G__14355 = (0);
seq__14334 = G__14352;
chunk__14335 = G__14353;
count__14336 = G__14354;
i__14337 = G__14355;
continue;
} else {
var vec__14341 = cljs.core.first(seq__14334__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14356 = cljs.core.next(seq__14334__$1);
var G__14357 = null;
var G__14358 = (0);
var G__14359 = (0);
seq__14334 = G__14356;
chunk__14335 = G__14357;
count__14336 = G__14358;
i__14337 = G__14359;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14328){
var G__14329 = cljs.core.first(seq14328);
var seq14328__$1 = cljs.core.next(seq14328);
var G__14330 = cljs.core.first(seq14328__$1);
var seq14328__$2 = cljs.core.next(seq14328__$1);
var G__14331 = cljs.core.first(seq14328__$2);
var seq14328__$3 = cljs.core.next(seq14328__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14329,G__14330,G__14331,seq14328__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var args14360 = [];
var len__7950__auto___14363 = arguments.length;
var i__7951__auto___14364 = (0);
while(true){
if((i__7951__auto___14364 < len__7950__auto___14363)){
args14360.push((arguments[i__7951__auto___14364]));

var G__14365 = (i__7951__auto___14364 + (1));
i__7951__auto___14364 = G__14365;
continue;
} else {
}
break;
}

var G__14362 = args14360.length;
switch (G__14362) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14360.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var args14367 = [];
var len__7950__auto___14370 = arguments.length;
var i__7951__auto___14371 = (0);
while(true){
if((i__7951__auto___14371 < len__7950__auto___14370)){
args14367.push((arguments[i__7951__auto___14371]));

var G__14372 = (i__7951__auto___14371 + (1));
i__7951__auto___14371 = G__14372;
continue;
} else {
}
break;
}

var G__14369 = args14367.length;
switch (G__14369) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14367.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14374 = elem;
var G__14375 = cljs.core.cst$kw$attr;
var G__14376 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14374,G__14375,G__14376) : hoplon.core.do_BANG_.call(null,G__14374,G__14375,G__14376));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__14377__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__14377 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14378__i = 0, G__14378__a = new Array(arguments.length -  2);
while (G__14378__i < G__14378__a.length) {G__14378__a[G__14378__i] = arguments[G__14378__i + 2]; ++G__14378__i;}
  args = new cljs.core.IndexedSeq(G__14378__a,0);
} 
return G__14377__delegate.call(this,elem,_,args);};
G__14377.cljs$lang$maxFixedArity = 2;
G__14377.cljs$lang$applyTo = (function (arglist__14379){
var elem = cljs.core.first(arglist__14379);
arglist__14379 = cljs.core.next(arglist__14379);
var _ = cljs.core.first(arglist__14379);
var args = cljs.core.rest(arglist__14379);
return G__14377__delegate(elem,_,args);
});
G__14377.cljs$core$IFn$_invoke$arity$variadic = G__14377__delegate;
return G__14377;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__14380 = cljs.core.seq(clmap);
var chunk__14381 = null;
var count__14382 = (0);
var i__14383 = (0);
while(true){
if((i__14383 < count__14382)){
var vec__14384 = chunk__14381.cljs$core$IIndexed$_nth$arity$2(null,i__14383);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14390 = seq__14380;
var G__14391 = chunk__14381;
var G__14392 = count__14382;
var G__14393 = (i__14383 + (1));
seq__14380 = G__14390;
chunk__14381 = G__14391;
count__14382 = G__14392;
i__14383 = G__14393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14380);
if(temp__4657__auto__){
var seq__14380__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14380__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__14380__$1);
var G__14394 = cljs.core.chunk_rest(seq__14380__$1);
var G__14395 = c__7656__auto__;
var G__14396 = cljs.core.count(c__7656__auto__);
var G__14397 = (0);
seq__14380 = G__14394;
chunk__14381 = G__14395;
count__14382 = G__14396;
i__14383 = G__14397;
continue;
} else {
var vec__14387 = cljs.core.first(seq__14380__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14387,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14398 = cljs.core.next(seq__14380__$1);
var G__14399 = null;
var G__14400 = (0);
var G__14401 = (0);
seq__14380 = G__14398;
chunk__14381 = G__14399;
count__14382 = G__14400;
i__14383 = G__14401;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__14402 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14403 = (0);
return setTimeout(G__14402,G__14403);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__14404_14410 = elem;
var G__14405_14411 = cljs.core.cst$kw$focus;
var G__14406_14412 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14404_14410,G__14405_14411,G__14406_14412) : hoplon.core.do_BANG_.call(null,G__14404_14410,G__14405_14411,G__14406_14412));

var G__14407 = elem;
var G__14408 = cljs.core.cst$kw$select;
var G__14409 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14407,G__14408,G__14409) : hoplon.core.do_BANG_.call(null,G__14407,G__14408,G__14409));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__14413 = this$__$1.target;
return jQuery(G__14413);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
