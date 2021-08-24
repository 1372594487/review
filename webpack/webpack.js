// TODO index.js import 谁
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

//TODO index.js import 谁
function getModuleInfo(file) {
    //读取文件
    const body = fs.readFileSync(file, 'utf-8')
    //文本 => 对象 正则
    // 抽象过程 去掉分隔符 用对象表示
    // AST
    // console.log(body);
    const ast = parser.parse(body, {
        sourceType: "module" //表示我们要解析的是ES模块
    })
    //分析 节点遍历 对象
    const deps = {}
    traverse(ast, {
        //访问者模式 访问所有的import
        ImportDeclaration({ node }) {
            //遇到import
            const dirname = path.dirname(file);
            let abspath = './' + path.join(dirname, node.source.value);
            abspath = abspath.replace(/\\/g, "/");
            // console.log(dirname, node.source.value, abspath);
            deps[node.source.value] = abspath;
        },
    });

    //ES6 =>ES5
    const { code } = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    })

    const moduleInfo = {
        file,
        deps,
        code,
    }
    return moduleInfo
}

// const info = getModuleInfo('./src/index.js')
// console.log('info =>', info);

function parseModule(file) {
    const entry = getModuleInfo(file)
    const temp = [entry]
    const depsGraph = {}

    getDeps(temp, entry)

    temp.forEach(info => {
        depsGraph[info.file] = {
            deps: info.deps,
            code: info.code
        }
    })
    return depsGraph
}

function getDeps(temp, { deps }) {
    // deps = {add,b,c,d}
    Object.keys(deps).forEach(key => {
        const child = getModuleInfo(deps[key])
        temp.push(child)
        getDeps(temp, child)
    })
}

const deps = parseModule('./src/index.js')
console.log('deps =>', deps);

function bundle(file) {
    const depsGraph = JSON.stringify(parseModule(file))
    return `(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('${file}')
    })(${depsGraph})`;
}
const content = bundle('./src/index.js')
!fs.existsSync('./dist') && fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js', content)
