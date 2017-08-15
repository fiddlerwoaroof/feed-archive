// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
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
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, ["base-url",null,"pull-time","","feeds",cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$items,cljs.core.PersistentArrayMap.EMPTY], null));
hoplon.app_pages._index_DOT_html.base_url = (function (){var c__13657__auto__ = (function (){var fexpr__15080 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15078,G__15079){
return (G__15078.cljs$core$IFn$_invoke$arity$2 ? G__15078.cljs$core$IFn$_invoke$arity$2(G__15079,"base-url") : G__15078.call(null,G__15079,"base-url"));
}));
return (fexpr__15080.cljs$core$IFn$_invoke$arity$2 ? fexpr__15080.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__15080.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
c__13657__auto__.update = ((function (c__13657__auto__){
return (function (p1__15077_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["base-url"], null),p1__15077_SHARP_);
});})(c__13657__auto__))
;

return c__13657__auto__;
})();
hoplon.app_pages._index_DOT_html.pull_time = (function (){var fexpr__15083 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15081,G__15082){
return (G__15081.cljs$core$IFn$_invoke$arity$2 ? G__15081.cljs$core$IFn$_invoke$arity$2(G__15082,"pull-time") : G__15081.call(null,G__15082,"pull-time"));
}));
return (fexpr__15083.cljs$core$IFn$_invoke$arity$2 ? fexpr__15083.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__15083.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.feeds = (function (){var fexpr__15086 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15084,G__15085){
return (G__15084.cljs$core$IFn$_invoke$arity$2 ? G__15084.cljs$core$IFn$_invoke$arity$2(G__15085,"feeds") : G__15084.call(null,G__15085,"feeds"));
}));
return (fexpr__15086.cljs$core$IFn$_invoke$arity$2 ? fexpr__15086.cljs$core$IFn$_invoke$arity$2(cljs.core.get,hoplon.app_pages._index_DOT_html.state) : fexpr__15086.call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state));
})();
hoplon.app_pages._index_DOT_html.setup_state = (function hoplon$app_pages$_index_DOT_html$setup_state(base_url){
return (function (){var G__15087 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/current")].join('');
return fetch(G__15087);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.app_pages._index_DOT_html.state,cljs.core.merge,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
var fexpr__15090_15091 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15089,G__15088){
if(cljs.core.truth_(G__15088)){
return (G__15089.cljs$core$IFn$_invoke$arity$1 ? G__15089.cljs$core$IFn$_invoke$arity$1(G__15088) : G__15089.call(null,G__15088));
} else {
return null;
}
}));
(fexpr__15090_15091.cljs$core$IFn$_invoke$arity$2 ? fexpr__15090_15091.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.setup_state,hoplon.app_pages._index_DOT_html.base_url) : fexpr__15090_15091.call(null,hoplon.app_pages._index_DOT_html.setup_state,hoplon.app_pages._index_DOT_html.base_url));
hoplon.app_pages._index_DOT_html.make_feed_getter = (function hoplon$app_pages$_index_DOT_html$make_feed_getter(out_cell){
return (function (base_url,path){
return (function (){var G__15092 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return fetch(G__15092);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.reset_BANG_(out_cell,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_feed_entry_cells = (function hoplon$app_pages$_index_DOT_html$get_feed_entry_cells(base_url,feed){
var feed_cell = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var items = (function (){var fexpr__15095 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell){
return (function (G__15093,G__15094){
return (G__15093.cljs$core$IFn$_invoke$arity$2 ? G__15093.cljs$core$IFn$_invoke$arity$2(G__15094,"items") : G__15093.call(null,G__15094,"items"));
});})(feed_cell))
);
return (fexpr__15095.cljs$core$IFn$_invoke$arity$2 ? fexpr__15095.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed_cell) : fexpr__15095.call(null,cljs.core.get,feed_cell));
})();
var item_count = (function (){var fexpr__15098 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items){
return (function (G__15097,G__15096){
return (G__15096.cljs$core$IFn$_invoke$arity$1 ? G__15096.cljs$core$IFn$_invoke$arity$1(G__15097) : G__15096.call(null,G__15097));
});})(feed_cell,items))
);
return (fexpr__15098.cljs$core$IFn$_invoke$arity$2 ? fexpr__15098.cljs$core$IFn$_invoke$arity$2(items,cljs.core.count) : fexpr__15098.call(null,items,cljs.core.count));
})();
var get_feed = hoplon.app_pages._index_DOT_html.make_feed_getter(feed_cell);
var path = (function (){var fexpr__15101 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed){
return (function (G__15099,G__15100){
return (G__15099.cljs$core$IFn$_invoke$arity$3 ? G__15099.cljs$core$IFn$_invoke$arity$3(G__15100,"path","<No PATH>") : G__15099.call(null,G__15100,"path","<No PATH>"));
});})(feed_cell,items,item_count,get_feed))
);
return (fexpr__15101.cljs$core$IFn$_invoke$arity$2 ? fexpr__15101.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__15101.call(null,cljs.core.get,feed));
})();
var url = (function (){var fexpr__15104 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path){
return (function (G__15102,G__15103){
return (G__15102.cljs$core$IFn$_invoke$arity$3 ? G__15102.cljs$core$IFn$_invoke$arity$3(G__15103,"url","<No URL>") : G__15102.call(null,G__15103,"url","<No URL>"));
});})(feed_cell,items,item_count,get_feed,path))
);
return (fexpr__15104.cljs$core$IFn$_invoke$arity$2 ? fexpr__15104.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__15104.call(null,cljs.core.get,feed));
})();
var title = (function (){var fexpr__15107 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path,url){
return (function (G__15105,G__15106){
return (G__15105.cljs$core$IFn$_invoke$arity$3 ? G__15105.cljs$core$IFn$_invoke$arity$3(G__15106,"title","<No TITLE>") : G__15105.call(null,G__15106,"title","<No TITLE>"));
});})(feed_cell,items,item_count,get_feed,path,url))
);
return (fexpr__15107.cljs$core$IFn$_invoke$arity$2 ? fexpr__15107.cljs$core$IFn$_invoke$arity$2(cljs.core.get,feed) : fexpr__15107.call(null,cljs.core.get,feed));
})();
var fexpr__15111_15112 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (feed_cell,items,item_count,get_feed,path,url,title){
return (function (G__15110,G__15108,G__15109){
return (G__15108.cljs$core$IFn$_invoke$arity$2 ? G__15108.cljs$core$IFn$_invoke$arity$2(G__15109,G__15110) : G__15108.call(null,G__15109,G__15110));
});})(feed_cell,items,item_count,get_feed,path,url,title))
);
(fexpr__15111_15112.cljs$core$IFn$_invoke$arity$3 ? fexpr__15111_15112.cljs$core$IFn$_invoke$arity$3(path,get_feed,base_url) : fexpr__15111_15112.call(null,path,get_feed,base_url));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,title,path,feed_cell,items,item_count], null);
});
hoplon.app_pages._index_DOT_html.make_item_getter = (function hoplon$app_pages$_index_DOT_html$make_item_getter(out_cell){
return (function (base_url,feed_path,item_path){
return (function (){var G__15113 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feed_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_path)].join('');
return fetch(G__15113);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.reset_BANG_(out_cell,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_sanitizer = (function hoplon$app_pages$_index_DOT_html$get_sanitizer(){
var r = (new goog.html.sanitizer.HtmlSanitizer.Builder());
var justification = goog.string.Const.from("Because images are ok, silly");
goog.html.sanitizer.unsafe.alsoAllowAttributes(justification,r,[({"tagName": "img", "attributeName": "src", "policy": null})]);

return r.build();
});
hoplon.app_pages._index_DOT_html.sanitize_html = (function hoplon$app_pages$_index_DOT_html$sanitize_html(html){
var result = hoplon.app_pages._index_DOT_html.get_sanitizer().sanitize(html);
console.log(result);

return goog.html.SafeHtml.unwrap(result);
});
hoplon.app_pages._index_DOT_html.get_item_cells = (function hoplon$app_pages$_index_DOT_html$get_item_cells(item){
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(item),"path");
var item_cell = (function (){var c__13657__auto__ = (function (){var fexpr__15120 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key){
return (function (G__15115,G__15117,G__15116){
var G__15121 = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(G__15116);
var G__15122 = G__15117;
return (G__15115.cljs$core$IFn$_invoke$arity$2 ? G__15115.cljs$core$IFn$_invoke$arity$2(G__15121,G__15122) : G__15115.call(null,G__15121,G__15122));
});})(key))
);
return (fexpr__15120.cljs$core$IFn$_invoke$arity$3 ? fexpr__15120.cljs$core$IFn$_invoke$arity$3(cljs.core.get,key,hoplon.app_pages._index_DOT_html.state) : fexpr__15120.call(null,cljs.core.get,key,hoplon.app_pages._index_DOT_html.state));
})();
c__13657__auto__.update = ((function (c__13657__auto__,key){
return (function (p1__15114_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hoplon.app_pages._index_DOT_html.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$items,key], null),p1__15114_SHARP_);
});})(c__13657__auto__,key))
;

return c__13657__auto__;
})();
var get_item = hoplon.app_pages._index_DOT_html.make_item_getter(item_cell);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_item,(function (){var fexpr__15125 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__15123,G__15124){
return (G__15123.cljs$core$IFn$_invoke$arity$2 ? G__15123.cljs$core$IFn$_invoke$arity$2(G__15124,"title") : G__15123.call(null,G__15124,"title"));
});})(key,item_cell,get_item))
);
return (fexpr__15125.cljs$core$IFn$_invoke$arity$2 ? fexpr__15125.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item) : fexpr__15125.call(null,cljs.core.get,item));
})(),(function (){var fexpr__15128 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__15126,G__15127){
return (G__15126.cljs$core$IFn$_invoke$arity$2 ? G__15126.cljs$core$IFn$_invoke$arity$2(G__15127,"path") : G__15126.call(null,G__15127,"path"));
});})(key,item_cell,get_item))
);
return (fexpr__15128.cljs$core$IFn$_invoke$arity$2 ? fexpr__15128.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item) : fexpr__15128.call(null,cljs.core.get,item));
})(),(function (){var fexpr__15131 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__15129,G__15130){
return (G__15129.cljs$core$IFn$_invoke$arity$2 ? G__15129.cljs$core$IFn$_invoke$arity$2(G__15130,"link") : G__15129.call(null,G__15130,"link"));
});})(key,item_cell,get_item))
);
return (fexpr__15131.cljs$core$IFn$_invoke$arity$2 ? fexpr__15131.cljs$core$IFn$_invoke$arity$2(cljs.core.get,item_cell) : fexpr__15131.call(null,cljs.core.get,item_cell));
})(),(function (){var fexpr__15136 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (key,item_cell,get_item){
return (function (G__15133,G__15134,G__15132){
var G__15137 = (G__15133.cljs$core$IFn$_invoke$arity$2 ? G__15133.cljs$core$IFn$_invoke$arity$2(G__15134,"content") : G__15133.call(null,G__15134,"content"));
return (G__15132.cljs$core$IFn$_invoke$arity$1 ? G__15132.cljs$core$IFn$_invoke$arity$1(G__15137) : G__15132.call(null,G__15137));
});})(key,item_cell,get_item))
);
return (fexpr__15136.cljs$core$IFn$_invoke$arity$3 ? fexpr__15136.cljs$core$IFn$_invoke$arity$3(cljs.core.get,item_cell,hoplon.app_pages._index_DOT_html.sanitize_html) : fexpr__15136.call(null,cljs.core.get,item_cell,hoplon.app_pages._index_DOT_html.sanitize_html));
})()], null);
});
var fexpr__15140_15141 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1((function (G__15139,G__15138){
return console.log((G__15138.cljs$core$IFn$_invoke$arity$1 ? G__15138.cljs$core$IFn$_invoke$arity$1(G__15139) : G__15138.call(null,G__15139)));
}));
(fexpr__15140_15141.cljs$core$IFn$_invoke$arity$2 ? fexpr__15140_15141.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.base_url,cljs.core.clj__GT_js) : fexpr__15140_15141.call(null,hoplon.app_pages._index_DOT_html.base_url,cljs.core.clj__GT_js));
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__15143 = (function (){var G__15144 = cljs.core.cst$kw$href;
var G__15145 = "app.css";
var G__15146 = cljs.core.cst$kw$rel;
var G__15147 = "stylesheet";
var G__15148 = cljs.core.cst$kw$type;
var G__15149 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__15144,G__15145,G__15146,G__15147,G__15148,G__15149) : hoplon.core.link.call(null,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15143) : hoplon.core.head.call(null,G__15143));
})(),(function (){var G__15150 = (function (){var G__15152 = cljs.core.cst$kw$type;
var G__15153 = "text";
var G__15154 = cljs.core.cst$kw$value;
var G__15155 = hoplon.app_pages._index_DOT_html.base_url;
var G__15156 = cljs.core.cst$kw$change;
var G__15157 = ((function (G__15152,G__15153,G__15154,G__15155,G__15156){
return (function (p1__15142_SHARP_){
return cljs.core.reset_BANG_(hoplon.app_pages._index_DOT_html.base_url,p1__15142_SHARP_.target.value);
});})(G__15152,G__15153,G__15154,G__15155,G__15156))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$6(G__15152,G__15153,G__15154,G__15155,G__15156,G__15157) : hoplon.core.input.call(null,G__15152,G__15153,G__15154,G__15155,G__15156,G__15157));
})();
var G__15151 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.feeds,((function (G__15150){
return (function (item__14451__auto__){
var vec__15158 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__15161 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15150){
return (function (feed){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed], null);
});})(G__15150))
);
return (fexpr__15161.cljs$core$IFn$_invoke$arity$1 ? fexpr__15161.cljs$core$IFn$_invoke$arity$1(item__14451__auto__) : fexpr__15161.call(null,item__14451__auto__));
})());
var feed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15158,(0),null);
var vec__15162 = hoplon.app_pages._index_DOT_html.get_feed_entry_cells(hoplon.app_pages._index_DOT_html.base_url,feed);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(2),null);
var feed_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(3),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(4),null);
var item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15162,(5),null);
var G__15165 = (function (){var con__14469__auto__ = (new cljs.core.Delay(((function (vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (){
var G__15166 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(title) : hoplon.core.h2.call(null,title));
var G__15167 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(url) : hoplon.core.p.call(null,url));
var G__15168 = (function (){var G__15169 = hoplon.core.loop_tpl_STAR_(items,((function (G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (item__14451__auto____$1){
var vec__15170 = javelin.core.cell_map(cljs.core.identity,(function (){var fexpr__15173 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
);
return (fexpr__15173.cljs$core$IFn$_invoke$arity$1 ? fexpr__15173.cljs$core$IFn$_invoke$arity$1(item__14451__auto____$1) : fexpr__15173.call(null,item__14451__auto____$1));
})());
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15170,(0),null);
var vec__15174 = hoplon.app_pages._index_DOT_html.get_item_cells(item);
var get_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(1),null);
var item_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(2),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(3),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15174,(4),null);
var G__15177 = (function (){var G__15179 = (function (){var G__15182 = cljs.core.cst$kw$href;
var G__15183 = link;
var G__15184 = title__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__15182,G__15183,G__15184) : hoplon.core.a.call(null,G__15182,G__15183,G__15184));
})();
var G__15180 = " ";
var G__15181 = (function (){var G__15185 = cljs.core.cst$kw$click;
var G__15186 = ((function (G__15185,G__15179,G__15180,vec__15174,get_item,title__$1,item_path,link,content,vec__15170,item,G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (){
var G__15188 = cljs.core.deref(hoplon.app_pages._index_DOT_html.base_url);
var G__15189 = cljs.core.deref(path);
var G__15190 = cljs.core.deref(item_path);
return (get_item.cljs$core$IFn$_invoke$arity$3 ? get_item.cljs$core$IFn$_invoke$arity$3(G__15188,G__15189,G__15190) : get_item.call(null,G__15188,G__15189,G__15190));
});})(G__15185,G__15179,G__15180,vec__15174,get_item,title__$1,item_path,link,content,vec__15170,item,G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
;
var G__15187 = ">>";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__15185,G__15186,G__15187) : hoplon.core.button.call(null,G__15185,G__15186,G__15187));
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__15179,G__15180,G__15181) : hoplon.core.h3.call(null,G__15179,G__15180,G__15181));
})();
var G__15178 = (function (){var G__15191 = cljs.core.cst$kw$html;
var G__15192 = content;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__15191,G__15192) : hoplon.core.p.call(null,G__15191,G__15192));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__15177,G__15178) : hoplon.core.li.call(null,G__15177,G__15178));
});})(G__15166,G__15167,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__15169) : hoplon.core.ul.call(null,G__15169));
})();
return (hoplon.core.article.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.article.cljs$core$IFn$_invoke$arity$3(G__15166,G__15167,G__15168) : hoplon.core.article.call(null,G__15166,G__15167,G__15168));
});})(vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
,null));
var alt__14470__auto__ = (new cljs.core.Delay(((function (con__14469__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (){
return null;
});})(con__14469__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
,null));
var tpl__14471__auto__ = ((function (con__14469__auto__,alt__14470__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (p__14472__auto__){
return cljs.core.deref((function (){var or__7916__auto__ = (cljs.core.truth_(p__14472__auto__)?con__14469__auto__:alt__14470__auto__);
if(cljs.core.truth_(or__7916__auto__)){
return or__7916__auto__;
} else {
return cljs.core.atom();
}
})());
});})(con__14469__auto__,alt__14470__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
;
var G__15194 = (function (){var fexpr__15196 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (con__14469__auto__,alt__14470__auto__,tpl__14471__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150){
return (function (G__15195){
return (G__15195 > (0));
});})(con__14469__auto__,alt__14470__auto__,tpl__14471__auto__,vec__15162,url,title,path,feed_cell,items,item_count,vec__15158,feed,G__15150))
);
return (fexpr__15196.cljs$core$IFn$_invoke$arity$1 ? fexpr__15196.cljs$core$IFn$_invoke$arity$1(item_count) : fexpr__15196.call(null,item_count));
})();
var fexpr__15193 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(tpl__14471__auto__);
return (fexpr__15193.cljs$core$IFn$_invoke$arity$1 ? fexpr__15193.cljs$core$IFn$_invoke$arity$1(G__15194) : fexpr__15193.call(null,G__15194));
})();
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$1(G__15165) : hoplon.core.section.call(null,G__15165));
});})(G__15150))
);
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$2(G__15150,G__15151) : hoplon.core.body.call(null,G__15150,G__15151));
})()], 0));
