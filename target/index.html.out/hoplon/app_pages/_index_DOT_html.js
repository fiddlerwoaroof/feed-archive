// Compiled by ClojureScript 1.9.908 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.html.sanitizer.HtmlSanitizer');
goog.require('goog.html.sanitizer.HtmlSanitizer.Builder');
goog.require('goog.html.sanitizer.unsafe');
goog.require('goog.html.sanitizer.AttributeWhitelist');
goog.require('goog.string.Const');
goog.require('goog.functions');
goog.require('goog.html.SafeUrl');
goog.require('goog.html.SafeHtml');
goog.require('cljs.pprint');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, ["base-url","http://roachnotes.com","pull-time","","feeds",cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY], null));
hoplon.app_pages._index_DOT_html.base_url = (function (){var c__16030__auto__ = (function (){var fexpr__19556 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19554,G__19555){
return (G__19554.cljs$core$IFn$_invoke$arity$2 ? G__19554.cljs$core$IFn$_invoke$arity$2(G__19555,"base-url") : G__19554.call(null,G__19555,"base-url"));
}));
return (fexpr__19556.cljs$core$IFn$_invoke$arity$2 ? fexpr__19556.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__19556.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
c__16030__auto__.update = ((function (c__16030__auto__){
return (function (p1__19553_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["base-url"], null),p1__19553_SHARP_);
});})(c__16030__auto__))
;

