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
  - 和 vue2 一致
  - 有三种写法
  ```js
  props:['count']
  props:{
    count:Number
  }
  props:{
    count:{
      type:Number,
      required:true,
      default:1
    }
  }
  ```
- 自定义事件 子-父
  - 在 vue3 中给组件绑定事件默认是原生事件
    1. 组件有根标签
    2. 绑定的是原生 DOM 事件
    3. 如果不是原生 DOM 事件依然被认定为自定义事件，使用触发自定义事件方式触发
    4. 移除了`.native` 修饰符
- v-model 父<->子
- 插槽
- vuex/pinia 任意组件
- provide/inject
- $attrs
- $parent/$refs
- 路由参数 query-params-meta
  组件通讯（详）

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

6. provide/inject

- 作用：逐级透传
- 注入的数据**不是响应式**的（可以改变）

- 祖先组件提供数据

```js
// 祖先组件使用数据
<p>{{_.provides.count}}</p>
provide: {
  count: 1;
}
// 提供的数据依赖于data中的数据
provide(){
   return {
      count:this.count
   }
}
// 为整个应用层提供依赖---用于编写插件
const app = createApp(App)
app.provide('count',1)
```

- 子孙组件注入
  - 注入会在组件自身的状态之前被解析，因此可以在 data() 中访问到注入的属性

```js
inject: ["count"];
data(){
   return {
      newCount:this.count
   }
}
// 注入别名
inject：{
   localCount:{
      from:'count'
   }
}
// 注入默认值
inject :{
   localCount:{
      from:'count',
      default:222
   }
}
```

- 响应式的 provide+inject 使用`computed()`组合 API

```js
// 祖先组件
import { computed} from 'vue'
data(){
   return {
      msg:'hello',
   }
}
provide:{
   msg:computed(()=>this.msg)
}
// 后代组件
inject：['msg']
```

- 使用 Symbol 作为注入名

```js
// key.ts
export const myInjectKey = Symbol();
// 祖先组件
import {computed} from 'vue'
import {myInjectKey} from './utils/key'
data(){
   return {
      count:111
   }
}
provide:{
   [myInjectKey]:computed(()=>this.count)
}
// 后代组件
import {myInjectKey} from './utils.key'
inject:{
   localKey:{
      from:myInjectKey
   }
}
```

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

修改了这里

再次修改
