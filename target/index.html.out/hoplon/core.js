// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



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
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14577_SHARP_,p2__14578_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14577_SHARP_,p2__14578_SHARP_.getAttribute("static-id"),p2__14578_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__14580 = arguments.length;
switch (G__14580) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14581_14584 = init;
var G__14582_14585 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14581_14584,G__14582_14585) : f.call(null,G__14581_14584,G__14582_14585));

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
var vec__14586 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__14587 = cljs.core.seq(vec__14586);
var first__14588 = cljs.core.first(seq__14587);
var seq__14587__$1 = cljs.core.next(seq__14587);
var f = first__14588;
var more = seq__14587__$1;
var vec__14589 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14589,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14589,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("28cab3e7803149a5954d38ce261cc8f8")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__14592_SHARP_){
return cljs.core.zipmap(p1__14592_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
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
var or__7916__auto__ = (function (){var and__7904__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__7904__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__7904__auto__;
}
})();
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
var G__14593 = (i + (1));
var G__14594 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__14593;
ret = G__14594;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__14596 = arguments.length;
switch (G__14596) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

var G__14598 = (i + (1));
i = G__14598;
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
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core.node[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8600__auto__.call(null,this$));
} else {
var m__8600__auto____$1 = (hoplon.core.node["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8600__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__14599_14602 = hoplon.core.node;
var G__14600_14603 = "string";
var G__14601_14604 = ((function (G__14599_14602,G__14600_14603){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__14599_14602,G__14600_14603))
;
goog.object.set(G__14599_14602,G__14600_14603,G__14601_14604);
goog.object.set(hoplon.core.INode,"number",true);

var G__14605_14609 = hoplon.core.node;
var G__14606_14610 = "number";
var G__14607_14611 = ((function (G__14605_14609,G__14606_14610){
return (function (this$){
var G__14608 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14608) : hoplon.core.$text.call(null,G__14608));
});})(G__14605_14609,G__14606_14610))
;
goog.object.set(G__14605_14609,G__14606_14610,G__14607_14611);
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
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14614_SHARP_,p2__14613_SHARP_){
if((p2__14613_SHARP_ == null)){
return p1__14614_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__14614_SHARP_,p2__14613_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__14621 = new$__$1;
var vec__14623 = G__14621;
var seq__14624 = cljs.core.seq(vec__14623);
var first__14625 = cljs.core.first(seq__14624);
var seq__14624__$1 = cljs.core.next(seq__14624);
var x = first__14625;
var xs = seq__14624__$1;
var G__14622 = hoplon.core.child_vec(this$);
var vec__14626 = G__14622;
var seq__14627 = cljs.core.seq(vec__14626);
var first__14628 = cljs.core.first(seq__14627);
var seq__14627__$1 = cljs.core.next(seq__14627);
var k = first__14628;
var ks = seq__14627__$1;
var kids = vec__14626;
var G__14621__$1 = G__14621;
var G__14622__$1 = G__14622;
while(true){
var vec__14629 = G__14621__$1;
var seq__14630 = cljs.core.seq(vec__14629);
var first__14631 = cljs.core.first(seq__14630);
var seq__14630__$1 = cljs.core.next(seq__14630);
var x__$1 = first__14631;
var xs__$1 = seq__14630__$1;
var vec__14632 = G__14622__$1;
var seq__14633 = cljs.core.seq(vec__14632);
var first__14634 = cljs.core.first(seq__14633);
var seq__14633__$1 = cljs.core.next(seq__14633);
var k__$1 = first__14634;
var ks__$1 = seq__14633__$1;
var kids__$1 = vec__14632;
if(cljs.core.truth_((function (){var or__7916__auto__ = x__$1;
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
return k__$1;
}
})())){
var G__14635 = xs__$1;
var G__14636 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
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
G__14621__$1 = G__14635;
G__14622__$1 = G__14636;
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
var kids_14637 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_14637;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14637,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
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

var kids_14640 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_14641 = cljs.core.count(cljs.core.deref(kids_14640));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_14640,i_14641,child__$1){
return (function (p1__14639_SHARP_,p2__14638_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14640,cljs.core.assoc,i_14641,p2__14638_SHARP_);
});})(kids_14640,i_14641,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14640,cljs.core.assoc,i_14641,child__$1);
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

if(cljs.core.truth_((function (){var and__7904__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7904__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__7904__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__7904__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__7904__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__7904__auto__;
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
return (function (p1__14642_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14642_SHARP_));
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
return (function (p1__14643_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__14643_SHARP_], 0)));
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
return (function (p1__14644_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14644_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14645 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14646 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14647 = (function (){var and__7904__auto__ = attr_14646;
if(cljs.core.truth_(and__7904__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_14646),kk_14645);
} else {
return and__7904__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14647)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14646,cljs.core.assoc,kk_14645,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14648_SHARP_){
return p1__14648_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14649_SHARP_){
return p1__14649_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14650_SHARP_){
return p1__14650_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14651_SHARP_){
return p1__14651_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8600__auto__.call(null,this$,kvs));
} else {
var m__8600__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8600__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8600__auto__.call(null,this$,kvs));
} else {
var m__8600__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__8600__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8600__auto__.call(null,this$,child));
} else {
var m__8600__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8600__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8600__auto__.call(null,this$,child));
} else {
var m__8600__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__8600__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8600__auto__.call(null,this$,new$,existing));
} else {
var m__8600__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8600__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8600__auto__.call(null,this$,new$,existing));
} else {
var m__8600__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__8600__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__14657 = arguments.length;
switch (G__14657) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9099__auto__ = [];
var len__9080__auto___14659 = arguments.length;
var i__9081__auto___14660 = (0);
while(true){
if((i__9081__auto___14660 < len__9080__auto___14659)){
args_arr__9099__auto__.push((arguments[i__9081__auto___14660]));

var G__14661 = (i__9081__auto___14660 + (1));
i__9081__auto___14660 = G__14661;
continue;
} else {
}
break;
}

var argseq__9100__auto__ = (new cljs.core.IndexedSeq(args_arr__9099__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9100__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14653){
var G__14654 = cljs.core.first(seq14653);
var seq14653__$1 = cljs.core.next(seq14653);
var G__14655 = cljs.core.first(seq14653__$1);
var seq14653__$2 = cljs.core.next(seq14653__$1);
var G__14656 = cljs.core.first(seq14653__$2);
var seq14653__$3 = cljs.core.next(seq14653__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14654,G__14655,G__14656,seq14653__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14667 = arguments.length;
switch (G__14667) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9099__auto__ = [];
var len__9080__auto___14669 = arguments.length;
var i__9081__auto___14670 = (0);
while(true){
if((i__9081__auto___14670 < len__9080__auto___14669)){
args_arr__9099__auto__.push((arguments[i__9081__auto___14670]));

var G__14671 = (i__9081__auto___14670 + (1));
i__9081__auto___14670 = G__14671;
continue;
} else {
}
break;
}

var argseq__9100__auto__ = (new cljs.core.IndexedSeq(args_arr__9099__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9100__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14663){
var G__14664 = cljs.core.first(seq14663);
var seq14663__$1 = cljs.core.next(seq14663);
var G__14665 = cljs.core.first(seq14663__$1);
var seq14663__$2 = cljs.core.next(seq14663__$1);
var G__14666 = cljs.core.first(seq14663__$2);
var seq14663__$3 = cljs.core.next(seq14663__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14664,G__14665,G__14666,seq14663__$3);
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

/**
 * @interface
 */
hoplon.core.ICustomAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__8599__auto__ = (((this$ == null))?null:this$);
var m__8600__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__8599__auto__)]);
if(!((m__8600__auto__ == null))){
return (m__8600__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8600__auto__.call(null,this$,elem,value));
} else {
var m__8600__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__8600__auto____$1 == null))){
return (m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8600__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__8600__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("ICustomAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$ICustomAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.ICustomAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$ICustomAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__14674_SHARP_,p2__14673_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,p2__14673_SHARP_) : hoplon.core.do_BANG_.call(null,elem,this$__$1,p2__14673_SHARP_));
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.on_BANG_.call(null,elem,this$__$1,value));
} else {
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$__$1,value) : hoplon.core.do_BANG_.call(null,elem,this$__$1,value));

}
}
});
hoplon.core.is_ie8 = cljs.core.not(goog.object.get(window,"Node"));
hoplon.core._head_STAR_ = ((!(hoplon.core.is_ie8))?(function (p1__14675_SHARP_){
return p1__14675_SHARP_.head;
}):(function (p1__14676_SHARP_){
return p1__14676_SHARP_.documentElement.firstChild;
}));
hoplon.core.vector_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14677_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14677_SHARP_);
}catch (e14678){if((e14678 instanceof Error)){
var _ = e14678;
return null;
} else {
throw e14678;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((!(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14679_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14679_SHARP_);
}catch (e14680){if((e14680 instanceof Error)){
var _ = e14680;
return null;
} else {
throw e14680;

}
}}));
/**
 * Like cljs.core/nth but returns nil or not found if the index is outside the coll
 */
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var G__14682 = arguments.length;
switch (G__14682) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14683){if((e14683 instanceof Error)){
var _ = e14683;
return not_found;
} else {
throw e14683;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__14686 = arguments.length;
switch (G__14686) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__14688 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14689 = (0);
return setTimeout(G__14688,G__14689);
} else {
var temp__4655__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__4655__auto__)){
var v = temp__4655__auto__;
return v.push(f);
} else {
var G__14690_14708 = this$;
var G__14691_14709 = "_hoplonWhenDom";
var G__14692_14710 = [f];
goog.object.set(G__14690_14708,G__14691_14709,G__14692_14710);

var G__14693 = ((function (temp__4655__auto__){
return (function (){
var fexpr__14701 = ((function (temp__4655__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__14702 = ((function (temp__4655__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__4655__auto__))
;
var G__14703 = (20);
return setTimeout(G__14702,G__14703);
} else {
var seq__14704_14711 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__14705_14712 = null;
var count__14706_14713 = (0);
var i__14707_14714 = (0);
while(true){
if((i__14707_14714 < count__14706_14713)){
var f_14715__$1 = chunk__14705_14712.cljs$core$IIndexed$_nth$arity$2(null,i__14707_14714);
(f_14715__$1.cljs$core$IFn$_invoke$arity$0 ? f_14715__$1.cljs$core$IFn$_invoke$arity$0() : f_14715__$1.call(null));

var G__14716 = seq__14704_14711;
var G__14717 = chunk__14705_14712;
var G__14718 = count__14706_14713;
var G__14719 = (i__14707_14714 + (1));
seq__14704_14711 = G__14716;
chunk__14705_14712 = G__14717;
count__14706_14713 = G__14718;
i__14707_14714 = G__14719;
continue;
} else {
var temp__4657__auto___14720 = cljs.core.seq(seq__14704_14711);
if(temp__4657__auto___14720){
var seq__14704_14721__$1 = temp__4657__auto___14720;
if(cljs.core.chunked_seq_QMARK_(seq__14704_14721__$1)){
var c__8750__auto___14722 = cljs.core.chunk_first(seq__14704_14721__$1);
var G__14723 = cljs.core.chunk_rest(seq__14704_14721__$1);
var G__14724 = c__8750__auto___14722;
var G__14725 = cljs.core.count(c__8750__auto___14722);
var G__14726 = (0);
seq__14704_14711 = G__14723;
chunk__14705_14712 = G__14724;
count__14706_14713 = G__14725;
i__14707_14714 = G__14726;
continue;
} else {
var f_14727__$1 = cljs.core.first(seq__14704_14721__$1);
(f_14727__$1.cljs$core$IFn$_invoke$arity$0 ? f_14727__$1.cljs$core$IFn$_invoke$arity$0() : f_14727__$1.call(null));

var G__14728 = cljs.core.next(seq__14704_14721__$1);
var G__14729 = null;
var G__14730 = (0);
var G__14731 = (0);
seq__14704_14711 = G__14728;
chunk__14705_14712 = G__14729;
count__14706_14713 = G__14730;
i__14707_14714 = G__14731;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__4655__auto__))
;
return fexpr__14701();
});})(temp__4655__auto__))
;
var G__14694 = (0);
return setTimeout(G__14693,G__14694);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14738 = args;
var vec__14739 = G__14738;
var seq__14740 = cljs.core.seq(vec__14739);
var first__14741 = cljs.core.first(seq__14740);
var seq__14740__$1 = cljs.core.next(seq__14740);
var arg = first__14741;
var args__$1 = seq__14740__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14738__$1 = G__14738;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14742 = G__14738__$1;
var seq__14743 = cljs.core.seq(vec__14742);
var first__14744 = cljs.core.first(seq__14743);
var seq__14743__$1 = cljs.core.next(seq__14743);
var arg__$1 = first__14744;
var args__$2 = seq__14743__$1;
if(cljs.core.not((function (){var or__7916__auto__ = arg__$1;
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14745 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14738__$1,attr__$2,kids__$2,vec__14742,seq__14743,first__14744,seq__14743__$1,arg__$1,args__$2,attr,kids,G__14738,vec__14739,seq__14740,first__14741,seq__14740__$1,arg,args__$1){
return (function (p1__14732_SHARP_,p2__14733_SHARP_,p3__14734_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14732_SHARP_,p2__14733_SHARP_,p3__14734_SHARP_);
});})(attr__$1,kids__$1,G__14738__$1,attr__$2,kids__$2,vec__14742,seq__14743,first__14744,seq__14743__$1,arg__$1,args__$2,attr,kids,G__14738,vec__14739,seq__14740,first__14741,seq__14740__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14746 = kids__$2;
var G__14747 = args__$2;
attr__$1 = G__14745;
kids__$1 = G__14746;
G__14738__$1 = G__14747;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__14748 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14749 = kids__$2;
var G__14750 = cljs.core.rest(args__$2);
attr__$1 = G__14748;
kids__$1 = G__14749;
G__14738__$1 = G__14750;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14751 = attr__$2;
var G__14752 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14753 = args__$2;
attr__$1 = G__14751;
kids__$1 = G__14752;
G__14738__$1 = G__14753;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14754 = attr__$2;
var G__14755 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__14756 = args__$2;
attr__$1 = G__14754;
kids__$1 = G__14755;
G__14738__$1 = G__14756;
continue;
} else {
var G__14757 = attr__$2;
var G__14758 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14759 = args__$2;
attr__$1 = G__14757;
kids__$1 = G__14758;
G__14738__$1 = G__14759;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__14761_SHARP_,p2__14760_SHARP_,p3__14762_SHARP_){
hoplon.core._attr_BANG_(p2__14760_SHARP_,p1__14761_SHARP_,p3__14762_SHARP_);

return p1__14761_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14763){
var vec__14764 = p__14763;
var seq__14765 = cljs.core.seq(vec__14764);
var first__14766 = cljs.core.first(seq__14765);
var seq__14765__$1 = cljs.core.next(seq__14765);
var child_cell = first__14766;
var _ = seq__14765__$1;
var kids = vec__14764;
var this$__$1 = this$;
var seq__14767_14771 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__14768_14772 = null;
var count__14769_14773 = (0);
var i__14770_14774 = (0);
while(true){
if((i__14770_14774 < count__14769_14773)){
var x_14775 = chunk__14768_14772.cljs$core$IIndexed$_nth$arity$2(null,i__14770_14774);
var temp__4657__auto___14776 = hoplon.core.__GT_node(x_14775);
if(cljs.core.truth_(temp__4657__auto___14776)){
var x_14777__$1 = temp__4657__auto___14776;
hoplon.core.append_child_BANG_(this$__$1,x_14777__$1);
} else {
}

var G__14778 = seq__14767_14771;
var G__14779 = chunk__14768_14772;
var G__14780 = count__14769_14773;
var G__14781 = (i__14770_14774 + (1));
seq__14767_14771 = G__14778;
chunk__14768_14772 = G__14779;
count__14769_14773 = G__14780;
i__14770_14774 = G__14781;
continue;
} else {
var temp__4657__auto___14782 = cljs.core.seq(seq__14767_14771);
if(temp__4657__auto___14782){
var seq__14767_14783__$1 = temp__4657__auto___14782;
if(cljs.core.chunked_seq_QMARK_(seq__14767_14783__$1)){
var c__8750__auto___14784 = cljs.core.chunk_first(seq__14767_14783__$1);
var G__14785 = cljs.core.chunk_rest(seq__14767_14783__$1);
var G__14786 = c__8750__auto___14784;
var G__14787 = cljs.core.count(c__8750__auto___14784);
var G__14788 = (0);
seq__14767_14771 = G__14785;
chunk__14768_14772 = G__14786;
count__14769_14773 = G__14787;
i__14770_14774 = G__14788;
continue;
} else {
var x_14789 = cljs.core.first(seq__14767_14783__$1);
var temp__4657__auto___14790__$1 = hoplon.core.__GT_node(x_14789);
if(cljs.core.truth_(temp__4657__auto___14790__$1)){
var x_14791__$1 = temp__4657__auto___14790__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14791__$1);
} else {
}

var G__14792 = cljs.core.next(seq__14767_14783__$1);
var G__14793 = null;
var G__14794 = (0);
var G__14795 = (0);
seq__14767_14771 = G__14792;
chunk__14768_14772 = G__14793;
count__14769_14773 = G__14794;
i__14770_14774 = G__14795;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() { 
var G__14834__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14797 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14797,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14797,(1),null);
var G__14800 = this$;
hoplon.core.add_attributes_BANG_(G__14800,attr);

hoplon.core.add_children_BANG_(G__14800,kids);

return G__14800;
};
var G__14834 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14835__i = 0, G__14835__a = new Array(arguments.length -  1);
while (G__14835__i < G__14835__a.length) {G__14835__a[G__14835__i] = arguments[G__14835__i + 1]; ++G__14835__i;}
  args = new cljs.core.IndexedSeq(G__14835__a,0,null);
} 
return G__14834__delegate.call(this,self__,args);};
G__14834.cljs$lang$maxFixedArity = 1;
G__14834.cljs$lang$applyTo = (function (arglist__14836){
var self__ = cljs.core.first(arglist__14836);
var args = cljs.core.rest(arglist__14836);
return G__14834__delegate(self__,args);
});
G__14834.cljs$core$IFn$_invoke$arity$variadic = G__14834__delegate;
return G__14834;
})()
;

Element.prototype.apply = (function (self__,args14796){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14796)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14837__delegate = function (args){
var this$ = this;
var vec__14801 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(1),null);
var G__14804 = this$;
hoplon.core.add_attributes_BANG_(G__14804,attr);

hoplon.core.add_children_BANG_(G__14804,kids);

return G__14804;
};
var G__14837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14838__i = 0, G__14838__a = new Array(arguments.length -  0);
while (G__14838__i < G__14838__a.length) {G__14838__a[G__14838__i] = arguments[G__14838__i + 0]; ++G__14838__i;}
  args = new cljs.core.IndexedSeq(G__14838__a,0,null);
} 
return G__14837__delegate.call(this,args);};
G__14837.cljs$lang$maxFixedArity = 0;
G__14837.cljs$lang$applyTo = (function (arglist__14839){
var args = cljs.core.seq(arglist__14839);
return G__14837__delegate(args);
});
G__14837.cljs$core$IFn$_invoke$arity$variadic = G__14837__delegate;
return G__14837;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14805 = cljs.core.seq(kvs);
var chunk__14807 = null;
var count__14808 = (0);
var i__14809 = (0);
while(true){
if((i__14809 < count__14808)){
var vec__14811 = chunk__14807.cljs$core$IIndexed$_nth$arity$2(null,i__14809);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14811,(1),null);
var k_14840__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14840__$1);
} else {
e.setAttribute(k_14840__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14840__$1:v));
}

var G__14841 = seq__14805;
var G__14842 = chunk__14807;
var G__14843 = count__14808;
var G__14844 = (i__14809 + (1));
seq__14805 = G__14841;
chunk__14807 = G__14842;
count__14808 = G__14843;
i__14809 = G__14844;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14805);
if(temp__4657__auto__){
var seq__14805__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14805__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__14805__$1);
var G__14845 = cljs.core.chunk_rest(seq__14805__$1);
var G__14846 = c__8750__auto__;
var G__14847 = cljs.core.count(c__8750__auto__);
var G__14848 = (0);
seq__14805 = G__14845;
chunk__14807 = G__14846;
count__14808 = G__14847;
i__14809 = G__14848;
continue;
} else {
var vec__14814 = cljs.core.first(seq__14805__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
var k_14849__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_14849__$1);
} else {
e.setAttribute(k_14849__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14849__$1:v));
}

