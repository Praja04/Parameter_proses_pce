ace.define(
  "ace/mode/doc_comment_highlight_rules",
  [
    "require",
    "exports",
    "module",
    "ace/lib/oop",
    "ace/mode/text_highlight_rules",
  ],
  function (e, t, n) {
    "use strict";
    var r = e("../lib/oop"),
      i = e("./text_highlight_rules").TextHighlightRules,
      s = function () {
        this.$rules = {
          start: [
            { token: "comment.doc.tag", regex: "@[\\w\\d_]+" },
            s.getTagRule(),
            { defaultToken: "comment.doc", caseInsensitive: !0 },
          ],
        };
      };
    r.inherits(s, i),
      (s.getTagRule = function (e) {
        return {
          token: "comment.doc.tag.storage.type",
          regex: "\\b(?:TODO|FIXME|XXX|HACK)\\b",
        };
      }),
      (s.getStartRule = function (e) {
        return { token: "comment.doc", regex: "\\/\\*(?=\\*)", next: e };
      }),
      (s.getEndRule = function (e) {
        return { token: "comment.doc", regex: "\\*\\/", next: e };
      }),
      (t.DocCommentHighlightRules = s);
  },
),
  ace.define(
    "ace/mode/lean_highlight_rules",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/doc_comment_highlight_rules",
      "ace/mode/text_highlight_rules",
    ],
    function (e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./doc_comment_highlight_rules").DocCommentHighlightRules,
        s = e("./text_highlight_rules").TextHighlightRules,
        o = function () {
          var e = [
              "add_rewrite",
              "alias",
              "as",
              "assume",
              "attribute",
              "begin",
              "by",
              "calc",
              "calc_refl",
              "calc_subst",
              "calc_trans",
              "check",
              "classes",
              "coercions",
              "conjecture",
              "constants",
              "context",
              "corollary",
              "else",
              "end",
              "environment",
              "eval",
              "example",
              "exists",
              "exit",
              "export",
              "exposing",
              "extends",
              "fields",
              "find_decl",
              "forall",
              "from",
              "fun",
              "have",
              "help",
              "hiding",
              "if",
              "import",
              "in",
              "infix",
              "infixl",
              "infixr",
              "instances",
              "let",
              "local",
              "match",
              "namespace",
              "notation",
              "obtain",
              "obtains",
              "omit",
              "opaque",
              "open",
              "options",
              "parameter",
              "parameters",
              "postfix",
              "precedence",
              "prefix",
              "premise",
              "premises",
              "print",
              "private",
              "proof",
              "protected",
              "qed",
              "raw",
              "renaming",
              "section",
              "set_option",
              "show",
              "tactic_hint",
              "take",
              "then",
              "universe",
              "universes",
              "using",
              "variable",
              "variables",
              "with",
            ].join("|"),
            t = [
              "inductive",
              "structure",
              "record",
              "theorem",
              "axiom",
              "axioms",
              "lemma",
              "hypothesis",
              "definition",
              "constant",
            ].join("|"),
            n = [
              "Prop",
              "Type",
              "Type'",
              "Type\u208a",
              "Type\u2081",
              "Type\u2082",
              "Type\u2083",
            ].join("|"),
            r =
              "\\[(" +
              [
                "abbreviations",
                "all-transparent",
                "begin-end-hints",
                "class",
                "classes",
                "coercion",
                "coercions",
                "declarations",
                "decls",
                "instance",
                "irreducible",
                "multiple-instances",
                "notation",
                "notations",
                "parsing-only",
                "persistent",
                "reduce-hints",
                "reducible",
                "tactic-hints",
                "visible",
                "wf",
                "whnf",
              ].join("|") +
              ")\\]",
            s = [].join("|"),
            o = (this.$keywords = this.createKeywordMapper(
              {
                "keyword.control": e,
                "storage.type": n,
                "keyword.operator": s,
                "variable.language": "sorry",
              },
              "identifier",
            )),
            u =
              "[A-Za-z_\u03b1-\u03ba\u03bc-\u03fb\u1f00-\u1ffe\u2100-\u214f][A-Za-z0-9_'\u03b1-\u03ba\u03bc-\u03fb\u1f00-\u1ffe\u2070-\u2079\u207f-\u2089\u2090-\u209c\u2100-\u214f]*",
            a = new RegExp(
              [
                "#",
                "@",
                "->",
                "\u223c",
                "\u2194",
                "/",
                "==",
                "=",
                ":=",
                "<->",
                "/\\",
                "\\/",
                "\u2227",
                "\u2228",
                "\u2260",
                "<",
                ">",
                "\u2264",
                "\u2265",
                "\u00ac",
                "<=",
                ">=",
                "\u207b\u00b9",
                "\u2b1d",
                "\u25b8",
                "\\+",
                "\\*",
                "-",
                "/",
                "\u03bb",
                "\u2192",
                "\u2203",
                "\u2200",
                ":=",
              ].join("|"),
            );
          (this.$rules = {
            start: [
              { token: "comment", regex: "--.*$" },
              i.getStartRule("doc-start"),
              { token: "comment", regex: "\\/-", next: "comment" },
              {
                stateName: "qqstring",
                token: "string.start",
                regex: '"',
                next: [
                  { token: "string.end", regex: '"', next: "start" },
                  { token: "constant.language.escape", regex: /\\[n"\\]/ },
                  { defaultToken: "string" },
                ],
              },
              {
                token: "keyword.control",
                regex: t,
                next: [{ token: "variable.language", regex: u, next: "start" }],
              },
              {
                token: "constant.numeric",
                regex: "0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b",
              },
              {
                token: "constant.numeric",
                regex:
                  "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b",
              },
              { token: "storage.modifier", regex: r },
              { token: o, regex: u },
              { token: "operator", regex: a },
              { token: "punctuation.operator", regex: "\\?|\\:|\\,|\\;|\\." },
              { token: "paren.lparen", regex: "[[({]" },
              { token: "paren.rparen", regex: "[\\])}]" },
              { token: "text", regex: "\\s+" },
            ],
            comment: [
              { token: "comment", regex: "-/", next: "start" },
              { defaultToken: "comment" },
            ],
          }),
            this.embedRules(i, "doc-", [i.getEndRule("start")]),
            this.normalizeRules();
        };
      r.inherits(o, s), (t.leanHighlightRules = o);
    },
  ),
  ace.define(
    "ace/mode/matching_brace_outdent",
    ["require", "exports", "module", "ace/range"],
    function (e, t, n) {
      "use strict";
      var r = e("../range").Range,
        i = function () {};
      (function () {
        (this.checkOutdent = function (e, t) {
          return /^\s+$/.test(e) ? /^\s*\}/.test(t) : !1;
        }),
          (this.autoOutdent = function (e, t) {
            var n = e.getLine(t),
              i = n.match(/^(\s*\})/);
            if (!i) return 0;
            var s = i[1].length,
              o = e.findMatchingBracket({ row: t, column: s });
            if (!o || o.row == t) return 0;
            var u = this.$getIndent(e.getLine(o.row));
            e.replace(new r(t, 0, t, s - 1), u);
          }),
          (this.$getIndent = function (e) {
            return e.match(/^\s*/)[0];
          });
      }).call(i.prototype),
        (t.MatchingBraceOutdent = i);
    },
  ),
  ace.define(
    "ace/mode/lean",
    [
      "require",
      "exports",
      "module",
      "ace/lib/oop",
      "ace/mode/text",
      "ace/mode/lean_highlight_rules",
      "ace/mode/matching_brace_outdent",
      "ace/range",
    ],
    function (e, t, n) {
      "use strict";
      var r = e("../lib/oop"),
        i = e("./text").Mode,
        s = e("./lean_highlight_rules").leanHighlightRules,
        o = e("./matching_brace_outdent").MatchingBraceOutdent,
        u = e("../range").Range,
        a = function () {
          (this.HighlightRules = s), (this.$outdent = new o());
        };
      r.inherits(a, i),
        function () {
          (this.lineCommentStart = "--"),
            (this.blockComment = { start: "/-", end: "-/" }),
            (this.getNextLineIndent = function (e, t, n) {
              var r = this.$getIndent(t),
                i = this.getTokenizer().getLineTokens(t, e),
                s = i.tokens,
                o = i.state;
              if (s.length && s[s.length - 1].type == "comment") return r;
              if (e == "start") {
                var u = t.match(/^.*[\{\(\[]\s*$/);
                u && (r += n);
              } else if (e == "doc-start") {
                if (o == "start") return "";
                var u = t.match(/^\s*(\/?)\*/);
                u && (u[1] && (r += " "), (r += "- "));
              }
              return r;
            }),
            (this.checkOutdent = function (e, t, n) {
              return this.$outdent.checkOutdent(t, n);
            }),
            (this.autoOutdent = function (e, t, n) {
              this.$outdent.autoOutdent(t, n);
            }),
            (this.$id = "ace/mode/lean");
        }.call(a.prototype),
        (t.Mode = a);
    },
  );
