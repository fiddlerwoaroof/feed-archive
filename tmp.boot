(set-env!
  :dependencies '[[adzerk/boot-cljs          "1.7.228-2"]
                  [adzerk/boot-reload        "0.4.13"]
                  [tailrecursion/boot-jetty  "0.1.3"]
                  [hoplon/hoplon             "6.0.0-alpha17"]
                  [org.clojure/clojure       "1.8.0"]
                  [org.clojure/clojurescript "1.9.293"]
                  [com.cemerick/piggieback "0.2.2"]
                  [adzerk/boot-cljs-repl   "0.3.3"]
                  [weasel                  "0.7.0" ]
                  [org.clojure/tools.nrepl "0.2.12"]]
  :source-paths #{"src"}
  :asset-paths  #{"assets"})

(require
 '[adzerk.boot-cljs         :refer [cljs]]
 '[adzerk.boot-reload       :refer [reload]]
 '[hoplon.boot-hoplon       :refer [hoplon prerender]]
 '[tailrecursion.boot-jetty :refer [serve]]
 '[adzerk.boot-cljs-repl    :refer [cljs-repl cljs-repl-env start-repl]]
 )

(require 'boot.repl)
(swap! boot.repl/*default-dependencies*
       concat '[;[cider/cider-nrepl "0.15.0"]
                [refactor-nrepl "2.4.0-SNAPSHOT"]])

(swap! boot.repl/*default-middleware*
       conj 'cider.nrepl/cider-middleware)


(deftask dev
  "Build situation-editor for local development."
  []
  (comp (watch)
        (speak)
        (hoplon)
        (reload)
        (cljs-repl-env)
        (cljs :source-map true :optimizations :none)
        (serve :port 8000) ))

(deftask prod
  "Build situation-editor for production deployment."
  []
  (comp
    (hoplon)
    (cljs :optimizations :advanced)
    (target :dir #{"target"})))