var G__14850 = cljs.core.next(seq__14805__$1);
var G__14851 = null;
var G__14852 = (0);
var G__14853 = (0);
seq__14805 = G__14850;
chunk__14807 = G__14851;
count__14808 = G__14852;
i__14809 = G__14853;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14817 = cljs.core.seq(kvs);
var chunk__14818 = null;
var count__14819 = (0);
var i__14820 = (0);
while(true){
if((i__14820 < count__14819)){
var vec__14821 = chunk__14818.cljs$core$IIndexed$_nth$arity$2(null,i__14820);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14821,(1),null);
var G__14824_14854 = e.style;
var G__14825_14855 = cljs.core.name(k);
var G__14826_14856 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14824_14854,G__14825_14855,G__14826_14856);

var G__14857 = seq__14817;
var G__14858 = chunk__14818;
var G__14859 = count__14819;
var G__14860 = (i__14820 + (1));
seq__14817 = G__14857;
chunk__14818 = G__14858;
count__14819 = G__14859;
i__14820 = G__14860;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14817);
if(temp__4657__auto__){
var seq__14817__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14817__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__14817__$1);
var G__14861 = cljs.core.chunk_rest(seq__14817__$1);
var G__14862 = c__8750__auto__;
var G__14863 = cljs.core.count(c__8750__auto__);
var G__14864 = (0);
seq__14817 = G__14861;
chunk__14818 = G__14862;
count__14819 = G__14863;
i__14820 = G__14864;
continue;
} else {
var vec__14827 = cljs.core.first(seq__14817__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14827,(1),null);
var G__14830_14865 = e.style;
var G__14831_14866 = cljs.core.name(k);
var G__14832_14867 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__14830_14865,G__14831_14866,G__14832_14867);

