// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19037_SHARP_,p2__19038_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19037_SHARP_,p2__19038_SHARP_.getAttribute("static-id"),p2__19038_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__19040 = arguments.length;
switch (G__19040) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__19041_19044 = init;
var G__19042_19045 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19041_19044,G__19042_19045) : f.call(null,G__19041_19044,G__19042_19045));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__19046 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__19047 = cljs.core.seq(vec__19046);
var first__19048 = cljs.core.first(seq__19047);
var seq__19047__$1 = cljs.core.next(seq__19047);
var f = first__19048;
var more = seq__19047__$1;
var vec__19049 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19049,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("fe20bd0a41cb44cd91c03c995c30e422")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__19052_SHARP_){
return cljs.core.zipmap(p1__19052_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8630__auto__ = (function (){var and__8618__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8618__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8618__auto__;
}
})();
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
var G__19053 = (i + (1));
var G__19054 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__19053;
ret = G__19054;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__19056 = arguments.length;
switch (G__19056) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__19058 = (i + (1));
i = G__19058;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core.node[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9364__auto__.call(null,this$));
} else {
var m__9364__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9364__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__19059_19062 = hoplon.core.node;
var G__19060_19063 = "string";
var G__19061_19064 = ((function (G__19059_19062,G__19060_19063){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__19059_19062,G__19060_19063))
;
goog.object.set(G__19059_19062,G__19060_19063,G__19061_19064);
goog.object.set(hoplon.core.INode,"number",true);

var G__19065_19069 = hoplon.core.node;
var G__19066_19070 = "number";
var G__19067_19071 = ((function (G__19065_19069,G__19066_19070){
return (function (this$){
var G__19068 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__19068) : hoplon.core.$text.call(null,G__19068));
});})(G__19065_19069,G__19066_19070))
;
goog.object.set(G__19065_19069,G__19066_19070,G__19067_19071);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__19074_SHARP_,p2__19073_SHARP_){
if((p2__19073_SHARP_ == null)){
return p1__19074_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__19074_SHARP_,p2__19073_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__19081 = new$__$1;
var vec__19083 = G__19081;
var seq__19084 = cljs.core.seq(vec__19083);
var first__19085 = cljs.core.first(seq__19084);
var seq__19084__$1 = cljs.core.next(seq__19084);
var x = first__19085;
var xs = seq__19084__$1;
var G__19082 = hoplon.core.child_vec(this$);
var vec__19086 = G__19082;
var seq__19087 = cljs.core.seq(vec__19086);
var first__19088 = cljs.core.first(seq__19087);
var seq__19087__$1 = cljs.core.next(seq__19087);
var k = first__19088;
var ks = seq__19087__$1;
var kids = vec__19086;
var G__19081__$1 = G__19081;
var G__19082__$1 = G__19082;
while(true){
var vec__19089 = G__19081__$1;
var seq__19090 = cljs.core.seq(vec__19089);
var first__19091 = cljs.core.first(seq__19090);
var seq__19090__$1 = cljs.core.next(seq__19090);
var x__$1 = first__19091;
var xs__$1 = seq__19090__$1;
var vec__19092 = G__19082__$1;
var seq__19093 = cljs.core.seq(vec__19092);
var first__19094 = cljs.core.first(seq__19093);
var seq__19093__$1 = cljs.core.next(seq__19093);
var k__$1 = first__19094;
var ks__$1 = seq__19093__$1;
var kids__$1 = vec__19092;
if(cljs.core.truth_((function (){var or__8630__auto__ = x__$1;
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return k__$1;
}
})())){
var G__19095 = xs__$1;
var G__19096 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__19081__$1 = G__19095;
G__19082__$1 = G__19096;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_19097 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_19097;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_19097,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_19100 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_19101 = cljs.core.count(cljs.core.deref(kids_19100));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_19100,i_19101,child__$1){
return (function (p1__19099_SHARP_,p2__19098_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19100,cljs.core.assoc,i_19101,p2__19098_SHARP_);
});})(kids_19100,i_19101,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_19100,cljs.core.assoc,i_19101,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8618__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8618__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8618__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8618__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8618__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8618__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19102_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__19102_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__19103_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__19103_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__19104_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__19104_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_19105 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_19106 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__19107 = (function (){var and__8618__auto__ = attr_19106;
if(cljs.core.truth_(and__8618__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_19106),kk_19105);
} else {
return and__8618__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__19107)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_19106,cljs.core.assoc,kk_19105,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__19108_SHARP_){
return p1__19108_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__19109_SHARP_){
return p1__19109_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__19110_SHARP_){
return p1__19110_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__19111_SHARP_){
return p1__19111_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9364__auto__.call(null,this$,kvs));
} else {
var m__9364__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9364__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9364__auto__.call(null,this$,kvs));
} else {
var m__9364__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9364__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9364__auto__.call(null,this$,child));
} else {
var m__9364__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9364__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9364__auto__.call(null,this$,child));
} else {
var m__9364__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9364__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9364__auto__.call(null,this$,new$,existing));
} else {
var m__9364__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9364__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9364__auto__.call(null,this$,new$,existing));
} else {
var m__9364__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9364__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__19117 = arguments.length;
switch (G__19117) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9930__auto__ = [];
var len__9907__auto___19119 = arguments.length;
var i__9908__auto___19120 = (0);
while(true){
if((i__9908__auto___19120 < len__9907__auto___19119)){
args_arr__9930__auto__.push((arguments[i__9908__auto___19120]));

var G__19121 = (i__9908__auto___19120 + (1));
i__9908__auto___19120 = G__19121;
continue;
} else {
}
break;
}

var argseq__9931__auto__ = (new cljs.core.IndexedSeq(args_arr__9930__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9931__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19113){
var G__19114 = cljs.core.first(seq19113);
var seq19113__$1 = cljs.core.next(seq19113);
var G__19115 = cljs.core.first(seq19113__$1);
var seq19113__$2 = cljs.core.next(seq19113__$1);
var G__19116 = cljs.core.first(seq19113__$2);
var seq19113__$3 = cljs.core.next(seq19113__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19114,G__19115,G__19116,seq19113__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__19127 = arguments.length;
switch (G__19127) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9930__auto__ = [];
var len__9907__auto___19129 = arguments.length;
var i__9908__auto___19130 = (0);
while(true){
if((i__9908__auto___19130 < len__9907__auto___19129)){
args_arr__9930__auto__.push((arguments[i__9908__auto___19130]));

var G__19131 = (i__9908__auto___19130 + (1));
i__9908__auto___19130 = G__19131;
continue;
} else {
}
break;
}

var argseq__9931__auto__ = (new cljs.core.IndexedSeq(args_arr__9930__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9931__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq19123){
var G__19124 = cljs.core.first(seq19123);
var seq19123__$1 = cljs.core.next(seq19123);
var G__19125 = cljs.core.first(seq19123__$1);
var seq19123__$2 = cljs.core.next(seq19123__$1);
var G__19126 = cljs.core.first(seq19123__$2);
var seq19123__$3 = cljs.core.next(seq19123__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19124,G__19125,G__19126,seq19123__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts19134_19152 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19134_19152){
return (function (ret__18135__auto__,p__19135){
var vec__19136 = p__19135;
var ___18136__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136,(0),null);
var f__18137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19136,(1),null);
var sym__18138__auto__ = (f__18137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18137__auto__.cljs$core$IFn$_invoke$arity$0() : f__18137__auto__.call(null));
var G__19139 = ret__18135__auto__;
if(cljs.core.truth_(sym__18138__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19139,sym__18138__auto__);
} else {
return G__19139;
}
});})(opts19134_19152))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19134_19152){
return (function (p1__18134__18139__auto__){
var G__19141 = cljs.core.first(p1__18134__18139__auto__);
var fexpr__19140 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19134_19152);
return (fexpr__19140.cljs$core$IFn$_invoke$arity$1 ? fexpr__19140.cljs$core$IFn$_invoke$arity$1(G__19141) : fexpr__19140.call(null,G__19141));
});})(opts19134_19152))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19134_19152){
return (function (){
var checked__18103__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/home/edwlan/.boot/cache/tmp/home/edwlan/github_repos/feed-archive/fbh/p1fznp/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts19134_19152);
if(cljs.core.truth_(checked__18103__auto__)){
hoplon.core._do_BANG_ = checked__18103__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts19134_19152))
], null)))));

