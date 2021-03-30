<template>
    <!-- vue内置指令学习 -->
    <div id="demo5">
        <!-- v-html、v-text、{{}}
        v-html用法： 更新元素的 innerHTML 
        用法和v-text 相似 但是它可以将HTML片段填充到标签中可能有安全问题, 一般只在可信任内容上使用 v-html，永不用在用户提交的内容上
        它与v-text区别在于v-text输出的是纯文本，浏览器不会对其再进行html解析，但v-html会将其当html标签解析后输出。
        v-text:更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。
        用于将数据填充到标签中，作用于插值表达式类似，但是没有闪动问题 （如果数据中有HTML标签会将html标签一并输出 ）
        注意：此处为单向绑定，数据对象上的值改变，插值会发生变化；但是当插值发生变化并不会影响数据对象的值 -->
        <h1>v-html、v-text指令以及{{}}数据绑定</h1>
        <div id="div0" v-html="riqi"></div>
        <div id="div00">{{riqi}}</div>
        <div id="div000" v-text="riqi"></div>
        <br>
        <div id="div1" v-html="'现在是'+year+'年'+month+'月'"></div>
        <div id="div11" v-text="'现在是'+year+'年'+month+'月'">
        </div>
        <div id="div111">现在是{{year}}年{{month}}月</div>
        <br>
        <!-- v-show的用法:v-show 指令通过改变元素的 css 属性（display）来决定元素是显示还是隐藏。 -->
        <h1>v-show指令</h1>
        <div id="div2" v-show="type=='晴天'">今天是晴天</div>
        <div id="div22" v-show="type1!='晴天'">今天不是晴天</div>
        <div id="div222" v-show="type=='阴天'">今天是阴天</div>
        <div id="div2222" v-show="yes">今天是晴天</div>
        <div id="div22222" v-show="no">今天是阴天</div>
        <br>
         <!-- v-if的用法 -->
         <!-- 类型： any
        用法： 根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块。 
        v-show 指令的功能与 v-if 指令相似。不过 v-if 指令会根据表达式重建或销毁元素或组件以及它们所绑定的事件。v-show 指令只是简单地设置 css 属性。
        因为 v-if 指令开销较大，所以更适合条件不经常改变的场景。而 v-show 指令适合条件频繁切换的场景。 -->
        <h1>v-if 组合指令</h1>
        <div id="div3" v-if='yes'>yes</div>
        <div id='div33' v-if='no'>no</div>
        <div id='div333' v-show='no'>no</div>
        <div id='div3333' v-show='yes'>yes</div>
        <br>
         <!-- v-else的用法 -->
        <div id="div4" v-if="0>1">这是不可能的</div>
        <div id="div44" v-else>0肯定小于1</div>
        <!-- v-else-if 指令 与前面两个配合使用-->
        <br>
        <div id="div5" v-if="0==1">0等于1</div>
        <div id="div55" v-else-if="0<1">0小于1</div>
        <div id="div555" v-else>0大于1</div>
        <!-- v-for指令 -->
        <!-- 类型： Array | Object | number | string
        用法： 基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression ，为当前遍历的元素提供别名： -->
        <div id="div6">
            <h1>v-for指令</h1>
            <h3>桃园三结义</h3>
            <li v-for="vlaue in array">{{vlaue}}</li>
        </div>
        <br>
        <!-- v-on指令 -->
        <!-- 类型： Function | Inline Statement
        参数： event (required)
        修饰符：
        .stop - 调用 event.stopPropagation()。
        .prevent - 调用 event.preventDefault()。
        .capture - 添加事件侦听器时使用 capture 模式。
        .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
        .{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
        .native - 监听组件根元素的原生事件。
        .once - 只触发一次回调。
        .left - (2.2.0) 只当点击鼠标左键时触发。
        .right - (2.2.0) 只当点击鼠标右键时触发。
        .middle - (2.2.0) 只当点击鼠标中键时触发。
        .passive - (2.3.0) 以 { passive: true } 模式添加侦听器
        用法：
        绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
        用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。
        在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event **属性： **v-on:click="handle('ok', $event)"。-->
        <!-- 方法处理器 -->
        <!-- <button v-on:click="doThis"></button> -->
        <!-- 内联语句 -->
        <!-- <button v-on:click="doThat('hello', $event)"></button> -->
        <!-- 缩写 -->
        <!-- <button @click="doThis"></button> -->
        <!-- 停止冒泡 -->
        <!-- <button @click.stop="doThis"></button> -->
        <!-- 阻止默认行为 -->
        <!-- <button @click.prevent="doThis"></button> -->
        <!-- 阻止默认行为，没有表达式 -->
        <!-- <form @submit.prevent></form> -->
        <!--  串联修饰符 -->
        <!-- <button @click.stop.prevent="doThis"></button> -->
        <!-- 键修饰符，键别名 -->
        <!-- <input @keyup.enter="onEnter"> -->
        <!-- 键修饰符，键代码 -->
        <!-- <input @keyup.13="onEnter"> -->
        <!-- 点击回调只会触发一次 -->
        <!-- <button v-on:click.once="doThis"></button> -->
        <!-- 在子组件上监听自定义事件（当子组件触发 “my-event” 时将调用事件处理器）： -->
        <!-- <my-component @my-event="handleThis"></my-component> -->
        <!-- 内联语句 -->
        <!-- <my-component @my-event="handleThis(123, $event)"></my-component> -->
        <!-- 组件中的原生事件 -->
        <!-- <my-component @click.native="onClick"></my-component> -->
        <div id="div7">
            <h1>v-on指令</h1>
            <!-- 以下两个按钮都能弹出1 -->
            <input type="button" value="按钮1-没有v-on" onclick="alert(1)"/>
            <input type="button" value='按钮2v-on' v-on:click='show()'/>
            <input type="button" value="按钮3" @click="show()"/>
            <!-- 事件对象 -->
            <input type="button" value="按钮4" @click="show1($event)"/>
			<input type="button" value="按钮5" @click="show1($event,12)"/>
            <!-- 事件冒泡 -->
            <br>
            <div @click="show4()">
				<input type="button" value="按钮6" @click="show3($event)"/>
				<input type="button" value="按钮7" @click.stop="show4()"/>
			</div>
             <!-- 默认行为 -->
             <!-- contextmenu 右键弹出行为 -->
            <div id="div9"> 
			    <input type="button" value="按钮8" @contextmenu="show5($event)"/>
			    <input type="button" value="按钮9" @contextmenu.prevent="show5()"/>
		    </div>
        </div>
        <br>
        <div id="div77">
            <h1>鼠标点击事件</h1>
            <div id="div777"><span style="display:inline-block">{{number}}</span></div>
            <div id="div7777">
                <!-- 点击事件 -->
                <input type="button" value="按钮1click" v-on:click='add()' />
                <!-- onmouseover 事件会在鼠标指针移动到指定的元素上时发生。 -->
			    <input type="button" value="按钮2mouseover" v-on:mouseover='add()' />
                <!-- 鼠标离开触发事件 -->
			    <input type="button" value="按钮3mouseout" v-on:mouseout='add()' />
                <!-- 鼠标按下事件 -->
			    <input type="button" value="按钮4mousedown" v-on:mousedown='add()' />
                <!-- 鼠标抬起事件 -->
			    <input type="button" value="按钮5mouseup" v-on:mouseup='add()' />
                <!-- 鼠标双击事件 -->
			    <input type="button" value="按钮6dblclick" v-on:dblclick='add()' />
            </div>            
        </div>

        <!-- 键盘事件 -->
        <div id="keyboard">
             <h1>键盘事件</h1> 
			<input type="text" value="按钮" @keyup.13="showkeyboard()"/>
			<input type="text" value="按钮" @keyup.enter="showkeyboard()"/>
			<input type="text" value="按钮" @keyup.up="showkeyboard()"/>
			<input type="text" value="按钮" @keyup.down="showkeyboard()"/>
			<input type="text" value="按钮" @keyup.left="showkeyboard()"/>
			<input type="text" value="按钮" @keyup.right="showkeyboard()"/>
		</div>
        <br>
        <!-- v-bind指令 -->
        <!-- 类型： any (with argument) | Object (without argument)
        参数： attrOrProp (optional)
        修饰符：
        .prop - 被用于绑定 DOM 属性。(what’s the difference?)
        .camel - (2.1.0+) transform the kebab-case attribute name into camelCase. (supported since 2.1.0)
        .sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。
        用法：
        动态地绑定一个或多个特性，或一个组件 prop 到表达式。
        在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。
        在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。
        没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style 绑定不支持数组和对象。 -->
        <div id="binddiv">
            <h1>v-bind指令</h1>
            <a href="#" v-bind:href="url">我的博客地址</a>
        </div>
        <br>
        <!-- v-model指令 -->
        <!-- 数据类型： 随表单控件类型不同而不同。
        修饰符：
        .lazy - 取代 input 监听 change 事件
        .number - 输入字符串转为数字
        .trim - 输入首尾空格过滤
        用法： 
        v-model指令用来在input、select、text、checkbox、radio等表单控件或者组件上创建双向绑定。
        可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 v-model 本质上不过是语法糖，它负责监听用户的输入事件以更新数据，并特别处理一些极端的例子。
        v-model 并不关心表单控件初始化所生成的值。因为它会选择 Vue 实例数据来作为具体的值。
        对于要求 IME （如中文、 日语、 韩语等） 的语言，会发现那v-model不会在 ime 构成中得到更新。如果也想实现更新，请使用 input事件。 -->

        <div id="model">
            <h1>v-model指令</h1>
            <!-- 修改input输入框的值，同时p标签的变量的值也会同时发生改变 -->
            <input v-model="model" placeholder="v-model"/>
            <p>{{model}}</p>
        </div>
        <br>
        <!-- v-pre指令 -->
        <!-- v-pre指令用法： 跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。 -->
        <div id="prediv">
            <h1>prediv指令：</h1>
            <!-- 第一个span里的内容不会被编译，显示为{{model}},第二个span里的内容会被编译，显示为今天是个好日子 -->
			<span v-pre>{{model}}</span>
            <br>
			<span>{{model}}</span>
		</div>
        <br>
        <!-- v-cloak指令 -->
        <!-- v-cloak指令用法：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕，否则在渲染页面时，有可能用户会先看到Mustache标签，然后看到编译后的数据。 -->
        <div id="cloak">
            <h1>v-cloak指令：</h1>
            <!-- 下面两个span都会显示今天是个好日子 -->
			<span>{{model}}</span>
            <br>
			<span v-cloak>{{model}}</span>
		</div>
        <br>
        <!-- v-once指令 -->
        <!-- v-once指令用法：只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。 -->
        <div id="oncediv">
            <h1>v-once指令：</h1>
			<!-- 单个元素 -->
			<span v-once>{{model}}</span>
			<!-- 有子元素 -->
			<div v-once>
			  <p>{{model}}</p>
			</div>
		</div>
    </div>    
</template>

<script>
    export default{
        name:"Demo5",
        data(){
            return {
                year:new Date().getFullYear(),
                month:new Date().getMonth()+1,
                riqi:'<h3>日期显示</h3>',
                type:'晴天',
                type1:'阴天',
                yes:'true',
                no:'false',
                array:['刘备','关羽','张飞'],
                number:0,
                url:'https://blog.csdn.net/qq_41153943',
                model:'今天是个好日子'
            }
        },
        methods: {
            show:function(){
                alert("1")
            },
            add:function(){//方法
				this.number+=1
			},
            show1:function(ev,b){
                alert(ev.clientX);
				alert(b)
            },
            show3:function(ev){
				alert(3);
                //阻止事件冒泡
				ev.cancelBubble=true;
			},
			show4:function(){
				alert(4)
			},
            show5:function(ev){
				alert(5);
                //阻止默认行为
				ev.preventDefault();
			},
            showkeyboard:function(){
				alert("按了键盘")
			},
        },
    }
</script>