//  <div id="test">hello {{name}} <span>word</span></div>
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*` // 匹配标签
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)

const startTagClose = /^\s*(\/?)>/
const doctype = /^<!DOCTYPE [^>]+>/i
// #7298: escape - to avoid being passed as HTML comment when inlined in page
const comment = /^<!\--/
const conditionalComment = /^<!\[/

// html 模版编译为 ast 树
function parseHTML(html) {

}

export function compileToFunctions(template) {
  // console.log('template', template)
  // html 模版 ---> render 方法
  /**
    * @1 html 转为 ast 语法树 (ast 描述代码)
    * @2 通过此树重新生成代码
  */
 let ast = parseHTML(template)
}