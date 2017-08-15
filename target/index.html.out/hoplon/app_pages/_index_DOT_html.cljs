(ns hoplon.app-pages._index_DOT_html ^{:line 2, :column 3} (:import goog.html.sanitizer.HtmlSanitizer goog.html.sanitizer.HtmlSanitizer.Builder goog.html.sanitizer.unsafe goog.html.sanitizer.AttributeWhitelist goog.string.Const goog.functions goog.html.SafeUrl goog.html.SafeHtml) (:require [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! constant? cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [set-attributes! check-val! set-styles! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong normalize-class li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b attribute? code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [feed-archive.let-promise :refer [let-promise]] [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq formulet defc defc= macroexpand-all mx formula-of cell-let]] [hoplon.core :refer [definterval text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))










(defc state
  {"base-url" nil
   "pull-time" ""
   "feeds" []
   :items {}})

(defc= base-url
  (get state "base-url")
  #(swap! state assoc-in ["base-url"] %))

(defc= pull-time
  (get state "pull-time"))

(defc= feeds
  (get state "feeds"))

(defn setup-state [base-url]
  (let-promise [[resp (js/fetch (str base-url
                                     "/current"))]
                [data (.json resp)]]
    (swap! state merge
           (js->clj data))))

(cell= (when base-url
         (setup-state base-url)))

(defn make-feed-getter [out-cell]
  (fn [base-url path]
    (let-promise [[resp (js/fetch (str base-url "/" path))]
                  [data (.json resp)]]
      (reset! out-cell (js->clj data)))))

(defn get-feed-entry-cells [base-url feed]
  (let [feed-cell (cell {})
        items (cell= (get feed-cell "items"))
        item-count (cell= (count items))
        get-feed (make-feed-getter feed-cell)
        path (cell= (get feed "path" "<No PATH>"))
        url (cell= (get feed "url" "<No URL>"))
        title (cell= (get feed "title" "<No TITLE>"))]
    (cell= (get-feed base-url path))
    [url title path feed-cell items item-count]))

(defn make-item-getter [out-cell]
  (fn [base-url feed-path item-path]
    (let-promise [[resp (js/fetch (str base-url "/" feed-path item-path))]
                  [data (.json resp)]]
      (reset! out-cell (js->clj data)))))

(defn get-sanitizer []
  (let [r (Builder.)
        justification (.from Const "Because images are ok, silly")]
    (.alsoAllowAttributes unsafe justification
                          r #js [#js {:tagName "img" :attributeName "src" :policy nil}])
    (.build r)))

(defn sanitize-html [html]
  (let [result (.sanitize (get-sanitizer) html)]
    (.log js/console result)
    (.unwrap SafeHtml result)))

(defn get-item-cells [item]
  (let* [key (get @item "path")
         item-cell (cell= (get (:items state) key)
                          #(swap! state assoc-in [:items key] %))
         get-item (make-item-getter item-cell)]
    [get-item
     (cell= (get item "title"))
     (cell= (get item "path"))
     (cell= (get item-cell "link"))
     (cell= (sanitize-html (get item-cell "content")))]))

(cell= (.log js/console (clj->js base-url)))


(html
 (head
  (link :href "app.css" :rel "stylesheet" :type "text/css"))
 (body
  (input :type "text" :value base-url
         :change #(reset! base-url (.-value (.-target %))))
  (loop-tpl :bindings [feed feeds]
    (let [[url title path feed-cell items item-count] (get-feed-entry-cells base-url feed)]
      (section
       (if-tpl (cell= (> item-count 0))
         (article
          (h2 title) (p url)
          (ul (loop-tpl :bindings [item items]
                (let [[get-item title item-path link content] (get-item-cells item)]
                  (li (h3 (a :href link title) " "
                          (button :click #(get-item @base-url @path @item-path)
                                  ">>"))
                      (p :html content)
                      )))))))))))
