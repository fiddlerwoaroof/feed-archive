(set-env!
 :dependencies '[[adzerk/boot-cljs          "2.1.1"]
                 [adzerk/boot-reload        "0.5.1"]
                 [tailrecursion/boot-jetty  "0.1.3"]
                 [hoplon/hoplon             "7.0.2"]
                 [org.clojure/clojure       "1.8.0"]
                 [org.clojure/clojurescript "1.9.854"]
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
       concat '[;[cider/cider-nrepl "0.15.1-SNAPSHOT"]
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
        (cljs :source-map true :optimizations :none
              :compiler-options {:foreign-libs [{:file "src/purify.min.js"
                                                 :provides ["cure53.dom-purify"]}]
                                 :externs ["externs.js"]})
        (serve :port 8006)))

;; (deftask dev
;;   "Build situation-editor for local development."
;;   []
;;   (comp (watch)
;;         (speak)
;;         (hoplon)
;;         (reload)
;;         (cljs-repl-env)
;;         (cljs :source-map true :optimizations :none
;;               :compiler-options {:foreign-libs [{:file "src/purify.min.js"
;;                                                  :provides ["cure53.dom-purify"]}]
;;                                  :externs ["externs.js"]})
;;         (serve :port 8006)))

(deftask prod
  "Build feed-archive for production deployment."
  []
  (comp
   (hoplon)
   (cljs :source-map true :optimizations :advanced
         :compiler-options {:foreign-libs [{:file "src/purify.min.js"
                                            :provides ["cure53.dom-purify"]}]
                            :externs ["externs.js"]})
   (target :dir #{"target"})))

(defn start-dev []
  (def p (future (boot (dev)))))