var G__14868 = cljs.core.next(seq__14817__$1);
var G__14869 = null;
var G__14870 = (0);
var G__14871 = (0);
seq__14817 = G__14868;
chunk__14818 = G__14869;
count__14819 = G__14870;
i__14820 = G__14871;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(!(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14833){if((e14833 instanceof Error)){
var _ = e14833;
return null;
} else {
throw e14833;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(elem){
return (function() { 
var G__14875__delegate = function (args){
var vec__14872 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14872,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14872,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14875 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14876__i = 0, G__14876__a = new Array(arguments.length -  0);
while (G__14876__i < G__14876__a.length) {G__14876__a[G__14876__i] = arguments[G__14876__i + 0]; ++G__14876__i;}
  args = new cljs.core.IndexedSeq(G__14876__a,0,null);
} 
return G__14875__delegate.call(this,args);};
G__14875.cljs$lang$maxFixedArity = 0;
G__14875.cljs$lang$applyTo = (function (arglist__14877){
var args = cljs.core.seq(arglist__14877);
return G__14875__delegate(args);
});
G__14875.cljs$core$IFn$_invoke$arity$variadic = G__14875__delegate;
return G__14875;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
var mkelem = (function() { 
var G__14880__delegate = function (rest__14878_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(document.createElement(tag),rest__14878_SHARP_);
};
var G__14880 = function (var_args){
var rest__14878_SHARP_ = null;
if (arguments.length > 0) {
var G__14881__i = 0, G__14881__a = new Array(arguments.length -  0);
while (G__14881__i < G__14881__a.length) {G__14881__a[G__14881__i] = arguments[G__14881__i + 0]; ++G__14881__i;}
  rest__14878_SHARP_ = new cljs.core.IndexedSeq(G__14881__a,0,null);
} 
return G__14880__delegate.call(this,rest__14878_SHARP_);};
G__14880.cljs$lang$maxFixedArity = 0;
G__14880.cljs$lang$applyTo = (function (arglist__14882){
var rest__14878_SHARP_ = cljs.core.seq(arglist__14882);
return G__14880__delegate(rest__14878_SHARP_);
});
G__14880.cljs$core$IFn$_invoke$arity$variadic = G__14880__delegate;
return G__14880;
})()
;
if(!(hoplon.core.is_ie8)){
return mkelem;
} else {
return ((function (mkelem){
return (function() { 
var G__14883__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(mkelem,args);
}catch (e14879){if((e14879 instanceof Error)){
var _ = e14879;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.make_elem_ctor.cljs$core$IFn$_invoke$arity$1("div") : hoplon.core.make_elem_ctor.call(null,"div")),args);
} else {
throw e14879;

}
}};
var G__14883 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14884__i = 0, G__14884__a = new Array(arguments.length -  0);
while (G__14884__i < G__14884__a.length) {G__14884__a[G__14884__i] = arguments[G__14884__i + 0]; ++G__14884__i;}
  args = new cljs.core.IndexedSeq(G__14884__a,0,null);
} 
return G__14883__delegate.call(this,args);};
G__14883.cljs$lang$maxFixedArity = 0;
G__14883.cljs$lang$applyTo = (function (arglist__14885){
var args = cljs.core.seq(arglist__14885);
return G__14883__delegate(args);
});
G__14883.cljs$core$IFn$_invoke$arity$variadic = G__14883__delegate;
return G__14883;
})()
;
;})(mkelem))
}
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9087__auto__ = [];
var len__9080__auto___14887 = arguments.length;
var i__9081__auto___14888 = (0);
while(true){
if((i__9081__auto___14888 < len__9080__auto___14887)){
args__9087__auto__.push((arguments[i__9081__auto___14888]));

var G__14889 = (i__9081__auto___14888 + (1));
i__9081__auto___14888 = G__14889;
continue;
} else {
}
break;
}

