## 今日学了什么
####小知识点：
	（一）模板语法
	1理解模板：
	js语法：双大括号表达式，指令（以v-开头自定义属性）
	2.双大括号表达式：
		{{xxx}}向页面输出数据
	3.	强制数据绑定v-bind 简写： 功能：指定变化的属性值；
		绑定事件监听v-on：click=‘’，简写@click=‘’，功能：绑定事件名的回调函数；
		<button @click="test">doudou</button>
		methods:{
			test(){
				console.log(this) this就是vm对象
					}	
			}
	4.vue会自动给vm添加到data中的所有的属性,
	5.计算属性computed什么时候的调用：初始化显示和页面数据更改
	（二）计算属性和监视
		1.计算属性
		computed
		计算属性什么时候显示:初始化、相关数据发生改变
		2.监视属性
		通过vm的$watch()或者watch配置来监视指定的属性
		【vm.$watch('lastName',function(value){
    		  return this.fullName2 =this.firstName +'_' + value
    		})】
		3.计算属性监视
		通过getter/setter实现对属性数据的显示和监视
		计算属性存在缓存，多次读取只执行一次getter计算
	（三）class和style绑定
		专门实现动态效果的技术
		1.class绑定: :class='xxx'
			xxx是对象	---类名确定，不确定要不要
			xxx是字符串 ----类名不确定
			xxx是数组
		 2.style绑定
 			:style="{ color: activeColor, fontSize: fontSize + 'px' }"
			activeColor的值  不能写pink,green
	（四）条件渲染
		v-if v-else
		v-show
		如果需要频繁切换，v-show可以
	（五）列表渲染
		1.v-for 遍历数组，列表的删除和更新。
			删除<button @click=“deleteP（index）”>删除</button>
				methods:{
					deteleP(index){
						this.persons.splice(index,1)
					}
			
					}
			更新<button @click="updateP(index,{name:xxx,age:12})">更新</button>
				updateP(index,newP){
					this.persons.splice(index,1,newP)
				}
			此时的splice()不再是原生数组的方法而是重写后的方法（变异的方法），两步走：
				先调用原生数组对应的方法更新数组；更新界面
		
		2、列表的搜索与排序，

####原先的知识：
	splice()从数组中添加删除项目，然后返回被删除的项目
	indexOf()  返回某个指定字符串值在字符串中首次出现的位置，如果检索的字符串值没有出现，则返回的是-1，对大小写敏感
	sort() 数组排序

	arrayObject.splice(index,howmany,item1,.....itemx)
	index 必选，整数，规定添加挥着删除的的项目的位置，如果是负数可以从数组的结尾处规定位置
	howmany:必选，要删除的项目的数量，如果设0，则不会删除项目
	item1：可选，向数组添加新的项目


##遇到问题，如何解决
	不会：
变异方法，-----先调用原生数组对应的方法更新数组；更新界面
列表的删除，更新，搜索，排序