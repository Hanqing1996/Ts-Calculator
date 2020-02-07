#### tsc -w 1.ts
* 作用
不停地把 ts 编译成 js 文件
> 注意浏览器不支持 ts,在 html 中我们只能引入 js。所以我们需要 tsc -w 1.ts 时时刻刻地工作


#### 什么时候要用 class
1.  
> 比如在 vue 组件 validator 中，我们需要给每个组件一个 rules 。同时我们希望每个 rules 是可修改的，且彼此独立的。那么我们就需要创建一个 rulesClass，每个 rules 都是这个类的实例。
2. 
> 

#### 【DOM】获取触发事件的元素text
```
container.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})
```

#### 【DOM】TS:判断触发事件的元素类型
```
container.addEventListener('click',(e)=>{
    if(e.target instanceof HTMLButtonElement){
        let button:HTMLButtonElement=e.target
        console.log(button.textContent)
    }

    // warn:Property 'textContent' does not exist on type 'EventTarget'.
    console.log(e.target.textContent)
})
```

#### 【重构】
1. 加注释，明确每部分代码的功能
2. 重复出现的变量/操作，抽取到一个函数里面
3. 复杂的 if-else 逻辑，用表驱动编程优化