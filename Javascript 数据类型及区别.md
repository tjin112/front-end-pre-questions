## Javascript 数据类型及区别

#### 1. 八种数据类型

   			1. Undefined
   			2. Null
   			3. Number
   			4. Boolean
   			5. String
   			6. Object
   			7. Symbol (创建后独一无二、不可改变，主要为了解决可能会出现的全局变量问题)
   			8. BigInt （表示任意精度格式的整数，可以安全地存储和操作大整数）



#### 2. 堆（heap）和栈 (Stack)

- 栈：原始数据类型（**primivates**）（`undefined`, `null`, `Boolean`, `Number`, `String`）
- 堆：引用数据类型 （**reference type**）(`Object`, `Array`, `Function`)

##### 堆栈数据存储区别

1. 原始数据类型直接存储在栈（Stack）中的简单数据段，**占据空间小，大小固定**， 属于被频繁使用数据，所以存放在栈中
2. 引用数据类型存储在栈（heap）中的对象，**占据空间大，大小固定**。 

-  如果存储在栈中，**将会影响性能**。引用数据类型在**栈**中存储了指针，**该指针指向队中实体的起始位置**， 当解释器寻找引用值时，会首先检索其**在栈中的地址**。

#### 3. 数据类型检测的方式

1. ###### typeof

   ```js
   console.log(typeof 2) //number
   console.log(typeof true) //boolean
   console.log(typeof 'string') //string
   console.log(typeof function(){}) //function
   console.log(typeof {}) //object
   console.log(typeof undefined) //undefined
   
   console.log(typeof []) //object
   console.log(typeof {}) //object
   console.log(typeof null) //object 
   ```

   **数组，对象，null 会被判断为object**

2. ###### instanceof

   instanceof 可以正确判断对象的类型，其内部运行机制时判断在其原型链中能否找到该类型的原型。

   ```js
   console.log(2 instanceof Number)  // false
   console.log(true instanceof Boolean)  //false
   console.log('string' instance of String)  //false
   
   console.log([] instanceof Array)  //true
   console.log({} instanceof Object)  //true
   console.log(function(){} instanceof Function)  //true
   ```

   **instanceof 只能正确判断引用类型，不能判断基本类型。instanceof 可以测试一个对象在其原型链上是否存在一个构造函数的prototype**

#### 4.null 和 undefined 的区别

​	undefined 和 null 都是基本数据，这两个基本数据类型分别只有一个值，就是undefined和null。

​    undefined 代表的含义是未定义，null代表的含义是空对象。 

​	一般变量声明但还**没有定义**会返回undefined，   null主要用于赋值给一些可能会返回对象的变量，作为初始化



#### 5. 比较操作符 ‘===’，‘==’ 的区别

1.  == 进行相等判断，如果两边***类型***不一致，则会进行强制类型转化后在进行比较
2. === 进行判断时，如果两边***类型***不一致，不会进行类型强转，而是直接返回false



#### 6. 如何判断一个对象时空对象

```js
if(Json.stringify(Obj) === '{}'){
    console.log('空对象')
}

//使用es6 Object.keys()判断
if(Object.keys(Obj).length<=0){
    console.log('空对象')
}
```



#### 7. const 声明变量

const 保证的并不是变脸的值，而是变量指向的那个***内存地址***不能改变。

对于***基本类型***的数据（数值、字符串、布尔值）, 值是保存在变量指向的那个内存地址，因此等同于常量



但对于***引用类型***的数据（例如对象或者数组），变量指向数据的***内存地址***，保存的只是一个***指针***，const 只保证这个指针不变，但是指向的数据结构可不可变， 就无法控制。



#### 8. 箭头函数 this 指向

箭头函数不同于传统javascript 中的函数，箭头函数并没有属于自己的this，他所谓的this时捕获其所在上下文的this,所以也不会被new调用。

```js
const obj = {
    getArrow(){
        return ()=>{
            console.log(this===obj) //true, this指向obj
        }
    }
}
```

#### 9. 扩展运算符的作用以及使用场景

1. ​	对象扩展运算符

   对象的扩展运算符用于取出参数对象中所有可遍历的属性，拷贝到当前对象中。

   ```js
   let bar = {a:1,b:2}
   let barz = {...bar} //{a:1,b:2}
   ```

2.  拓展运算符对对象实例的拷贝属于浅拷贝。数组的扩展运算符可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。

   ```js
   console.log(...[1,2,3]) //1 2 3
   
   console.log(...[1,[2,3,4],5]) // 1 [2,3,4],5
   
   //将数组转换为参数序列
   function add(a,b){
       return a + b
   }
   const array = [1,2]
   add(...array) //3
   
   //复制数组
   const arr1 = [1,2]
   const arr2 = [...arr1]
   ```

   

3. 

   





 





































#### 

​        