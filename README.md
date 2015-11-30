### React 应用场景
1. 复杂场景下的高性能
1. 重用组件库 组件组合

## 组件 
组件 = React自有方法 + 用户自定义方法
* 自有的方法：render componentWillUpdate componentDidMount
* 自定义方法 ：只要符合js定义就好

## 事件
* 常用的事件处理函数
```
var content = React.createClass({
    getInitialState: function(){
        ......
    },
    handleChange: function(){
        //response to change
    },
    handleSubmit: function(){
        //submit something
    },
    render: function(){
        ......
    }
})
```
* 绑定事件的方法
```
onClick = {this.handleChange}//this 指向当前组件
```
### 常用事件
* 触摸类的事件 
1. onTouchCancel
1. onTouchEnd 
1. onTouchMove 
1. onTouchStart

* 鼠标类的事件
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
* 键盘类的事件
1. onKeyDown 
1. onKeyPress 
1. onKeyUp 

> onKeyPress=onKeyDown+onKeyUp

* 剪切类事件(支持的不是太好 不常用)
1. onCopy
1. onCut
1. onPaste

* 表单类事件
1. onChange
1. onInput
1. onSubmit (禁止默认事件 如跳转)

* 焦点类事件
1. onFocus
1. onBlur

* UI元素
1. onScroll

* 滚动
1. onWheel

## 属相和状态的含义和用法
props
每一个组件都有可变与不可变的属性，组件不能修改属性，props就是不可变的属性，当props改变时，组件的绘制方法不会被调用。
#### 属性的使用
1. 键值对的形式
2. var Ob= {name:"aaa",age:13}  使用 {...props}
3. instance.setProps({name:"aa"})
***
states
states就是组件的可变属性，只和组件本身有关，states的改变会触发组件的render函数，react与其他mvvm框架的最大的不同点就是，react组件可以想象成一个状态机，状态的改变会重绘UI，然后根据 dom diff 算法来绘制UI，而其他的mvvm框架则是对js对象的dirty check（Angularjs）或者defineProperty时指定的回调函数（Emberjs），因此，状态机制与dom diff的存在声称React更快。
我们在设计React组件时如何灵活的运用props与state是一个非常关键的要点。
#### 状态的用法
1. getInitialState
1. setState
使用setState-------diff算法--------更新dom

#### 属性和状态
1. 二者都是js对象
1. 两者改变都会触发render更新
3. 组件在运行时需要修改时的数据就是状态
refs
refs这个点主要用在上级组件调用下级组件的场景，这个场景非常多见。
componentDidMount
组件UI渲染完毕后调用，常用在这种业务场景：调用ajax获得数据后，渲染UI。
state的改变会触发render

正如上文中所说，React组件是一个一个状态机，state的改变会改变状态，会触发重绘，对于state的设计是对React组件设计的关键。

