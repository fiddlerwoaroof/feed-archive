// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19422 = arguments.length;
switch (G__19422) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9930__auto__ = [];
var len__9907__auto___19436 = arguments.length;
var i__9908__auto___19437 = (0);
while(true){
if((i__9908__auto___19437 < len__9907__auto___19436)){
args_arr__9930__auto__.push((arguments[i__9908__auto___19437]));

var G__19438 = (i__9908__auto___19437 + (1));
i__9908__auto___19437 = G__19438;
continue;
} else {
}
break;
}

var argseq__9931__auto__ = (new cljs.core.IndexedSeq(args_arr__9930__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9931__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19423 = cljs.core.seq(kvs);
var chunk__19425 = null;
var count__19426 = (0);
var i__19427 = (0);
while(true){
if((i__19427 < count__19426)){
var vec__19429 = chunk__19425.cljs$core$IIndexed$_nth$arity$2(null,i__19427);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19429,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19429,(1),null);
var k_19439__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19439__$1);
} else {
e.attr(k_19439__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19439__$1:v));
}

var G__19440 = seq__19423;
var G__19441 = chunk__19425;
var G__19442 = count__19426;
var G__19443 = (i__19427 + (1));
seq__19423 = G__19440;
chunk__19425 = G__19441;
count__19426 = G__19442;
i__19427 = G__19443;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19423);
if(temp__5290__auto__){
var seq__19423__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19423__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19423__$1);
var G__19444 = cljs.core.chunk_rest(seq__19423__$1);
var G__19445 = c__9561__auto__;
var G__19446 = cljs.core.count(c__9561__auto__);
var G__19447 = (0);
seq__19423 = G__19444;
chunk__19425 = G__19445;
count__19426 = G__19446;
i__19427 = G__19447;
continue;
} else {
var vec__19432 = cljs.core.first(seq__19423__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19432,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19432,(1),null);
var k_19448__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19448__$1);
} else {
e.attr(k_19448__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19448__$1:v));
}