return c__16030__auto__;
})();
hoplon.app_pages._index_DOT_html.pull_time = (function (){var fexpr__19559 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19557,G__19558){
return (G__19557.cljs$core$IFn$_invoke$arity$2 ? G__19557.cljs$core$IFn$_invoke$arity$2(G__19558,"pull-time") : G__19557.call(null,G__19558,"pull-time"));
}));
return (fexpr__19559.cljs$core$IFn$_invoke$arity$2 ? fexpr__19559.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__19559.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.feeds = (function (){var fexpr__19562 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19560,G__19561){
return (G__19560.cljs$core$IFn$_invoke$arity$2 ? G__19560.cljs$core$IFn$_invoke$arity$2(G__19561,"feeds") : G__19560.call(null,G__19561,"feeds"));
}));
return (fexpr__19562.cljs$core$IFn$_invoke$arity$2 ? fexpr__19562.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__19562.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.setup_state = (function hoplon$app_pages$_index_DOT_html$setup_state(base_url){
return (function (){var G__19563 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"/current"].join('');
return fetch(G__19563);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.app_pages._index_DOT_html.state,cljs.core.merge,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
var fexpr__19566_19567 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19565,G__19564){
if(cljs.core.truth_(G__19564)){
return (G__19565.cljs$core$IFn$_invoke$arity$1 ? G__19565.cljs$core$IFn$_invoke$arity$1(G__19564) : G__19565.call(null,G__19564));
} else {
return null;
}
}));
(fexpr__19566_19567.cljs$core$IFn$_invoke$arity$2 ? fexpr__19566_19567.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.setup_state,hoplon.app_pages._index_DOT_html.base_url) : fexpr__19566_19567.call(null,hoplon.app_pages._index_DOT_html.setup_state,hoplon.app_pages._index_DOT_html.base_url));
hoplon.app_pages._index_DOT_html.make_feed_getter = (function hoplon$app_pages$_index_DOT_html$make_feed_getter(out_cell){
return (function (base_url,path){
return (function (){var G__19568 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return fetch(G__19568);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.reset_BANG_(out_cell,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_feed_entry_cells = (function hoplon$app_pages$_index_DOT_html$get_feed_entry_cells(base_url,feed){
var feed_cell = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var items = (function (){var fexpr__19571 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell){
return (function (G__19569,G__19570){
return (G__19569.cljs$core$IFn$_invoke$arity$2 ? G__19569.cljs$core$IFn$_invoke$arity$2(G__19570,"items") : G__19569.call(null,G__19570,"items"));
});})(feed_cell))
);
return (fexpr__19571.cljs$core$IFn$_invoke$arity$2 ? fexpr__19571.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed_cell) : fexpr__19571.call(null,cljs.core.get,feed_cell));
})();
var item_count = (function (){var fexpr__19574 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items){
return (function (G__19573,G__19572){
return (G__19572.cljs$core$IFn$_invoke$arity$1 ? G__19572.cljs$core$IFn$_invoke$arity$1(G__19573) : G__19572.call(null,G__19573));
});})(feed_cell,items))
);
return (fexpr__19574.cljs$core$IFn$_invoke$arity$2 ? fexpr__19574.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__19574.call(null,items,cljs.core.count));
})();
var get_feed = hoplon.app_pages._index_DOT_html.make_feed_getter(feed_cell);
var path = (function (){var fexpr__19577 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed){
return (function (G__19575,G__19576){
return (G__19575.cljs$core$IFn$_invoke$arity$3 ? G__19575.cljs$core$IFn$_invoke$arity$3(G__19576,"path","<No PATH>") : G__19575.call(null,G__19576,"path","<No PATH>"));
});})(feed_cell,items,item_count,get_feed))
);
return (fexpr__19577.cljs$core$IFn$_invoke$arity$2 ? fexpr__19577.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__19577.call(null,cljs.core.get,feed));
})();
var url = (function (){var fexpr__19580 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path){
return (function (G__19578,G__19579){
return (G__19578.cljs$core$IFn$_invoke$arity$3 ? G__19578.cljs$core$IFn$_invoke$arity$3(G__19579,"url","<No URL>") : G__19578.call(null,G__19579,"url","<No URL>"));
});})(feed_cell,items,item_count,get_feed,path))
);
return (fexpr__19580.cljs$core$IFn$_invoke$arity$2 ? fexpr__19580.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__19580.call(null,cljs.core.get,feed));
})();
var title = (function (){var fexpr__19583 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path,url){
return (function (G__19581,G__19582){
return (G__19581.cljs$core$IFn$_invoke$arity$3 ? G__19581.cljs$core$IFn$_invoke$arity$3(G__19582,"title","<No TITLE>") : G__19581.call(null,G__19582,"title","<No TITLE>"));
});})(feed_cell,items,item_count,get_feed,path,url))
);
return (fexpr__19583.cljs$core$IFn$_invoke$arity$2 ? fexpr__19583.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__19583.call(null,cljs.core.get,feed));
})();
var fexpr__19587_19588 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path,url,title){
return (function (G__19586,G__19584,G__19585){
return (G__19584.cljs$core$IFn$_invoke$arity$2 ? G__19584.cljs$core$IFn$_invoke$arity$2(G__19585,G__19586) : G__19584.call(null,G__19585,G__19586));
});})(feed_cell,items,item_count,get_feed,path,url,title))
);
(fexpr__19587_19588.cljs$core$IFn$_invoke$arity$3 ? fexpr__19587_19588.cljs$core$IFn$_invoke$arity$3(path,get_feed,base_url) : fexpr__19587_19588.call(null,path,get_feed,base_url));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,title,path,feed_cell,items,item_count], null);
});
hoplon.app_pages._index_DOT_html.get_sanitizer = (function hoplon$app_pages$_index_DOT_html$get_sanitizer(){
var r = (new goog.html.sanitizer.HtmlSanitizer.Builder());
var justification = goog.string.Const.from("Because images are ok, silly");
goog.html.sanitizer.unsafe.alsoAllowAttributes(justification,r,[({"tagName": "img", "attributeName": "src", "policy": null})]);

return r.build();
});
hoplon.app_pages._index_DOT_html.sanitize_html = (function hoplon$app_pages$_index_DOT_html$sanitize_html(html){
var result = hoplon.app_pages._index_DOT_html.get_sanitizer().sanitize(html);
return goog.html.SafeHtml.unwrap(result);
});
hoplon.app_pages._index_DOT_html.make_item_getter = (function hoplon$app_pages$_index_DOT_html$make_item_getter(out_cell,content){
return (function (base_url,feed_path,item_path){
return (function (){var G__19589 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(feed_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_path)].join('');
return fetch(G__19589);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve((function (){var data__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
cljs.core.reset_BANG_(content,hoplon.app_pages._index_DOT_html.sanitize_html(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,"content")));

return cljs.core.reset_BANG_(out_cell,data__$1);
})());
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_item_cells = (function hoplon$app_pages$_index_DOT_html$get_item_cells(item,content){
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),"path");
var item_cell = (function (){var c__16030__auto__ = (function (){var fexpr__19596 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key){
return (function (G__19591,G__19593,G__19592){
var G__19597 = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(G__19592);
var G__19598 = G__19593;
return (G__19591.cljs$core$IFn$_invoke$arity$2 ? G__19591.cljs$core$IFn$_invoke$arity$2(G__19597,G__19598) : G__19591.call(null,G__19597,G__19598));
});})(key))
);
return (fexpr__19596.cljs$core$IFn$_invoke$arity$3 ? fexpr__19596.cljs$core$IFn$_invoke$arity$3(cljs.core.get,key,hoplon.app_pages._index_DOT_html.state) : fexpr__19596.call(null,cljs.core.get,key,hoplon.app_pages._index_DOT_html.state));
})();
c__16030__auto__.update = ((function (c__16030__auto__,key){
return (function (p1__19590_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,key], null),p1__19590_SHARP_);
});})(c__16030__auto__,key))
;

