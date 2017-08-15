// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__14948 = arguments.length;
switch (G__14948) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9099__auto__ = [];
var len__9080__auto___14962 = arguments.length;
var i__9081__auto___14963 = (0);
while(true){
if((i__9081__auto___14963 < len__9080__auto___14962)){
args_arr__9099__auto__.push((arguments[i__9081__auto___14963]));

var G__14964 = (i__9081__auto___14963 + (1));
i__9081__auto___14963 = G__14964;
continue;
} else {
}
break;
}

var argseq__9100__auto__ = (new cljs.core.IndexedSeq(args_arr__9099__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9100__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14949 = cljs.core.seq(kvs);
var chunk__14951 = null;
var count__14952 = (0);
var i__14953 = (0);
while(true){
if((i__14953 < count__14952)){
var vec__14955 = chunk__14951.cljs$core$IIndexed$_nth$arity$2(null,i__14953);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14955,(1),null);
var k_14965__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14965__$1);
} else {
e.attr(k_14965__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14965__$1:v));
}

var G__14966 = seq__14949;
var G__14967 = chunk__14951;
var G__14968 = count__14952;
var G__14969 = (i__14953 + (1));
seq__14949 = G__14966;
chunk__14951 = G__14967;
count__14952 = G__14968;
i__14953 = G__14969;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14949);
if(temp__4657__auto__){
var seq__14949__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14949__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__14949__$1);
var G__14970 = cljs.core.chunk_rest(seq__14949__$1);
var G__14971 = c__8750__auto__;
var G__14972 = cljs.core.count(c__8750__auto__);
var G__14973 = (0);
seq__14949 = G__14970;
chunk__14951 = G__14971;
count__14952 = G__14972;
i__14953 = G__14973;
continue;
} else {
var vec__14958 = cljs.core.first(seq__14949__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14958,(1),null);
var k_14974__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_14974__$1);
} else {
e.attr(k_14974__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14974__$1:v));
}

