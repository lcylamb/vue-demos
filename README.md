# Vue2 vs Vue3

1. data

- **vue2** 的 data 有两种写法
  - 对象
  - 函数（组件只能使用函数写法）
- **vue3** 的 data 只能为函数

2. 响应式区别

- **vue2** 使用 `Object.defineProperty` 实现响应式
  - 新增的数据不具有响应式
  - 需要使用 `this.$set()`
- **vue3** 新增数据也具有响应式

  - 因此 **vue3** 不需要`$set` 方法，删除了`$set`
  - vue3 响应式使用的是 `Proxy`

3. **vue3** 可以有多个应用实例

```js
//main.js文件
createApp(App).mount("#app");
createApp(App).mount("#container");
```

4. 指令

- vue3 新增指令：`v-memo`缓存部分 DOM

  ```js
  <div v-memo="[count]">{{ count }}</div>
  // count 发生变化时，才会改变
  ```

- vue3 中 `v-if` 优先级高于 `v-for`
- v-bind 删除`.sync`修饰符

5. 动态样式

- vue3 新增

```css
.xxx {
  color: v-bind(yyy);
}
```

- 样式穿透 `:deep()`或`/deep/`或`>>>`

  - 父组件修改子组件样式
    - 需要给子组件包一层类名
    - ui 库样式不符合要求时，修改组件样式

```css
.container :deep(.子组件类名) {
}
.container >>> .子组件类名 {
}
.container /deep/ .子组件类名 {
}
```

- 动态 style

```js
<div :style="{'width':20 +'px'}"></div>
<div :style="{'color':'green'}"></div>
```

- scoped 原理
  - 给当前组件每个 dom 元素添加一个自定义属性 <div data-v-7a7a37b1></div>
  - 给当前组件每个样式类名添加自定义样式属性 `.con[data-v-7a7a37b1]`
  - 也作用于子组件的根标签，如果没有根标签，则对子组件没有任何影响

6. Vue3 组件通讯

- props 父-子
- 自定义事件 子-父
- v-model 父<->子
- 插槽
- vuex/pinia 任意组件
- provide/inject
- $attrs
- $parent/$refs
- 路由参数 query-params-meta

7. 生命周期

```js
beforeCreate;
created;
beforeMount;
mounted;
beforeUpdate;
updated;
beforeDestroy--beforeUnmount;
destroyed--unmounted;
activated
deactivated
```
