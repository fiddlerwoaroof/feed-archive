(ns feed-archive.let-promise)

(defn unwind-bindings [bindings body]
  (let [the-binding (first bindings)
        remains (rest bindings)]
    `(.then ~(second the-binding)
            (fn [~(first the-binding)]
              ~@(if (empty? remains)
                  `((.resolve js/Promise
                              (do ~@body)))
                  `(~(unwind-bindings remains body)))))))

(defmacro let-promise [[& bindings] & body]
  (unwind-bindings bindings body))
                  
