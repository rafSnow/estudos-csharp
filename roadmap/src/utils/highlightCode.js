const HIGHLIGHT_COLORS = {
  keyword: "#c678dd",
  type: "#e5c07b",
  string: "#98c379",
  comment: "#5c6370",
  number: "#d19a66",
  method: "#61afef",
  attribute: "#56b6c2",
  operator: "#c678dd",
};

const csharpKeywords = [
  "abstract",
  "as",
  "async",
  "await",
  "base",
  "bool",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "checked",
  "class",
  "const",
  "continue",
  "decimal",
  "default",
  "delegate",
  "do",
  "double",
  "else",
  "enum",
  "event",
  "explicit",
  "extern",
  "false",
  "finally",
  "fixed",
  "float",
  "for",
  "foreach",
  "goto",
  "if",
  "implicit",
  "in",
  "int",
  "interface",
  "internal",
  "is",
  "lock",
  "long",
  "namespace",
  "new",
  "null",
  "object",
  "operator",
  "out",
  "override",
  "params",
  "private",
  "protected",
  "public",
  "readonly",
  "record",
  "ref",
  "return",
  "sbyte",
  "sealed",
  "short",
  "sizeof",
  "stackalloc",
  "static",
  "string",
  "struct",
  "switch",
  "this",
  "throw",
  "true",
  "try",
  "typeof",
  "uint",
  "ulong",
  "unchecked",
  "unsafe",
  "ushort",
  "using",
  "var",
  "virtual",
  "void",
  "volatile",
  "when",
  "where",
  "while",
  "yield",
  "init",
  "required",
  "get",
  "set",
  "value",
  "partial",
  "global",
  "not",
  "and",
  "or",
  "with",
];

const csharpTypes = [
  "Console",
  "String",
  "Int32",
  "Int64",
  "Boolean",
  "Decimal",
  "Double",
  "List",
  "Dictionary",
  "HashSet",
  "Array",
  "Task",
  "IEnumerable",
  "IList",
  "ICollection",
  "IDictionary",
  "IDisposable",
  "Exception",
  "ArgumentException",
  "InvalidOperationException",
  "NullReferenceException",
  "StringBuilder",
  "Span",
  "ReadOnlySpan",
  "Memory",
  "Func",
  "Action",
  "Predicate",
  "EventHandler",
  "IComparable",
  "IEquatable",
  "CancellationToken",
  "CancellationTokenSource",
  "HttpClient",
  "ILogger",
  "IRepository",
  "IService",
];

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function highlightCSharp(code) {
  const escaped = escapeHtml(code);
  const lines = escaped.split("\n");

  const highlighted = lines.map((line) => {
    // Comentários de linha inteira
    if (line.trimStart().startsWith("//")) {
      return `<span style="color:${HIGHLIGHT_COLORS.comment};font-style:italic">${line}</span>`;
    }

    let result = line;

    // Strings (com aspas duplas, incluindo interpolação $")
    result = result.replace(
      /(\$?&quot;(?:[^&]|&(?!quot;))*?&quot;|&quot;(?:[^&]|&(?!quot;))*?&quot;)/g,
      `<span style="color:${HIGHLIGHT_COLORS.string}">$1</span>`,
    );

    // Strings entre aspas simples (char)
    result = result.replace(
      /(&#39;.&#39;|&#39;\\.'&#39;)/g,
      `<span style="color:${HIGHLIGHT_COLORS.string}">$1</span>`,
    );

    // Atributos [Attribute]
    result = result.replace(
      /(\[(?:Obsolete|Serializable|Flags|Test|Fact|Theory|HttpGet|HttpPost|Route|ApiController|Required)\])/g,
      `<span style="color:${HIGHLIGHT_COLORS.attribute}">$1</span>`,
    );

    // Números
    result = result.replace(
      /\b(\d+\.?\d*[fFdDmMlL]?)\b/g,
      `<span style="color:${HIGHLIGHT_COLORS.number}">$1</span>`,
    );

    // Tipos conhecidos (antes de keywords para não colidir)
    const typesPattern = new RegExp(`\\b(${csharpTypes.join("|")})\\b`, "g");
    result = result.replace(
      typesPattern,
      `<span style="color:${HIGHLIGHT_COLORS.type}">$1</span>`,
    );

    // Keywords
    const kwPattern = new RegExp(`\\b(${csharpKeywords.join("|")})\\b`, "g");
    result = result.replace(
      kwPattern,
      `<span style="color:${HIGHLIGHT_COLORS.keyword}">$1</span>`,
    );

    // Comentários inline (// no meio da linha) — processamos por último
    const commentIdx = result.indexOf("//");
    if (commentIdx > 0) {
      const before = result.substring(0, commentIdx);
      const comment = result.substring(commentIdx);
      // Apenas colore se não estiver dentro de uma string já highlight
      if (
        (before.match(/<span/g) || []).length ===
        (before.match(/<\/span>/g) || []).length
      ) {
        result = `${before}<span style="color:${HIGHLIGHT_COLORS.comment};font-style:italic">${comment}</span>`;
      }
    }

    return result;
  });

  return highlighted.join("\n");
}

export function highlightBash(code) {
  const escaped = escapeHtml(code);
  const lines = escaped.split("\n");

  const highlighted = lines.map((line) => {
    // Comentários
    if (line.trimStart().startsWith("#")) {
      return `<span style="color:${HIGHLIGHT_COLORS.comment};font-style:italic">${line}</span>`;
    }

    let result = line;

    // Strings
    result = result.replace(
      /(&quot;[^&]*?&quot;)/g,
      `<span style="color:${HIGHLIGHT_COLORS.string}">$1</span>`,
    );

    // Comandos git
    result = result.replace(
      /\b(git)\s+([\w-]+)/g,
      `<span style="color:${HIGHLIGHT_COLORS.keyword}">$1</span> <span style="color:${HIGHLIGHT_COLORS.method}">$2</span>`,
    );

    // Comandos dotnet
    result = result.replace(
      /\b(dotnet)\s+([\w-]+)/g,
      `<span style="color:${HIGHLIGHT_COLORS.keyword}">$1</span> <span style="color:${HIGHLIGHT_COLORS.method}">$2</span>`,
    );

    // Flags
    result = result.replace(
      /(\s)(--?[\w-]+)/g,
      `$1<span style="color:${HIGHLIGHT_COLORS.attribute}">$2</span>`,
    );

    return result;
  });

  return highlighted.join("\n");
}

export function highlightCode(code, language) {
  if (language === "bash") return highlightBash(code);
  return highlightCSharp(code);
}
