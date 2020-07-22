import babel from '@rollup/plugin-babel'
import serve from 'rollup-plugin-serve'


export default {
  input: './src/index.js',
  output:{
    file: 'dist/umd/vue.js',
    name: 'Vue', //制定打包后的全局变量的名字
    format: 'umd', // 打包后的模块规范
    sourcemap: true, // es6 -> es5 开启源代码调试 可以找到源代码的报错位置
  },
  plugins: [
      babel({
        exclude: 'node_modules/**'
      },
      process.env.ENV === 'development' ? serve({
        open: true,
        openPage: '/public/index.html', // 默认打开html的路径
        port: 3000,
        contentBase: '', // 一当前路径启动一个服务
      }) : null
    )
  ]
}