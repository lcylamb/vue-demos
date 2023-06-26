## public

- 存放一些静态资源文件

## src

- 会被打包处理

## index.html

- type="module"表示支持 es6 模块化语法

```js
<script type="module" src="/src/main.ts"></script>
```

## package.json

- "type": "module"：在 node 环境中支持模块化语法

## tsconfig.node.json

- 在 node 环境下生效

### vite-env.d.ts

- 声明（declare）一些全局类型

#### createApp

- 是一个函数
- 返回值是一个对象，该对象身上有 mount、component、use、directive 等属性

#### createApp(App).mount("#app")

- 返回值是一个 Proxy 对象
- Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。
  - handler (en-US)包含捕捉器（trap）的占位符对象，可译为处理器对象
  - target 被 Proxy 代理虚拟化的对象。它常被作为代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。
