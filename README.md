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

#### 命名
1. 对于一时不知道叫什么的函数，应该暂时起名为 xxx,yyy,zzz...
2. 根据返回值命名
```
function updateContainer(container) {
    strs.forEach(array => {
        let rowDiv: HTMLDivElement = document.createElement('div')
        rowDiv.classList.add('row')
        array.forEach(element => {
            let button: HTMLButtonElement = createButton(element, `text-${element}`)
            rowDiv.appendChild(button)
        })
        container.appendChild(rowDiv)
    })
    return container
}
```

#### 重构
1. 加注释，明确每部分代码的功能
2. 重复出现的变量/操作，抽取到一个函数里面
3. 最终每个函数不应超过5行
4. 重构是每天都要进行的

#### 使用面向对象优化
1. 全局变量：改为 class 的字段,各个字段的初始化不在 constructor 中
2. 各部分操作性代码：封装成 class 的函数，
3. 注意 class 属性字段不作为参数（read:this.xxx）或返回值（wirite:this.xxx=...）