var argseq__9088__auto__ = ((((0) < args__9087__auto__.length))?(new cljs.core.IndexedSeq(args__9087__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9088__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hoplon.core.parse_args(args),(0)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14886){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14886));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.make_singleton_ctor((hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core._head_STAR_.cljs$core$IFn$_invoke$arity$1(document) : hoplon.core._head_STAR_.call(null,document)));
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.make_singleton_ctor(document.body);
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.multicol = hoplon.core.make_elem_ctor("multicol");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.html_object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.picture = hoplon.core.make_elem_ctor("picture");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.shadow = hoplon.core.make_elem_ctor("shadow");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.template = hoplon.core.make_elem_ctor("template");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14890_SHARP_){
return document.createTextNode(p1__14890_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14891_SHARP_){
return document.createComment(p1__14891_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__14892 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14893 = (0);
return setTimeout(G__14892,G__14893);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__14894_SHARP_){
var e = p1__14894_SHARP_.target;
if(cljs.core.truth_((function (){var or__7916__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14894_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__8866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8867__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8868__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8869__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8870__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__,hierarchy__8870__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__,hierarchy__8870__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8870__auto__,method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14895 = elem;
var G__14896 = cljs.core.cst$kw$attr;
var G__14897 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14895,G__14896,G__14897) : hoplon.core.do_BANG_.call(null,G__14895,G__14896,G__14897));
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
hoplon.core.on_BANG_ = (function (){var method_table__8866__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8867__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8868__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8869__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8870__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__,hierarchy__8870__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__,hierarchy__8870__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__8870__auto__,method_table__8866__auto__,prefer_table__8867__auto__,method_cache__8868__auto__,cached_hierarchy__8869__auto__));
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
var items_seq = (function (){var fexpr__14902 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__14900,G__14901){
return (G__14900.cljs$core$IFn$_invoke$arity$1 ? G__14900.cljs$core$IFn$_invoke$arity$1(G__14901) : G__14900.call(null,G__14901));
});})(on_deck))
);
return (fexpr__14902.cljs$core$IFn$_invoke$arity$2 ? fexpr__14902.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__14902.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14898_SHARP_){
var fexpr__14906 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__14904,G__14905,G__14903){
return (G__14903.cljs$core$IFn$_invoke$arity$2 ? G__14903.cljs$core$IFn$_invoke$arity$2(G__14904,G__14905) : G__14903.call(null,G__14904,G__14905));
});})(on_deck,items_seq))
);
return (fexpr__14906.cljs$core$IFn$_invoke$arity$3 ? fexpr__14906.cljs$core$IFn$_invoke$arity$3(items_seq,p1__14898_SHARP_,hoplon.core.safe_nth) : fexpr__14906.call(null,items_seq,p1__14898_SHARP_,hoplon.core.safe_nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14899_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__14899_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14899_SHARP_,cljs.core.rest);

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
var seq__14907 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14908 = null;
var count__14909 = (0);
var i__14910 = (0);
while(true){
if((i__14910 < count__14909)){
var i = chunk__14908.cljs$core$IIndexed$_nth$arity$2(null,i__14910);
var e_14913 = (function (){var or__7916__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
var G__14911 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14911) : tpl.call(null,G__14911));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14913);

var G__14914 = seq__14907;
var G__14915 = chunk__14908;
var G__14916 = count__14909;
var G__14917 = (i__14910 + (1));
seq__14907 = G__14914;
chunk__14908 = G__14915;
count__14909 = G__14916;
i__14910 = G__14917;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14907);
if(temp__4657__auto__){
var seq__14907__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14907__$1)){
var c__8750__auto__ = cljs.core.chunk_first(seq__14907__$1);
var G__14918 = cljs.core.chunk_rest(seq__14907__$1);
var G__14919 = c__8750__auto__;
var G__14920 = cljs.core.count(c__8750__auto__);
var G__14921 = (0);
seq__14907 = G__14918;
chunk__14908 = G__14919;
count__14909 = G__14920;
i__14910 = G__14921;
continue;
} else {
var i = cljs.core.first(seq__14907__$1);
var e_14922 = (function (){var or__7916__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
var G__14912 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14912) : tpl.call(null,G__14912));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14922);

