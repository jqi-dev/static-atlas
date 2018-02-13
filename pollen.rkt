#lang racket

(require pollen/decode pollen/misc/tutorial txexpr)

#| change default command character |#
(module setup racket
  (provide (all-defined-out))
  (define command-char #\@))

#| provide functions to other files |#
(provide (all-defined-out))

#| utilities for creating paragraphs based on linebreaks and inserting dashes and quotes |#
(define (root . elements)
     (txexpr 'root empty (decode-elements elements
                                          #:txexpr-elements-proc decode-paragraphs
                                          #:exclude-tags '(script title subtitle)
                                          #:string-proc (compose1 smart-quotes smart-dashes))))

#| markup definitions |#
(define section-title-tag 'h2)
(define section-title-class "f4 pt4 ttu tracked fw6 sans-serif gray")
(define (section-title . text)
  `(,section-title-tag ((class ,section-title-class)) ,@text))

(define inline-class "tc w-60")
(define (inline . element)
  `(div ((class ,inline-class)) ,@element))

(define sidebar-class "right-0 fl w-100 w-45-sl absolute-ns pl4 pr4 pt1 sans-serif f6 pr5-ns pb3")
(define (sidebar . element)
   `(div ((class ,sidebar-class)) ,@element))

(define (image src #:width [width "100%"] #:position [position "center"])
  `(img ((src ,src)
         (class "pl3 pr3 pb2 mw5")
         (style ,(string-append
                  (format "width: ~a ;" width)
                  (format "float: ~a ;" position))))))

(define (component src)
  (define unique-id (symbol->string (gensym)))
  `(iframe ((src ,src)
            (class "iframe w-100 mw6-ns mw7 v-mid")
            (id ,unique-id)
            (scrolling "no")
            (frameborder "0"))))



(define (caption . text)
  `(div ((class "w-100 mw7"))
    (div ((class "w-100 mw5 gray left mb4 mb0-ns pr4 pl4")) ,@text)))

(define (shadow-component src)
  (define unique-id (symbol->string (gensym)))
  (define source (file->string src))
  `(@
    (div ((class " w-100 mw7-ns")
          (id ,unique-id)))
    (script ,(format "attach_component(~a,'~a')" unique-id src))))