return c__16030__auto__;
})();
var get_item = hoplon.app_pages._index_DOT_html.make_item_getter(item_cell,content);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_item,(function (){var fexpr__19601 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__19599,G__19600){
return (G__19599.cljs$core$IFn$_invoke$arity$2 ? G__19599.cljs$core$IFn$_invoke$arity$2(G__19600,"title") : G__19599.call(null,G__19600,"title"));
});})(key,item_cell,get_item))
);
return (fexpr__19601.cljs$core$IFn$_invoke$arity$2 ? fexpr__19601.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item) : fexpr__19601.call(null,cljs.core.get,item));
})(),(function (){var fexpr__19604 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__19602,G__19603){
return (G__19602.cljs$core$IFn$_invoke$arity$2 ? G__19602.cljs$core$IFn$_invoke$arity$2(G__19603,"path") : G__19602.call(null,G__19603,"path"));
});})(key,item_cell,get_item))
);
return (fexpr__19604.cljs$core$IFn$_invoke$arity$2 ? fexpr__19604.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item) : fexpr__19604.call(null,cljs.core.get,item));
})(),(function (){var fexpr__19607 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__19605,G__19606){
return (G__19605.cljs$core$IFn$_invoke$arity$2 ? G__19605.cljs$core$IFn$_invoke$arity$2(G__19606,"link") : G__19605.call(null,G__19606,"link"));
});})(key,item_cell,get_item))
);
return (fexpr__19607.cljs$core$IFn$_invoke$arity$2 ? fexpr__19607.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item_cell) : fexpr__19607.call(null,cljs.core.get,item_cell));
})(),(function (){var fexpr__19612 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__19609,G__19610,G__19608){
var G__19613 = (G__19609.cljs$core$IFn$_invoke$arity$2 ? G__19609.cljs$core$IFn$_invoke$arity$2(G__19610,"content") : G__19609.call(null,G__19610,"content"));
return (G__19608.cljs$core$IFn$_invoke$arity$1 ? G__19608.cljs$core$IFn$_invoke$arity$1(G__19613) : G__19608.call(null,G__19613));
});})(key,item_cell,get_item))
);
return (fexpr__19612.cljs$core$IFn$_invoke$arity$3 ? fexpr__19612.cljs$core$IFn$_invoke$arity$3(cljs.core.get,item_cell,hoplon.app_pages._index_DOT_html.sanitize_html) : fexpr__19612.call(null,cljs.core.get,item_cell,hoplon.app_pages._index_DOT_html.sanitize_html));
})()], null);
});
var fexpr__19616_19617 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__19615,G__19614){
return console.log((G__19614.cljs$core$IFn$_invoke$arity$1 ? G__19614.cljs$core$IFn$_invoke$arity$1(G__19615) : G__19614.call(null,G__19615)));
}));
(fexpr__19616_19617.cljs$core$IFn$_invoke$arity$2 ? fexpr__19616_19617.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.base_url,cljs.core.clj__GT_js) : fexpr__19616_19617.call(null,hoplon.app_pages._index_DOT_html.base_url,cljs.core.clj__GT_js));
hoplon.app_pages._index_DOT_html.column_width = (function hoplon$app_pages$_index_DOT_html$column_width(len){
var divisible_by = (function hoplon$app_pages$_index_DOT_html$column_width_$_divisible_by(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(len,x));
});
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d%",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.truth_(divisible_by((5)))?(20):(cljs.core.truth_(divisible_by((4)))?(25):(cljs.core.truth_(divisible_by((3)))?(33):(((len > (30)))?(20):(((len > (20)))?(25):(((len > (10)))?(33):(50)
)))))) - 0.5)], 0));
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.feed_item = (function() { 
var hoplon$app_pages$_index_DOT_html$feed_item__delegate = function (args__18854__auto__){
var vec__19618 = hoplon.core.parse_args(args__18854__auto__);
var map__19621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(0),null);
var map__19621__$1 = ((((!((map__19621 == null)))?((((map__19621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19621):map__19621);
var attrs = map__19621__$1;
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,cljs.core.cst$kw$item);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,cljs.core.cst$kw$path);
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,cljs.core.cst$kw$my_SLASH_css);
var overlay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,cljs.core.cst$kw$overlay);
var content_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19621__$1,cljs.core.cst$kw$content_DASH_cell);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19618,(1),null);
var vec__19623 = hoplon.app_pages._index_DOT_html.get_item_cells(item,content_cell);
var get_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(1),null);
var item_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(2),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(3),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19623,(4),null);
var toggled = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var leftover_attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.cst$kw$item,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path,cljs.core.cst$kw$my_SLASH_css,cljs.core.cst$kw$overlay,cljs.core.cst$kw$content_DASH_cell], 0));
var fexpr__19630_19655 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_){
return (function (G__19628,G__19629,G__19626,G__19627){
return (G__19626.cljs$core$IFn$_invoke$arity$3 ? G__19626.cljs$core$IFn$_invoke$arity$3(G__19627,G__19628,G__19629) : G__19626.call(null,G__19627,G__19628,G__19629));
});})(vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_))
);
(fexpr__19630_19655.cljs$core$IFn$_invoke$arity$4 ? fexpr__19630_19655.cljs$core$IFn$_invoke$arity$4(path,item_path,get_item,hoplon.app_pages._index_DOT_html.base_url) : fexpr__19630_19655.call(null,path,item_path,get_item,hoplon.app_pages._index_DOT_html.base_url));