var opts19144 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts19144){
return (function (ret__18135__auto__,p__19145){
var vec__19146 = p__19145;
var ___18136__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146,(0),null);
var f__18137__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19146,(1),null);
var sym__18138__auto__ = (f__18137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__18137__auto__.cljs$core$IFn$_invoke$arity$0() : f__18137__auto__.call(null));
var G__19149 = ret__18135__auto__;
if(cljs.core.truth_(sym__18138__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19149,sym__18138__auto__);
} else {
return G__19149;
}
});})(opts19144))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts19144){
return (function (p1__18134__18139__auto__){
var G__19151 = cljs.core.first(p1__18134__18139__auto__);
var fexpr__19150 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts19144);
return (fexpr__19150.cljs$core$IFn$_invoke$arity$1 ? fexpr__19150.cljs$core$IFn$_invoke$arity$1(G__19151) : fexpr__19150.call(null,G__19151));
});})(opts19144))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts19144){
return (function (){
var checked__18103__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/home/edwlan/.boot/cache/tmp/home/edwlan/github_repos/feed-archive/fbh/p1fznp/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts19144);
if(cljs.core.truth_(checked__18103__auto__)){
hoplon.core._on_BANG_ = checked__18103__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts19144))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__9363__auto__ = (((this$ == null))?null:this$);
var m__9364__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__9363__auto__)]);
if(!((m__9364__auto__ == null))){
return (m__9364__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9364__auto__.call(null,this$,elem,value));
} else {
var m__9364__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9364__auto____$1 == null))){
return (m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9364__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9364__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__19155_SHARP_,p2__19154_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__19154_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_(elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__19157 = arguments.length;
switch (G__19157) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__19159 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19160 = (0);
return setTimeout(G__19159,G__19160);
} else {
var temp__5288__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5288__auto__)){
var v = temp__5288__auto__;
return v.push(f);
} else {
var G__19161_19179 = this$;
var G__19162_19180 = "_hoplonWhenDom";
var G__19163_19181 = [f];
goog.object.set(G__19161_19179,G__19162_19180,G__19163_19181);

var G__19164 = ((function (temp__5288__auto__){
return (function (){
var fexpr__19172 = ((function (temp__5288__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__19173 = ((function (temp__5288__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5288__auto__))
;
var G__19174 = (20);
return setTimeout(G__19173,G__19174);
} else {
var seq__19175_19182 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__19176_19183 = null;
var count__19177_19184 = (0);
var i__19178_19185 = (0);
while(true){
if((i__19178_19185 < count__19177_19184)){
var f_19186__$1 = chunk__19176_19183.cljs$core$IIndexed$_nth$arity$2(null,i__19178_19185);
(f_19186__$1.cljs$core$IFn$_invoke$arity$0 ? f_19186__$1.cljs$core$IFn$_invoke$arity$0() : f_19186__$1.call(null));

var G__19187 = seq__19175_19182;
var G__19188 = chunk__19176_19183;
var G__19189 = count__19177_19184;
var G__19190 = (i__19178_19185 + (1));
seq__19175_19182 = G__19187;
chunk__19176_19183 = G__19188;
count__19177_19184 = G__19189;
i__19178_19185 = G__19190;
continue;
} else {
var temp__5290__auto___19191 = cljs.core.seq(seq__19175_19182);
if(temp__5290__auto___19191){
var seq__19175_19192__$1 = temp__5290__auto___19191;
if(cljs.core.chunked_seq_QMARK_(seq__19175_19192__$1)){
var c__9561__auto___19193 = cljs.core.chunk_first(seq__19175_19192__$1);
var G__19194 = cljs.core.chunk_rest(seq__19175_19192__$1);
var G__19195 = c__9561__auto___19193;
var G__19196 = cljs.core.count(c__9561__auto___19193);
var G__19197 = (0);
seq__19175_19182 = G__19194;
chunk__19176_19183 = G__19195;
count__19177_19184 = G__19196;
i__19178_19185 = G__19197;
continue;
} else {
var f_19198__$1 = cljs.core.first(seq__19175_19192__$1);
(f_19198__$1.cljs$core$IFn$_invoke$arity$0 ? f_19198__$1.cljs$core$IFn$_invoke$arity$0() : f_19198__$1.call(null));

var G__19199 = cljs.core.next(seq__19175_19192__$1);
var G__19200 = null;
var G__19201 = (0);
var G__19202 = (0);
seq__19175_19182 = G__19199;
chunk__19176_19183 = G__19200;
count__19177_19184 = G__19201;
i__19178_19185 = G__19202;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5288__auto__))
;
return fexpr__19172();
});})(temp__5288__auto__))
;
var G__19165 = (0);
return setTimeout(G__19164,G__19165);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__19211 = args;
var vec__19212 = G__19211;
var seq__19213 = cljs.core.seq(vec__19212);
var first__19214 = cljs.core.first(seq__19213);
var seq__19213__$1 = cljs.core.next(seq__19213);
var arg = first__19214;
var args__$1 = seq__19213__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__19211__$1 = G__19211;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__19215 = G__19211__$1;
var seq__19216 = cljs.core.seq(vec__19215);
var first__19217 = cljs.core.first(seq__19216);
var seq__19216__$1 = cljs.core.next(seq__19216);
var arg__$1 = first__19217;
var args__$2 = seq__19216__$1;
if(cljs.core.not((function (){var or__8630__auto__ = arg__$1;
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__19218 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__19211__$1,attr__$2,kids__$2,vec__19215,seq__19216,first__19217,seq__19216__$1,arg__$1,args__$2,attr,kids,G__19211,vec__19212,seq__19213,first__19214,seq__19213__$1,arg,args__$1){
return (function (p1__19203_SHARP_,p2__19204_SHARP_,p3__19205_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19203_SHARP_,p2__19204_SHARP_,p3__19205_SHARP_);
});})(attr__$1,kids__$1,G__19211__$1,attr__$2,kids__$2,vec__19215,seq__19216,first__19217,seq__19216__$1,arg__$1,args__$2,attr,kids,G__19211,vec__19212,seq__19213,first__19214,seq__19213__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19219 = kids__$2;
var G__19220 = args__$2;
attr__$1 = G__19218;
kids__$1 = G__19219;
G__19211__$1 = G__19220;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__19221 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__19211__$1,attr__$2,kids__$2,vec__19215,seq__19216,first__19217,seq__19216__$1,arg__$1,args__$2,attr,kids,G__19211,vec__19212,seq__19213,first__19214,seq__19213__$1,arg,args__$1){
return (function (p1__19206_SHARP_,p2__19207_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__19206_SHARP_,p2__19207_SHARP_,true);
});})(attr__$1,kids__$1,G__19211__$1,attr__$2,kids__$2,vec__19215,seq__19216,first__19217,seq__19216__$1,arg__$1,args__$2,attr,kids,G__19211,vec__19212,seq__19213,first__19214,seq__19213__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__19222 = kids__$2;
var G__19223 = args__$2;
attr__$1 = G__19221;
kids__$1 = G__19222;
G__19211__$1 = G__19223;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__19224 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__19225 = kids__$2;
var G__19226 = cljs.core.rest(args__$2);
attr__$1 = G__19224;
kids__$1 = G__19225;
G__19211__$1 = G__19226;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__19227 = attr__$2;
var G__19228 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19229 = args__$2;
attr__$1 = G__19227;
kids__$1 = G__19228;
G__19211__$1 = G__19229;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__19230 = attr__$2;
var G__19231 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__19232 = args__$2;
attr__$1 = G__19230;
kids__$1 = G__19231;
G__19211__$1 = G__19232;
continue;
} else {
var G__19233 = attr__$2;
var G__19234 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__19235 = args__$2;
attr__$1 = G__19233;
kids__$1 = G__19234;
G__19211__$1 = G__19235;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__19237_SHARP_,p2__19236_SHARP_,p3__19238_SHARP_){
hoplon.core._attr_BANG_(p2__19236_SHARP_,p1__19237_SHARP_,p3__19238_SHARP_);

return p1__19237_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__19239){
var vec__19240 = p__19239;
var seq__19241 = cljs.core.seq(vec__19240);
var first__19242 = cljs.core.first(seq__19241);
var seq__19241__$1 = cljs.core.next(seq__19241);
var child_cell = first__19242;
var _ = seq__19241__$1;
var kids = vec__19240;
var this$__$1 = this$;
var seq__19243_19247 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__19244_19248 = null;
var count__19245_19249 = (0);
var i__19246_19250 = (0);
while(true){
if((i__19246_19250 < count__19245_19249)){
var x_19251 = chunk__19244_19248.cljs$core$IIndexed$_nth$arity$2(null,i__19246_19250);
var temp__5290__auto___19252 = hoplon.core.__GT_node(x_19251);
if(cljs.core.truth_(temp__5290__auto___19252)){
var x_19253__$1 = temp__5290__auto___19252;
hoplon.core.append_child_BANG_(this$__$1,x_19253__$1);
} else {
}

var G__19254 = seq__19243_19247;
var G__19255 = chunk__19244_19248;
var G__19256 = count__19245_19249;
var G__19257 = (i__19246_19250 + (1));
seq__19243_19247 = G__19254;
chunk__19244_19248 = G__19255;
count__19245_19249 = G__19256;
i__19246_19250 = G__19257;
continue;
} else {
var temp__5290__auto___19258 = cljs.core.seq(seq__19243_19247);
if(temp__5290__auto___19258){
var seq__19243_19259__$1 = temp__5290__auto___19258;
if(cljs.core.chunked_seq_QMARK_(seq__19243_19259__$1)){
var c__9561__auto___19260 = cljs.core.chunk_first(seq__19243_19259__$1);
var G__19261 = cljs.core.chunk_rest(seq__19243_19259__$1);
var G__19262 = c__9561__auto___19260;
var G__19263 = cljs.core.count(c__9561__auto___19260);
var G__19264 = (0);
seq__19243_19247 = G__19261;
chunk__19244_19248 = G__19262;
count__19245_19249 = G__19263;
i__19246_19250 = G__19264;
continue;
} else {
var x_19265 = cljs.core.first(seq__19243_19259__$1);
var temp__5290__auto___19266__$1 = hoplon.core.__GT_node(x_19265);
if(cljs.core.truth_(temp__5290__auto___19266__$1)){
var x_19267__$1 = temp__5290__auto___19266__$1;
hoplon.core.append_child_BANG_(this$__$1,x_19267__$1);
} else {
}

var G__19268 = cljs.core.next(seq__19243_19259__$1);
var G__19269 = null;
var G__19270 = (0);
var G__19271 = (0);
seq__19243_19247 = G__19268;
chunk__19244_19248 = G__19269;
count__19245_19249 = G__19270;
i__19246_19250 = G__19271;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9914__auto__ = [];
var len__9907__auto___19278 = arguments.length;
var i__9908__auto___19279 = (0);
while(true){
if((i__9908__auto___19279 < len__9907__auto___19278)){
args__9914__auto__.push((arguments[i__9908__auto___19279]));

var G__19280 = (i__9908__auto___19279 + (1));
i__9908__auto___19279 = G__19280;
continue;
} else {
}
break;
}

var argseq__9915__auto__ = ((((1) < args__9914__auto__.length))?(new cljs.core.IndexedSeq(args__9914__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9915__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__19274 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19274,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19274,(1),null);
var G__19277 = this$;
hoplon.core.add_attributes_BANG_(G__19277,attr);

hoplon.core.add_children_BANG_(G__19277,kids);

return G__19277;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq19272){
var G__19273 = cljs.core.first(seq19272);
var seq19272__$1 = cljs.core.next(seq19272);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19273,seq19272__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__19282 = arguments.length;
switch (G__19282) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$.getAttribute(cljs.core.name(k));
} else {
var G__19283 = this$.children;
var G__19284 = k;
return goog.object.get(G__19283,G__19284);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8630__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__19315 = null;
var G__19315__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__19315__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__19315__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__19315__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__19315__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__19315__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__19315__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__19315__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__19315__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__19315__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__19315__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__19315__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__19315__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__19315__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__19315__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__19315__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__19315__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__19315__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__19315__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__19315__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__19315__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__19315__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__19315 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__19315__1.call(this,self__);
case 2:
return G__19315__2.call(this,self__,a);
case 3:
return G__19315__3.call(this,self__,a,b);
case 4:
return G__19315__4.call(this,self__,a,b,c);
case 5:
return G__19315__5.call(this,self__,a,b,c,d);
case 6:
return G__19315__6.call(this,self__,a,b,c,d,e);
case 7:
return G__19315__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__19315__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__19315__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__19315__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__19315__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__19315__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__19315__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__19315__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__19315__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__19315__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__19315__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__19315__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__19315__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__19315__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__19315__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__19315__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__19315.cljs$core$IFn$_invoke$arity$1 = G__19315__1;
G__19315.cljs$core$IFn$_invoke$arity$2 = G__19315__2;
G__19315.cljs$core$IFn$_invoke$arity$3 = G__19315__3;
G__19315.cljs$core$IFn$_invoke$arity$4 = G__19315__4;
G__19315.cljs$core$IFn$_invoke$arity$5 = G__19315__5;
G__19315.cljs$core$IFn$_invoke$arity$6 = G__19315__6;
G__19315.cljs$core$IFn$_invoke$arity$7 = G__19315__7;
G__19315.cljs$core$IFn$_invoke$arity$8 = G__19315__8;
G__19315.cljs$core$IFn$_invoke$arity$9 = G__19315__9;
G__19315.cljs$core$IFn$_invoke$arity$10 = G__19315__10;
G__19315.cljs$core$IFn$_invoke$arity$11 = G__19315__11;
G__19315.cljs$core$IFn$_invoke$arity$12 = G__19315__12;
G__19315.cljs$core$IFn$_invoke$arity$13 = G__19315__13;
G__19315.cljs$core$IFn$_invoke$arity$14 = G__19315__14;
G__19315.cljs$core$IFn$_invoke$arity$15 = G__19315__15;
G__19315.cljs$core$IFn$_invoke$arity$16 = G__19315__16;
G__19315.cljs$core$IFn$_invoke$arity$17 = G__19315__17;
G__19315.cljs$core$IFn$_invoke$arity$18 = G__19315__18;
G__19315.cljs$core$IFn$_invoke$arity$19 = G__19315__19;
G__19315.cljs$core$IFn$_invoke$arity$20 = G__19315__20;
G__19315.cljs$core$IFn$_invoke$arity$21 = G__19315__21;
G__19315.cljs$core$IFn$_invoke$arity$22 = G__19315__22;
return G__19315;
})()
;

Element.prototype.apply = (function (self__,args19286){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args19286)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19287 = cljs.core.seq(kvs);
var chunk__19289 = null;
var count__19290 = (0);
var i__19291 = (0);
while(true){
if((i__19291 < count__19290)){
var vec__19293 = chunk__19289.cljs$core$IIndexed$_nth$arity$2(null,i__19291);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19293,(1),null);
var k_19316__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19316__$1);
} else {
e.setAttribute(k_19316__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19316__$1:v));
}

var G__19317 = seq__19287;
var G__19318 = chunk__19289;
var G__19319 = count__19290;
var G__19320 = (i__19291 + (1));
seq__19287 = G__19317;
chunk__19289 = G__19318;
count__19290 = G__19319;
i__19291 = G__19320;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19287);
if(temp__5290__auto__){
var seq__19287__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19287__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19287__$1);
var G__19321 = cljs.core.chunk_rest(seq__19287__$1);
var G__19322 = c__9561__auto__;
var G__19323 = cljs.core.count(c__9561__auto__);
var G__19324 = (0);
seq__19287 = G__19321;
chunk__19289 = G__19322;
count__19290 = G__19323;
i__19291 = G__19324;
continue;
} else {
var vec__19296 = cljs.core.first(seq__19287__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19296,(1),null);
var k_19325__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19325__$1);
} else {
e.setAttribute(k_19325__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19325__$1:v));
}

var G__19326 = cljs.core.next(seq__19287__$1);
var G__19327 = null;
var G__19328 = (0);
var G__19329 = (0);
seq__19287 = G__19326;
chunk__19289 = G__19327;
count__19290 = G__19328;
i__19291 = G__19329;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__19299 = cljs.core.seq(kvs);
var chunk__19300 = null;
var count__19301 = (0);
var i__19302 = (0);
while(true){
if((i__19302 < count__19301)){
var vec__19303 = chunk__19300.cljs$core$IIndexed$_nth$arity$2(null,i__19302);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(1),null);
var G__19306_19330 = e.style;
var G__19307_19331 = cljs.core.name(k);
var G__19308_19332 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19306_19330,G__19307_19331,G__19308_19332);

var G__19333 = seq__19299;
var G__19334 = chunk__19300;
var G__19335 = count__19301;
var G__19336 = (i__19302 + (1));
seq__19299 = G__19333;
chunk__19300 = G__19334;
count__19301 = G__19335;
i__19302 = G__19336;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19299);
if(temp__5290__auto__){
var seq__19299__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19299__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19299__$1);
var G__19337 = cljs.core.chunk_rest(seq__19299__$1);
var G__19338 = c__9561__auto__;
var G__19339 = cljs.core.count(c__9561__auto__);
var G__19340 = (0);
seq__19299 = G__19337;
chunk__19300 = G__19338;
count__19301 = G__19339;
i__19302 = G__19340;
continue;
} else {
var vec__19309 = cljs.core.first(seq__19299__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(1),null);
var G__19312_19341 = e.style;
var G__19313_19342 = cljs.core.name(k);
var G__19314_19343 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__19312_19341,G__19313_19342,G__19314_19343);

var G__19344 = cljs.core.next(seq__19299__$1);
var G__19345 = null;
var G__19346 = (0);
var G__19347 = (0);
seq__19299 = G__19344;
chunk__19300 = G__19345;
count__19301 = G__19346;
i__19302 = G__19347;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__19351__delegate = function (args){
var vec__19348 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19348,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19348,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19351 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19352__i = 0, G__19352__a = new Array(arguments.length -  0);
while (G__19352__i < G__19352__a.length) {G__19352__a[G__19352__i] = arguments[G__19352__i + 0]; ++G__19352__i;}
  args = new cljs.core.IndexedSeq(G__19352__a,0,null);
} 
return G__19351__delegate.call(this,args);};
G__19351.cljs$lang$maxFixedArity = 0;
G__19351.cljs$lang$applyTo = (function (arglist__19353){
var args = cljs.core.seq(arglist__19353);
return G__19351__delegate(args);
});
G__19351.cljs$core$IFn$_invoke$arity$variadic = G__19351__delegate;
return G__19351;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19357__delegate = function (args){
var vec__19354 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19354,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19354,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19358__i = 0, G__19358__a = new Array(arguments.length -  0);
while (G__19358__i < G__19358__a.length) {G__19358__a[G__19358__i] = arguments[G__19358__i + 0]; ++G__19358__i;}
  args = new cljs.core.IndexedSeq(G__19358__a,0,null);
} 
return G__19357__delegate.call(this,args);};
G__19357.cljs$lang$maxFixedArity = 0;
G__19357.cljs$lang$applyTo = (function (arglist__19359){
var args = cljs.core.seq(arglist__19359);
return G__19357__delegate(args);
});
G__19357.cljs$core$IFn$_invoke$arity$variadic = G__19357__delegate;
return G__19357;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9914__auto__ = [];
var len__9907__auto___19361 = arguments.length;
var i__9908__auto___19362 = (0);
while(true){
if((i__9908__auto___19362 < len__9907__auto___19361)){
args__9914__auto__.push((arguments[i__9908__auto___19362]));

var G__19363 = (i__9908__auto___19362 + (1));
i__9908__auto___19362 = G__19363;
continue;
} else {
}
break;
}

var argseq__9915__auto__ = ((((0) < args__9914__auto__.length))?(new cljs.core.IndexedSeq(args__9914__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9915__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19360){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19360));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton(document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton(document.body);
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19364_SHARP_){
return document.createTextNode(p1__19364_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19365_SHARP_){
return document.createComment(p1__19365_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19366 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19367 = (0);
return setTimeout(G__19366,G__19367);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19368_SHARP_){
var e = p1__19368_SHARP_.target;
if(cljs.core.truth_((function (){var or__8630__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19368_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9683__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9684__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9685__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9686__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__,hierarchy__9687__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__,hierarchy__9687__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9687__auto__,method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19369 = elem;
var G__19370 = cljs.core.cst$kw$attr;
var G__19371 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19369,G__19370,G__19371) : hoplon.core.do_BANG_.call(null,G__19369,G__19370,G__19371));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9683__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9684__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9685__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9686__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9687__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__,hierarchy__9687__auto__){
return (function (elem,key,val){
var temp__5288__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5288__auto__)){
var n = temp__5288__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__,hierarchy__9687__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9687__auto__,method_table__9683__auto__,prefer_table__9684__auto__,method_cache__9685__auto__,cached_hierarchy__9686__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19376 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19374,G__19375){
return (G__19374.cljs$core$IFn$_invoke$arity$1 ? G__19374.cljs$core$IFn$_invoke$arity$1(G__19375) : G__19374.call(null,G__19375));
});})(on_deck))
);
return (fexpr__19376.cljs$core$IFn$_invoke$arity$2 ? fexpr__19376.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19376.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19372_SHARP_){
var fexpr__19380 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19378,G__19379,G__19377){
return (G__19377.cljs$core$IFn$_invoke$arity$3 ? G__19377.cljs$core$IFn$_invoke$arity$3(G__19378,G__19379,null) : G__19377.call(null,G__19378,G__19379,null));
});})(on_deck,items_seq))
);
return (fexpr__19380.cljs$core$IFn$_invoke$arity$3 ? fexpr__19380.cljs$core$IFn$_invoke$arity$3(items_seq,p1__19372_SHARP_,cljs.core.nth) : fexpr__19380.call(null,items_seq,p1__19372_SHARP_,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19373_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19373_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19373_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19381 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19382 = null;
var count__19383 = (0);
var i__19384 = (0);
while(true){
if((i__19384 < count__19383)){
var i = chunk__19382.cljs$core$IIndexed$_nth$arity$2(null,i__19384);
var e_19387 = (function (){var or__8630__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
var G__19385 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19385) : tpl.call(null,G__19385));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19387);

var G__19388 = seq__19381;
var G__19389 = chunk__19382;
var G__19390 = count__19383;
var G__19391 = (i__19384 + (1));
seq__19381 = G__19388;
chunk__19382 = G__19389;
count__19383 = G__19390;
i__19384 = G__19391;
continue;
} else {
var temp__5290__auto__ = cljs.core.seq(seq__19381);
if(temp__5290__auto__){
var seq__19381__$1 = temp__5290__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19381__$1)){
var c__9561__auto__ = cljs.core.chunk_first(seq__19381__$1);
var G__19392 = cljs.core.chunk_rest(seq__19381__$1);
var G__19393 = c__9561__auto__;
var G__19394 = cljs.core.count(c__9561__auto__);
var G__19395 = (0);
seq__19381 = G__19392;
chunk__19382 = G__19393;
count__19383 = G__19394;
i__19384 = G__19395;
continue;
} else {
var i = cljs.core.first(seq__19381__$1);
var e_19396 = (function (){var or__8630__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
var G__19386 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19386) : tpl.call(null,G__19386));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19396);

var G__19397 = cljs.core.next(seq__19381__$1);
var G__19398 = null;
var G__19399 = (0);
var G__19400 = (0);
seq__19381 = G__19397;
chunk__19382 = G__19398;
count__19383 = G__19399;
i__19384 = G__19400;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9673__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9673__auto__)){
var e_19401 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19401);