var G__19449 = cljs.core.next(seq__19423__$1);
var G__19450 = null;
var G__19451 = (0);
var G__19452 = (0);
seq__19423 = G__19449;
chunk__19425 = G__19450;
count__19426 = G__19451;
i__19427 = G__19452;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19418){
var G__19419 = cljs.core.first(seq19418);
var seq19418__$1 = cljs.core.next(seq19418);
var G__19420 = cljs.core.first(seq19418__$1);
var seq19418__$2 = cljs.core.next(seq19418__$1);
var G__19421 = cljs.core.first(seq19418__$2);
var seq19418__$3 = cljs.core.next(seq19418__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19419,G__19420,G__19421,seq19418__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19458 = arguments.length;
switch (G__19458) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9930__auto__ = [];
var len__9907__auto___19470 = arguments.length;
var i__9908__auto___19471 = (0);
while(true){
if((i__9908__auto___19471 < len__9907__auto___19470)){
args_arr__9930__auto__.push((arguments[i__9908__auto___19471]));

var G__19472 = (i__9908__auto___19471 + (1));
i__9908__auto___19471 = G__19472;
continue;
} else {
}
break;
}

var argseq__9931__auto__ = (new cljs.core.IndexedSeq(args_arr__9930__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9931__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19459 = cljs.core.seq(kvs);
var chunk__19460 = null;
var count__19461 = (0);
var i__19462 = (0);
while(true){
if((i__19462 < count__19461)){
var vec__19463 = chunk__19460.cljs$core$IIndexed$_nth$arity$2(null,i__19462);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19463,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19473 = seq__19459;
var G__19474 = chunk__19460;
var G__19475 = count__19461;
var G__19476 = (i__19462 + (1));
seq__19459 = G__19473;
chunk__19460 = G__19474;
count__19461 = G__19475;
i__19462 = G__19476;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19459);
if(temp__5290__auto__){
var seq__19459__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19459__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19459__$1);
var G__19477 = cljs.core.chunk_rest(seq__19459__$1);
var G__19478 = c__9561__auto__;
var G__19479 = cljs.core.count(c__9561__auto__);
var G__19480 = (0);
seq__19459 = G__19477;
chunk__19460 = G__19478;
count__19461 = G__19479;
i__19462 = G__19480;
continue;
} else {
var vec__19466 = cljs.core.first(seq__19459__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19466,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19466,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19481 = cljs.core.next(seq__19459__$1);
var G__19482 = null;
var G__19483 = (0);
var G__19484 = (0);
seq__19459 = G__19481;
chunk__19460 = G__19482;
count__19461 = G__19483;
i__19462 = G__19484;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19454){
var G__19455 = cljs.core.first(seq19454);
var seq19454__$1 = cljs.core.next(seq19454);
var G__19456 = cljs.core.first(seq19454__$1);
var seq19454__$2 = cljs.core.next(seq19454__$1);
var G__19457 = cljs.core.first(seq19454__$2);
var seq19454__$3 = cljs.core.next(seq19454__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19455,G__19456,G__19457,seq19454__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19486 = arguments.length;
switch (G__19486) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__19489 = arguments.length;
switch (G__19489) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__19491 = elem;
var G__19492 = cljs.core.cst$kw$attr;
var G__19493 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19491,G__19492,G__19493) : hoplon.core.do_BANG_.call(null,G__19491,G__19492,G__19493));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__19494__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19494 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19495__i = 0, G__19495__a = new Array(arguments.length -  2);
while (G__19495__i < G__19495__a.length) {G__19495__a[G__19495__i] = arguments[G__19495__i + 2]; ++G__19495__i;}
  args = new cljs.core.IndexedSeq(G__19495__a,0,null);
} 
return G__19494__delegate.call(this,elem,_,args);};
G__19494.cljs$lang$maxFixedArity = 2;
G__19494.cljs$lang$applyTo = (function (arglist__19496){
var elem = cljs.core.first(arglist__19496);
arglist__19496 = cljs.core.next(arglist__19496);
var _ = cljs.core.first(arglist__19496);
var args = cljs.core.rest(arglist__19496);
return G__19494__delegate(elem,_,args);
});
G__19494.cljs$core$IFn$_invoke$arity$variadic = G__19494__delegate;
return G__19494;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19497 = cljs.core.seq(clmap);
var chunk__19498 = null;
var count__19499 = (0);
var i__19500 = (0);
while(true){
if((i__19500 < count__19499)){
var vec__19501 = chunk__19498.cljs$core$IIndexed$_nth$arity$2(null,i__19500);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19501,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19501,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19507 = seq__19497;
var G__19508 = chunk__19498;
var G__19509 = count__19499;
var G__19510 = (i__19500 + (1));
seq__19497 = G__19507;
chunk__19498 = G__19508;
count__19499 = G__19509;
i__19500 = G__19510;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19497);
if(temp__5290__auto__){
var seq__19497__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19497__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19497__$1);
var G__19511 = cljs.core.chunk_rest(seq__19497__$1);
var G__19512 = c__9561__auto__;
var G__19513 = cljs.core.count(c__9561__auto__);
var G__19514 = (0);
seq__19497 = G__19511;
chunk__19498 = G__19512;
count__19499 = G__19513;
i__19500 = G__19514;
continue;
} else {
var vec__19504 = cljs.core.first(seq__19497__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19504,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19504,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19515 = cljs.core.next(seq__19497__$1);
var G__19516 = null;
var G__19517 = (0);
var G__19518 = (0);
seq__19497 = G__19515;
chunk__19498 = G__19516;
count__19499 = G__19517;
i__19500 = G__19518;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__19519 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19520 = (0);
return setTimeout(G__19519,G__19520);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__19521_19527 = elem;
var G__19522_19528 = cljs.core.cst$kw$focus;
var G__19523_19529 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19521_19527,G__19522_19528,G__19523_19529) : hoplon.core.do_BANG_.call(null,G__19521_19527,G__19522_19528,G__19523_19529));

var G__19524 = elem;
var G__19525 = cljs.core.cst$kw$select;
var G__19526 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19524,G__19525,G__19526) : hoplon.core.do_BANG_.call(null,G__19524,G__19525,G__19526));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
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
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__19530 = this$__$1.target;
return jQuery(G__19530);
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