var G__14975 = cljs.core.next(seq__14949__$1);
var G__14976 = null;
var G__14977 = (0);
var G__14978 = (0);
seq__14949 = G__14975;
chunk__14951 = G__14976;
count__14952 = G__14977;
i__14953 = G__14978;
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

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14944){
var G__14945 = cljs.core.first(seq14944);
var seq14944__$1 = cljs.core.next(seq14944);
var G__14946 = cljs.core.first(seq14944__$1);
var seq14944__$2 = cljs.core.next(seq14944__$1);
var G__14947 = cljs.core.first(seq14944__$2);
var seq14944__$3 = cljs.core.next(seq14944__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14945,G__14946,G__14947,seq14944__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__14984 = arguments.length;
switch (G__14984) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9099__auto__ = [];
var len__9080__auto___14996 = arguments.length;
var i__9081__auto___14997 = (0);
while(true){
if((i__9081__auto___14997 < len__9080__auto___14996)){
args_arr__9099__auto__.push((arguments[i__9081__auto___14997]));

var G__14998 = (i__9081__auto___14997 + (1));
i__9081__auto___14997 = G__14998;
continue;
} else {
}
break;
}

var argseq__9100__auto__ = (new cljs.core.IndexedSeq(args_arr__9099__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9100__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__14985 = cljs.core.seq(kvs);
var chunk__14986 = null;
var count__14987 = (0);
var i__14988 = (0);
while(true){
if((i__14988 < count__14987)){
var vec__14989 = chunk__14986.cljs$core$IIndexed$_nth$arity$2(null,i__14988);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14989,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14989,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14999 = seq__14985;
var G__15000 = chunk__14986;
var G__15001 = count__14987;
var G__15002 = (i__14988 + (1));
seq__14985 = G__14999;
chunk__14986 = G__15000;
count__14987 = G__15001;
i__14988 = G__15002;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14985);
if(temp__4657__auto__){
var seq__14985__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14985__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__14985__$1);
var G__15003 = cljs.core.chunk_rest(seq__14985__$1);
var G__15004 = c__8750__auto__;
var G__15005 = cljs.core.count(c__8750__auto__);
var G__15006 = (0);
seq__14985 = G__15003;
chunk__14986 = G__15004;
count__14987 = G__15005;
i__14988 = G__15006;
continue;
} else {
var vec__14992 = cljs.core.first(seq__14985__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14992,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14992,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__15007 = cljs.core.next(seq__14985__$1);
var G__15008 = null;
var G__15009 = (0);
var G__15010 = (0);
seq__14985 = G__15007;
chunk__14986 = G__15008;
count__14987 = G__15009;
i__14988 = G__15010;
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

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq14980){
var G__14981 = cljs.core.first(seq14980);
var seq14980__$1 = cljs.core.next(seq14980);
var G__14982 = cljs.core.first(seq14980__$1);
var seq14980__$2 = cljs.core.next(seq14980__$1);
var G__14983 = cljs.core.first(seq14980__$2);
var seq14980__$3 = cljs.core.next(seq14980__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14981,G__14982,G__14983,seq14980__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__15012 = arguments.length;
switch (G__15012) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__15015 = arguments.length;
switch (G__15015) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__15017 = elem;
var G__15018 = cljs.core.cst$kw$attr;
var G__15019 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15017,G__15018,G__15019) : hoplon.core.do_BANG_.call(null,G__15017,G__15018,G__15019));
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
var G__15020__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__15020 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__15021__i = 0, G__15021__a = new Array(arguments.length -  2);
while (G__15021__i < G__15021__a.length) {G__15021__a[G__15021__i] = arguments[G__15021__i + 2]; ++G__15021__i;}
  args = new cljs.core.IndexedSeq(G__15021__a,0,null);
} 
return G__15020__delegate.call(this,elem,_,args);};
G__15020.cljs$lang$maxFixedArity = 2;
G__15020.cljs$lang$applyTo = (function (arglist__15022){
var elem = cljs.core.first(arglist__15022);
arglist__15022 = cljs.core.next(arglist__15022);
var _ = cljs.core.first(arglist__15022);
var args = cljs.core.rest(arglist__15022);
return G__15020__delegate(elem,_,args);
});
G__15020.cljs$core$IFn$_invoke$arity$variadic = G__15020__delegate;
return G__15020;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__15023 = cljs.core.seq(clmap);
var chunk__15024 = null;
var count__15025 = (0);
var i__15026 = (0);
while(true){
if((i__15026 < count__15025)){
var vec__15027 = chunk__15024.cljs$core$IIndexed$_nth$arity$2(null,i__15026);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15027,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15033 = seq__15023;
var G__15034 = chunk__15024;
var G__15035 = count__15025;
var G__15036 = (i__15026 + (1));
seq__15023 = G__15033;
chunk__15024 = G__15034;
count__15025 = G__15035;
i__15026 = G__15036;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__15023);
if(temp__4657__auto__){
var seq__15023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15023__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__15023__$1);
var G__15037 = cljs.core.chunk_rest(seq__15023__$1);
var G__15038 = c__8750__auto__;
var G__15039 = cljs.core.count(c__8750__auto__);
var G__15040 = (0);
seq__15023 = G__15037;
chunk__15024 = G__15038;
count__15025 = G__15039;
i__15026 = G__15040;
continue;
} else {
var vec__15030 = cljs.core.first(seq__15023__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15030,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15030,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__15041 = cljs.core.next(seq__15023__$1);
var G__15042 = null;
var G__15043 = (0);
var G__15044 = (0);
seq__15023 = G__15041;
chunk__15024 = G__15042;
count__15025 = G__15043;
i__15026 = G__15044;
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
var G__15045 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__15046 = (0);
return setTimeout(G__15045,G__15046);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__15047_15053 = elem;
var G__15048_15054 = cljs.core.cst$kw$focus;
var G__15049_15055 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15047_15053,G__15048_15054,G__15049_15055) : hoplon.core.do_BANG_.call(null,G__15047_15053,G__15048_15054,G__15049_15055));

var G__15050 = elem;
var G__15051 = cljs.core.cst$kw$select;
var G__15052 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__15050,G__15051,G__15052) : hoplon.core.do_BANG_.call(null,G__15050,G__15051,G__15052));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
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
return (function (){var G__15056 = this$__$1.target;
return jQuery(G__15056);
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