var G__19402 = (_ + (1));
_ = G__19402;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9914__auto__ = [];
var len__9907__auto___19412 = arguments.length;
var i__9908__auto___19413 = (0);
while(true){
if((i__9908__auto___19413 < len__9907__auto___19412)){
args__9914__auto__.push((arguments[i__9908__auto___19413]));

var G__19414 = (i__9908__auto___19413 + (1));
i__9908__auto___19413 = G__19414;
continue;
} else {
}
break;
}

var argseq__9915__auto__ = ((((0) < args__9914__auto__.length))?(new cljs.core.IndexedSeq(args__9914__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9915__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19404){
var vec__19405 = p__19404;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19405,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19411 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19405,default$){
return (function (G__19408,G__19410,G__19409){
var or__8630__auto__ = (function (){var and__8618__auto__ = (G__19408.cljs$core$IFn$_invoke$arity$1 ? G__19408.cljs$core$IFn$_invoke$arity$1(G__19409) : G__19408.call(null,G__19409));
if(cljs.core.truth_(and__8618__auto__)){
return G__19409;
} else {
return and__8618__auto__;
}
})();
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return G__19410;
}
});})(c,vec__19405,default$))
);
return (fexpr__19411.cljs$core$IFn$_invoke$arity$3 ? fexpr__19411.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19411.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19405,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19405,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19403){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19403));
});