var G__14923 = cljs.core.next(seq__14907__$1);
var G__14924 = null;
var G__14925 = (0);
var G__14926 = (0);
seq__14907 = G__14923;
chunk__14908 = G__14924;
count__14909 = G__14925;
i__14910 = G__14926;
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
var n__8856__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__8856__auto__)){
var e_14927 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14927);

var G__14928 = (_ + (1));
_ = G__14928;
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
var args__9087__auto__ = [];
var len__9080__auto___14938 = arguments.length;
var i__9081__auto___14939 = (0);
while(true){
if((i__9081__auto___14939 < len__9080__auto___14938)){
args__9087__auto__.push((arguments[i__9081__auto___14939]));

var G__14940 = (i__9081__auto___14939 + (1));
i__9081__auto___14939 = G__14940;
continue;
} else {
}
break;
}

var argseq__9088__auto__ = ((((0) < args__9087__auto__.length))?(new cljs.core.IndexedSeq(args__9087__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9088__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14930){
var vec__14931 = p__14930;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14931,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__14937 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__14931,default$){
return (function (G__14934,G__14936,G__14935){
var or__7916__auto__ = (function (){var and__7904__auto__ = (G__14934.cljs$core$IFn$_invoke$arity$1 ? G__14934.cljs$core$IFn$_invoke$arity$1(G__14935) : G__14934.call(null,G__14935));
if(cljs.core.truth_(and__7904__auto__)){
return G__14935;
} else {
return and__7904__auto__;
}
})();
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
return G__14936;
}
});})(c,vec__14931,default$))
);
return (fexpr__14937.cljs$core$IFn$_invoke$arity$3 ? fexpr__14937.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__14937.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__14931,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__14931,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14929){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14929));
});

