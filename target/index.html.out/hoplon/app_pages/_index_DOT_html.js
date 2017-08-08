// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
goog.require('hoplon.core');
hoplon.app_pages._index_DOT_html.state = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, ["base-url","http://roachnotes.com","pull-time","","feeds",cljs.core.PersistentVector.EMPTY], null));
hoplon.app_pages._index_DOT_html.pull_time = javelin.core.formula((function (G__14434,G__14435){
return (G__14434.cljs$core$IFn$_invoke$arity$2 ? G__14434.cljs$core$IFn$_invoke$arity$2(G__14435,"pull-time") : G__14434.call(null,G__14435,"pull-time"));
})).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state);
hoplon.app_pages._index_DOT_html.feeds = javelin.core.formula((function (G__14436,G__14437){
return (G__14436.cljs$core$IFn$_invoke$arity$2 ? G__14436.cljs$core$IFn$_invoke$arity$2(G__14437,"feeds") : G__14436.call(null,G__14437,"feeds"));
})).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state);
hoplon.app_pages._index_DOT_html.setup_state = (function hoplon$app_pages$_index_DOT_html$setup_state(base_url){
return (function (){var G__14439 = [cljs.core.str(base_url),cljs.core.str("/current")].join('');
return fetch(G__14439);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(hoplon.app_pages._index_DOT_html.state,cljs.core.merge,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data)));
}));
}));
});
hoplon.app_pages._index_DOT_html.base_url = javelin.core.formula((function (G__14440,G__14441){
return (G__14440.cljs$core$IFn$_invoke$arity$2 ? G__14440.cljs$core$IFn$_invoke$arity$2(G__14441,"base-url") : G__14440.call(null,G__14441,"base-url"));
})).call(null,cljs.core.get,hoplon.app_pages._index_DOT_html.state);
javelin.core.formula((function (G__14442,G__14443){
return (G__14442.cljs$core$IFn$_invoke$arity$1 ? G__14442.cljs$core$IFn$_invoke$arity$1(G__14443) : G__14442.call(null,G__14443));
})).call(null,hoplon.app_pages._index_DOT_html.setup_state,hoplon.app_pages._index_DOT_html.base_url);
hoplon.app_pages._index_DOT_html.make_feed_getter = (function hoplon$app_pages$_index_DOT_html$make_feed_getter(out_cell){
return (function (base_url,path){
return (function (){var G__14447 = [cljs.core.str(base_url),cljs.core.str("/"),cljs.core.str(path)].join('');
return fetch(G__14447);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve((function (){var G__14448 = out_cell;
var G__14449 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14448,G__14449) : cljs.core.reset_BANG_.call(null,G__14448,G__14449));
})());
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_feed_entry_cells = (function hoplon$app_pages$_index_DOT_html$get_feed_entry_cells(base_url,feed){
var feed_cell = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var items = javelin.core.formula(((function (feed_cell){
return (function (G__14463,G__14464){
return (G__14463.cljs$core$IFn$_invoke$arity$2 ? G__14463.cljs$core$IFn$_invoke$arity$2(G__14464,"items") : G__14463.call(null,G__14464,"items"));
});})(feed_cell))
).call(null,cljs.core.get,feed_cell);
var item_count = javelin.core.formula(((function (feed_cell,items){
return (function (G__14466,G__14465){
return (G__14465.cljs$core$IFn$_invoke$arity$1 ? G__14465.cljs$core$IFn$_invoke$arity$1(G__14466) : G__14465.call(null,G__14466));
});})(feed_cell,items))
).call(null,items,cljs.core.count);
var get_feed = hoplon.app_pages._index_DOT_html.make_feed_getter(feed_cell);
var path = javelin.core.formula(((function (feed_cell,items,item_count,get_feed){
return (function (G__14467,G__14468){
return (G__14467.cljs$core$IFn$_invoke$arity$3 ? G__14467.cljs$core$IFn$_invoke$arity$3(G__14468,"path","<No PATH>") : G__14467.call(null,G__14468,"path","<No PATH>"));
});})(feed_cell,items,item_count,get_feed))
).call(null,cljs.core.get,feed);
var url = javelin.core.formula(((function (feed_cell,items,item_count,get_feed,path){
return (function (G__14469,G__14470){
return (G__14469.cljs$core$IFn$_invoke$arity$3 ? G__14469.cljs$core$IFn$_invoke$arity$3(G__14470,"url","<No URL>") : G__14469.call(null,G__14470,"url","<No URL>"));
});})(feed_cell,items,item_count,get_feed,path))
).call(null,cljs.core.get,feed);
var title = javelin.core.formula(((function (feed_cell,items,item_count,get_feed,path,url){
return (function (G__14471,G__14472){
return (G__14471.cljs$core$IFn$_invoke$arity$3 ? G__14471.cljs$core$IFn$_invoke$arity$3(G__14472,"title","<No TITLE>") : G__14471.call(null,G__14472,"title","<No TITLE>"));
});})(feed_cell,items,item_count,get_feed,path,url))
).call(null,cljs.core.get,feed);
javelin.core.formula(((function (feed_cell,items,item_count,get_feed,path,url,title){
return (function (G__14475,G__14473,G__14474){
return (G__14473.cljs$core$IFn$_invoke$arity$2 ? G__14473.cljs$core$IFn$_invoke$arity$2(G__14474,G__14475) : G__14473.call(null,G__14474,G__14475));
});})(feed_cell,items,item_count,get_feed,path,url,title))
).call(null,path,get_feed,base_url);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,title,path,feed_cell,items,item_count], null);
});
hoplon.app_pages._index_DOT_html.make_item_getter = (function hoplon$app_pages$_index_DOT_html$make_item_getter(out_cell){
return (function (base_url,feed_path,item_path){
return (function (){var G__14479 = [cljs.core.str(base_url),cljs.core.str("/"),cljs.core.str(feed_path),cljs.core.str(item_path)].join('');
return fetch(G__14479);
})().then((function (resp){
return resp.json().then((function (data){
return Promise.resolve((function (){var G__14480 = out_cell;
var G__14481 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(data);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14480,G__14481) : cljs.core.reset_BANG_.call(null,G__14480,G__14481));
})());
}));
}));
});
});
hoplon.app_pages._index_DOT_html.get_item_cells = (function hoplon$app_pages$_index_DOT_html$get_item_cells(item){
var item_cell = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var get_item = hoplon.app_pages._index_DOT_html.make_item_getter(item_cell);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_item,javelin.core.formula(((function (item_cell,get_item){
return (function (G__14490,G__14491){
return (G__14490.cljs$core$IFn$_invoke$arity$2 ? G__14490.cljs$core$IFn$_invoke$arity$2(G__14491,"title") : G__14490.call(null,G__14491,"title"));
});})(item_cell,get_item))
).call(null,cljs.core.get,item),javelin.core.formula(((function (item_cell,get_item){
return (function (G__14492,G__14493){
return (G__14492.cljs$core$IFn$_invoke$arity$2 ? G__14492.cljs$core$IFn$_invoke$arity$2(G__14493,"path") : G__14492.call(null,G__14493,"path"));
});})(item_cell,get_item))
).call(null,cljs.core.get,item),javelin.core.formula(((function (item_cell,get_item){
return (function (G__14494,G__14495){
return (G__14494.cljs$core$IFn$_invoke$arity$2 ? G__14494.cljs$core$IFn$_invoke$arity$2(G__14495,"link") : G__14494.call(null,G__14495,"link"));
});})(item_cell,get_item))
).call(null,cljs.core.get,item_cell),javelin.core.formula(((function (item_cell,get_item){
return (function (G__14496,G__14497){
return DOMPurify.sanitize((G__14496.cljs$core$IFn$_invoke$arity$2 ? G__14496.cljs$core$IFn$_invoke$arity$2(G__14497,"content") : G__14496.call(null,G__14497,"content")));
});})(item_cell,get_item))
).call(null,cljs.core.get,item_cell)], null);
});
javelin.core.formula((function (G__14498,G__14499){
return (G__14498.cljs$core$IFn$_invoke$arity$1 ? G__14498.cljs$core$IFn$_invoke$arity$1(G__14499) : G__14498.call(null,G__14499));
})).call(null,cljs.core.println,hoplon.app_pages._index_DOT_html.pull_time);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14500 = (function (){var G__14501 = cljs.core.cst$kw$href;
var G__14502 = "app.css";
var G__14503 = cljs.core.cst$kw$rel;
var G__14504 = "stylesheet";
var G__14505 = cljs.core.cst$kw$type;
var G__14506 = "text/css";
return (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(G__14501,G__14502,G__14503,G__14504,G__14505,G__14506) : hoplon.core.link.call(null,G__14501,G__14502,G__14503,G__14504,G__14505,G__14506));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__14500) : hoplon.core.head.call(null,G__14500));
})(),(function (){var G__14507 = hoplon.core.loop_tpl_STAR_(hoplon.app_pages._index_DOT_html.feeds,(function (item__13769__auto__){
var vec__14508 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula((function (feed){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [feed], null);
})).call(null,item__13769__auto__));
var feed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14508,(0),null);
var vec__14511 = hoplon.app_pages._index_DOT_html.get_feed_entry_cells(hoplon.app_pages._index_DOT_html.base_url,feed);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(1),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(2),null);
var feed_cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(3),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(4),null);
var item_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(5),null);
var G__14514 = (function (){var con__13787__auto__ = (new cljs.core.Delay(((function (vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (){
var G__14515 = (hoplon.core.h2.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h2.cljs$core$IFn$_invoke$arity$1(title) : hoplon.core.h2.call(null,title));
var G__14516 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(url) : hoplon.core.p.call(null,url));
var G__14517 = (function (){var G__14518 = hoplon.core.loop_tpl_STAR_(items,((function (G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (item__13769__auto____$1){
var vec__14519 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (item){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null);
});})(G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
).call(null,item__13769__auto____$1));
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14519,(0),null);
var vec__14522 = hoplon.app_pages._index_DOT_html.get_item_cells(item);
var get_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14522,(0),null);
var title__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14522,(1),null);
var item_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14522,(2),null);
var link = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14522,(3),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14522,(4),null);
var G__14525 = (function (){var G__14527 = (function (){var G__14530 = cljs.core.cst$kw$href;
var G__14531 = link;
var G__14532 = title__$1;
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14530,G__14531,G__14532) : hoplon.core.a.call(null,G__14530,G__14531,G__14532));
})();
var G__14528 = " ";
var G__14529 = (function (){var G__14533 = cljs.core.cst$kw$click;
var G__14534 = ((function (G__14533,G__14527,G__14528,vec__14522,get_item,title__$1,item_path,link,content,vec__14519,item,G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (){
var G__14536 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.base_url) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.base_url));
var G__14537 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(path) : cljs.core.deref.call(null,path));
var G__14538 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(item_path) : cljs.core.deref.call(null,item_path));
return (get_item.cljs$core$IFn$_invoke$arity$3 ? get_item.cljs$core$IFn$_invoke$arity$3(G__14536,G__14537,G__14538) : get_item.call(null,G__14536,G__14537,G__14538));
});})(G__14533,G__14527,G__14528,vec__14522,get_item,title__$1,item_path,link,content,vec__14519,item,G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
;
var G__14535 = ">>";
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$3(G__14533,G__14534,G__14535) : hoplon.core.button.call(null,G__14533,G__14534,G__14535));
})();
return (hoplon.core.h3.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.h3.cljs$core$IFn$_invoke$arity$3(G__14527,G__14528,G__14529) : hoplon.core.h3.call(null,G__14527,G__14528,G__14529));
})();
var G__14526 = (function (){var G__14539 = cljs.core.cst$kw$html;
var G__14540 = content;
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__14539,G__14540) : hoplon.core.p.call(null,G__14539,G__14540));
})();
return (hoplon.core.li.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.li.cljs$core$IFn$_invoke$arity$2(G__14525,G__14526) : hoplon.core.li.call(null,G__14525,G__14526));
});})(G__14515,G__14516,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
);
return (hoplon.core.ul.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.ul.cljs$core$IFn$_invoke$arity$1(G__14518) : hoplon.core.ul.call(null,G__14518));
})();
return (hoplon.core.article.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.article.cljs$core$IFn$_invoke$arity$3(G__14515,G__14516,G__14517) : hoplon.core.article.call(null,G__14515,G__14516,G__14517));
});})(vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
,null));
var alt__13788__auto__ = (new cljs.core.Delay(((function (con__13787__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (){
return null;
});})(con__13787__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
,null));
var tpl__13789__auto__ = ((function (con__13787__auto__,alt__13788__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (p__13790__auto__){
var G__14541 = (function (){var or__6842__auto__ = (cljs.core.truth_(p__13790__auto__)?con__13787__auto__:alt__13788__auto__);
if(cljs.core.truth_(or__6842__auto__)){
return or__6842__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14541) : cljs.core.deref.call(null,G__14541));
});})(con__13787__auto__,alt__13788__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
;
return javelin.core.formula(tpl__13789__auto__).call(null,javelin.core.formula(((function (con__13787__auto__,alt__13788__auto__,tpl__13789__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed){
return (function (G__14542){
return (G__14542 > (0));
});})(con__13787__auto__,alt__13788__auto__,tpl__13789__auto__,vec__14511,url,title,path,feed_cell,items,item_count,vec__14508,feed))
).call(null,item_count));
})();
return (hoplon.core.section.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.section.cljs$core$IFn$_invoke$arity$1(G__14514) : hoplon.core.section.call(null,G__14514));
}));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__14507) : hoplon.core.body.call(null,G__14507));
})()], 0));