var G__19631 = leftover_attrs;
var G__19632 = cljs.core.cst$kw$css;
var G__19633 = css;
var G__19634 = cljs.core.cst$kw$class;
var G__19635 = "summary";
var G__19636 = (function (){var G__19638 = cljs.core.cst$kw$html;
var G__19639 = content;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__19638,G__19639) : hoplon.core.div.call(null,G__19638,G__19639));
})();
var G__19637 = (function (){var G__19640 = (function (){var G__19643 = (function (){var G__19644 = cljs.core.cst$kw$href;
var G__19645 = link;
var G__19646 = title;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__19644,G__19645,G__19646) : hoplon.core.a.call(null,G__19644,G__19645,G__19646));
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$1(G__19643) : hoplon.core.h3.call(null,G__19643));
})();
var G__19641 = " ";
var G__19642 = (function (){var G__19647 = cljs.core.cst$kw$class;
var G__19648 = "show-article";
var G__19649 = cljs.core.cst$kw$click;
var G__19650 = ((function (G__19647,G__19648,G__19649,G__19640,G__19641,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_){
return (function (){
return javelin.core.dosync_STAR_(((function (G__19647,G__19648,G__19649,G__19640,G__19641,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_){
return (function (){
var G__19652_19656 = cljs.core.deref(hoplon.app_pages._index_DOT_html.base_url);
var G__19653_19657 = cljs.core.deref(path);
var G__19654_19658 = cljs.core.deref(item_path);
(get_item.cljs$core$IFn$_invoke$arity$3 ? get_item.cljs$core$IFn$_invoke$arity$3(G__19652_19656,G__19653_19657,G__19654_19658) : get_item.call(null,G__19652_19656,G__19653_19657,G__19654_19658));

cljs.core.reset_BANG_(overlay,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(toggled,cljs.core.not);
});})(G__19647,G__19648,G__19649,G__19640,G__19641,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_))
);
});})(G__19647,G__19648,G__19649,G__19640,G__19641,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,vec__19623,get_item,title,item_path,link,content,toggled,leftover_attrs,vec__19618,map__19621,map__19621__$1,attrs,item,path,css,overlay,content_cell,_))
;
var G__19651 = ">>";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$5(G__19647,G__19648,G__19649,G__19650,G__19651) : hoplon.core.button.call(null,G__19647,G__19648,G__19649,G__19650,G__19651));
})();
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$3(G__19640,G__19641,G__19642) : hoplon.core.header.call(null,G__19640,G__19641,G__19642));
})();
return (hoplon.core.article.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.article.cljs$core$IFn$_invoke$arity$7(G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,G__19637) : hoplon.core.article.call(null,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,G__19637));
};
var hoplon$app_pages$_index_DOT_html$feed_item = function (var_args){
var args__18854__auto__ = null;
if (arguments.length > 0) {
var G__19659__i = 0, G__19659__a = new Array(arguments.length -  0);
while (G__19659__i < G__19659__a.length) {G__19659__a[G__19659__i] = arguments[G__19659__i + 0]; ++G__19659__i;}
  args__18854__auto__ = new cljs.core.IndexedSeq(G__19659__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$feed_item__delegate.call(this,args__18854__auto__);};
hoplon$app_pages$_index_DOT_html$feed_item.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$feed_item.cljs$lang$applyTo = (function (arglist__19660){
var args__18854__auto__ = cljs.core.seq(arglist__19660);
return hoplon$app_pages$_index_DOT_html$feed_item__delegate(args__18854__auto__);
});
hoplon$app_pages$_index_DOT_html$feed_item.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$feed_item__delegate;
return hoplon$app_pages$_index_DOT_html$feed_item;
})()
;
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.feed_view = (function() { 
var hoplon$app_pages$_index_DOT_html$feed_view__delegate = function (args__18854__auto__){
var vec__19661 = hoplon.core.parse_args(args__18854__auto__);
var map__19664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19661,(0),null);
var map__19664__$1 = ((((!((map__19664 == null)))?((((map__19664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19664):map__19664);
var feed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19664__$1,cljs.core.cst$kw$feed);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19661,(1),null);
var vec__19666 = hoplon.app_pages._index_DOT_html.get_feed_entry_cells(hoplon.app_pages._index_DOT_html.base_url,feed);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(2),null);
var feed_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(3),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(4),null);
var item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19666,(5),null);
var child_width = (function (){var fexpr__19671 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__19666,url,title,path,feed_cell,items,item_count,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (G__19670,G__19669){
return (G__19669.cljs$core$IFn$_invoke$arity$1 ? G__19669.cljs$core$IFn$_invoke$arity$1(G__19670) : G__19669.call(null,G__19670));
});})(vec__19666,url,title,path,feed_cell,items,item_count,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19671.cljs$core$IFn$_invoke$arity$2 ? fexpr__19671.cljs$core$IFn$_invoke$arity$2(item_count,hoplon.app_pages._index_DOT_html.column_width) : fexpr__19671.call(null,item_count,hoplon.app_pages._index_DOT_html.column_width));
})();
var overlay_visible = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
var content_cell = javelin.core.cell.cljs$core$IFn$_invoke$arity$1("");
var G__19672 = cljs.core.cst$kw$class;
var G__19673 = (function (){var fexpr__19677 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19672,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (G__19676){
return new cljs.core.PersistentArrayMap(null, 1, ["displayed",G__19676], null);
});})(G__19672,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19677.cljs$core$IFn$_invoke$arity$1 ? fexpr__19677.cljs$core$IFn$_invoke$arity$1(overlay_visible) : fexpr__19677.call(null,overlay_visible));
})();
var G__19674 = (function (){var G__19678 = cljs.core.cst$kw$class;
var G__19679 = (function (){var fexpr__19683 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19678,G__19672,G__19673,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (G__19682){
return new cljs.core.PersistentArrayMap(null, 2, ["article-overlay",true,"displayed",G__19682], null);
});})(G__19678,G__19672,G__19673,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19683.cljs$core$IFn$_invoke$arity$1 ? fexpr__19683.cljs$core$IFn$_invoke$arity$1(overlay_visible) : fexpr__19683.call(null,overlay_visible));
})();
var G__19680 = (function (){var G__19684 = (function (){var G__19685 = cljs.core.cst$kw$click;
var G__19686 = ((function (G__19685,G__19678,G__19679,G__19672,G__19673,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (){
return cljs.core.reset_BANG_(overlay_visible,false);
});})(G__19685,G__19678,G__19679,G__19672,G__19673,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
;
var G__19687 = "X";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__19685,G__19686,G__19687) : hoplon.core.button.call(null,G__19685,G__19686,G__19687));
})();
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$1(G__19684) : hoplon.core.header.call(null,G__19684));
})();
var G__19681 = (function (){var G__19688 = cljs.core.cst$kw$html;
var G__19689 = content_cell;
return (hoplon.core.article.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.article.cljs$core$IFn$_invoke$arity$2(G__19688,G__19689) : hoplon.core.article.call(null,G__19688,G__19689));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19678,G__19679,G__19680,G__19681) : hoplon.core.div.call(null,G__19678,G__19679,G__19680,G__19681));
})();
var G__19675 = (function (){var con__18915__auto__ = (new cljs.core.Delay(((function (G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (){
var G__19690 = (function (){var G__19692 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(title) : hoplon.core.h2.call(null,title));
var G__19693 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(url) : hoplon.core.p.call(null,url));
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$2(G__19692,G__19693) : hoplon.core.header.call(null,G__19692,G__19693));
})();
var G__19691 = hoplon.core.loop_tpl_STAR_(items,((function (G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (item__18889__auto__){
var vec__19694 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19697 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19697.cljs$core$IFn$_invoke$arity$1 ? fexpr__19697.cljs$core$IFn$_invoke$arity$1(item__18889__auto__) : fexpr__19697.call(null,item__18889__auto__));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19694,(0),null);
return hoplon.app_pages._index_DOT_html.feed_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$path,path,cljs.core.cst$kw$item,item,cljs.core.cst$kw$overlay,overlay_visible,cljs.core.cst$kw$content_DASH_cell,content_cell,cljs.core.cst$kw$my_SLASH_css,(function (){var fexpr__19699 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (vec__19694,item,G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (G__19698){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,G__19698], null);
});})(vec__19694,item,G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19699.cljs$core$IFn$_invoke$arity$1 ? fexpr__19699.cljs$core$IFn$_invoke$arity$1(child_width) : fexpr__19699.call(null,child_width));
})()], 0));
});})(G__19690,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__19690,G__19691) : hoplon.core.div.call(null,G__19690,G__19691));
});})(G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
,null));
var alt__18916__auto__ = (new cljs.core.Delay(((function (con__18915__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (){
return null;
});})(con__18915__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
,null));
var tpl__18917__auto__ = ((function (con__18915__auto__,alt__18916__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (p__18918__auto__){
return cljs.core.deref((function (){var or__8630__auto__ = (cljs.core.truth_(p__18918__auto__)?con__18915__auto__:alt__18916__auto__);
if(cljs.core.truth_(or__8630__auto__)){
return or__8630__auto__;
} else {
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(con__18915__auto__,alt__18916__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
;
var G__19701 = (function (){var fexpr__19703 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__18915__auto__,alt__18916__auto__,tpl__18917__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_){
return (function (G__19702){
return (G__19702 > (0));
});})(con__18915__auto__,alt__18916__auto__,tpl__18917__auto__,G__19672,G__19673,G__19674,vec__19666,url,title,path,feed_cell,items,item_count,child_width,overlay_visible,content_cell,vec__19661,map__19664,map__19664__$1,feed,_))
);
return (fexpr__19703.cljs$core$IFn$_invoke$arity$1 ? fexpr__19703.cljs$core$IFn$_invoke$arity$1(item_count) : fexpr__19703.call(null,item_count));
})();
var fexpr__19700 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__18917__auto__);
return (fexpr__19700.cljs$core$IFn$_invoke$arity$1 ? fexpr__19700.cljs$core$IFn$_invoke$arity$1(G__19701) : fexpr__19700.call(null,G__19701));
})();
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$4(G__19672,G__19673,G__19674,G__19675) : hoplon.core.section.call(null,G__19672,G__19673,G__19674,G__19675));
};
var hoplon$app_pages$_index_DOT_html$feed_view = function (var_args){
var args__18854__auto__ = null;
if (arguments.length > 0) {
var G__19704__i = 0, G__19704__a = new Array(arguments.length -  0);
while (G__19704__i < G__19704__a.length) {G__19704__a[G__19704__i] = arguments[G__19704__i + 0]; ++G__19704__i;}
  args__18854__auto__ = new cljs.core.IndexedSeq(G__19704__a,0,null);
} 
return hoplon$app_pages$_index_DOT_html$feed_view__delegate.call(this,args__18854__auto__);};
hoplon$app_pages$_index_DOT_html$feed_view.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$feed_view.cljs$lang$applyTo = (function (arglist__19705){
var args__18854__auto__ = cljs.core.seq(arglist__19705);
return hoplon$app_pages$_index_DOT_html$feed_view__delegate(args__18854__auto__);
});
hoplon$app_pages$_index_DOT_html$feed_view.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$feed_view__delegate;
return hoplon$app_pages$_index_DOT_html$feed_view;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__19707 = (function (){var G__19708 = cljs.core.cst$kw$href;
var G__19709 = "app.css";
var G__19710 = cljs.core.cst$kw$rel;
var G__19711 = "stylesheet";
var G__19712 = cljs.core.cst$kw$type;
var G__19713 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__19708,G__19709,G__19710,G__19711,G__19712,G__19713) : hoplon.core.link.call(null,G__19708,G__19709,G__19710,G__19711,G__19712,G__19713));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__19707) : hoplon.core.head.call(null,G__19707));
})(),(function (){var G__19714 = (function (){var G__19716 = (function (){var G__19718 = "Roach Notes ";
var G__19719 = (function (){var G__19720 = cljs.core.cst$kw$class;
var G__19721 = "beta";
var G__19722 = cljs.core.cst$kw$html;
var G__19723 = "&beta;";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__19720,G__19721,G__19722,G__19723) : hoplon.core.div.call(null,G__19720,G__19721,G__19722,G__19723));
})();
return (hoplon.core.h1.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$2(G__19718,G__19719) : hoplon.core.h1.call(null,G__19718,G__19719));
})();
var G__19717 = (function (){var G__19724 = cljs.core.cst$kw$type;
var G__19725 = "text";
var G__19726 = cljs.core.cst$kw$value;
var G__19727 = hoplon.app_pages._index_DOT_html.base_url;
var G__19728 = cljs.core.cst$kw$change;
var G__19729 = ((function (G__19724,G__19725,G__19726,G__19727,G__19728,G__19716){
return (function (p1__19706_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.base_url,p1__19706_SHARP_.target.value);
});})(G__19724,G__19725,G__19726,G__19727,G__19728,G__19716))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__19724,G__19725,G__19726,G__19727,G__19728,G__19729) : hoplon.core.input.call(null,G__19724,G__19725,G__19726,G__19727,G__19728,G__19729));
})();
return (hoplon.core.header.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.header.cljs$core$IFn$_invoke$arity$2(G__19716,G__19717) : hoplon.core.header.call(null,G__19716,G__19717));
})();
var G__19715 = (function (){var G__19730 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.feeds,((function (G__19714){
return (function (item__18889__auto__){
var vec__19731 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__19734 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__19714){
return (function (feed){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed], null);
});})(G__19714))
);
return (fexpr__19734.cljs$core$IFn$_invoke$arity$1 ? fexpr__19734.cljs$core$IFn$_invoke$arity$1(item__18889__auto__) : fexpr__19734.call(null,item__18889__auto__));
})());
var feed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19731,(0),null);
return hoplon.app_pages._index_DOT_html.feed_view.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$feed,feed], 0));
});})(G__19714))
);
return (hoplon.core.main.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.main.cljs$core$IFn$_invoke$arity$1(G__19730) : hoplon.core.main.call(null,G__19730));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__19714,G__19715) : hoplon.core.body.call(null,G__19714,G__19715));
})()], 0));
