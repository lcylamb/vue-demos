# 组件通讯

1. props

```js
props:['count'],
props:{
   count:Number
}
props:{
   count:{
      type:Number,
      required:true,
      default:11,
   }
}
```

2. 自定义事件

- Vue3 中如果给组件绑定了原生的 DOM 事件，并且组件有根标签，则为原生事件，否则依然是自定义事件
- 子组件用 emits 接收自定义事件

3. v-model

- vue3 中 v-model 绑定的是 modelValue 属性和 update:modelValue 事件

- Vue3 去除了`v-bind:count.sync='count'`通讯方式
  - .sync 做了两个事情
  ```js
  1. v-bind:count = 'count' 绑定了自定义属性
  2. @count='count'         绑定了 update:count 自定义事件
  ```
- v-model 的第一种使用方式

```js
<Demo v-model="count"></Demo>
// 子组件接收展示
props:['modelValue']
<p>{{modelValue}}</p>
// 触发
this.$emit('update:modelValue',val)
```

- v-model 的第二种使用方式

```js
<Demo v-model:count="count"></Demo>;
// 子组件接收展示
props: ["count"], (<p> {{ count }}</p>);
// 触发
this.$emit("update:count", val);
```

4. 插槽
   作用：传递标签数据
   必要条件：组件一定要写成双标签形式
   使用场景：组件间传递标签数据，使用 ui 组件库
   如何使用：
   1. 一般情况下，重要的内容优先使用默认插槽
   2. 如果传递的标签结构需要指定渲染的位置，使用具名插槽
   3. 如果子组件需要向父组件传递数据，使用作用域插槽

- 默认插槽

```js
<Demo>
  <div>默认插槽传递的标签数据</div>
<Demo/>
 {/* Demo组件内部 */}
<div>
   <slot></slot>
</div>
```

- 具名插槽

```js
<Demo>
   <template v-slot:nameSlot>
      <div>具名插槽传递的标签数据</div>
   </template>
   <template #footer>
      <div>具名插槽简写</div>
   </template>
</Demo>
// Demo组件内部
<div>
   <slot name="nameSlot"></slot>
   <slot name="footer"></slot>
</div>
```

- 作用域插槽
  - 基于默认插槽和具名插槽，用于子向父传递数据

```js
<div>{{count}}</div>
<Demo>
   <template #footer="{count}">
      <div>具名插槽---作用域插槽{{count}}</div>
   </template>
   <template #default="{count}">
      <div>默认插槽---作用域插槽{{count}}</div>
   </template>
</Demo>
// Demo组件内部
<slot name="footer" :count="count"></slot>
<slot :count="count"></slot>
```

5. Vuex

- Vue3 中改变创建和引入 store 的方式
  - 从 vuex 解构出 `createStore` 方法，创建 `store` 对象
  - 在挂载之前 use()store 对象

```js
import { createStore } from "vuex";
const store = creaStore({
  modules: {},
});
createApp(App).use(store).mount("#app");
```

mode
aaa
