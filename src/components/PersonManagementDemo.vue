<template>
    <div id="Demo">
        <h1>人事管理系统</h1>
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>部门</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in persons">
                    <td>{{person.id}}</td>
                    <td>{{person.name}}</td>
                    <td>{{person.gen}}</td>
                    <td>{{person.age}}</td>
                    <td>{{person.city}}</td>
                    <td id='dele'><button @click="del(index)">删除</button></td>
                </tr>
            </tbody>
        </table>

        <div class="new">
				<h2>新增</h2> 
				<div class="form-group">
					<p>姓名：<input type="text" v-model="newperson.name"></p>
                    <p>性别：<input type="text" v-model="newperson.gen"></p>
					<p>年龄：<input type="text" v-model="newperson.age"></p>
					<p>城市：<input type="text" v-model="newperson.city"></p>
					<p><button @click="add">添加</button></p>
				</div>
			</div>
    </div>
</template>
<<script>
export default {
    name:"PersonManagementDemo",
    data(){
        return{
            persons:[{id:1,name:'刘备',gen:'男',age:54,city:'成都'},{id:2,name:'关羽',gen:'男',age:44,city:'荆州'},{id:3,name:'张飞',gen:'男',age:34,city:'武汉'},{id:4,name:'赵云',gen:'男',age:24,city:'常山'}],
            newperson:{
					id:0,
					name:'',
					gen:'',
					age:'',
					city:''
				}
        } 
    },
    methods:{
        //新增方法
        add:function(){
            var maxId=0;
            for(var i=0;i<this.persons.length;i++){
                if(maxId<this.persons[i].id){
                    maxId=this.persons[i].id;
                }
            }
            this.newperson.id=maxId+1;
            this.persons.push(this.newperson);
            this.newperson={};
        },
        //删除方法
        del:function(idx){
            this.persons.splice(idx,1);
        }
	}
}
</script>
<style>
    h1{
        text-align: center;
    }

    table,
			td,
			th {
				border-collapse: collapse;
				border-spacing: 0;
                text-align:center;
			}
			
			table {
				width: 600px;
				margin: 0 auto;
				text-align: center;
			}
			
			td,
			th {
				border: 1px solid #bcbcbc;
				padding: 5px 10px;
                text-align:center;
			}
			
			th {
				background: #0cc773;
				font-size: 1.2rem;
				font-weight: 400;
				color: rgb(15, 1, 1);
				cursor: pointer;
			}
			
			tr:nth-of-type(odd) {
				background: #fff;
			}
			
			tr:nth-of-type(even) {
				background: #eee;
			}
            .new {
				width: 400px;
				padding: 10px 50px;
				margin: 10px auto;
				background: rgb(252, 251, 253);
				border-radius: 5px;
			}
			
			h2 {
				text-align: center;
                color:greenyellow;
			}
			
			p {
				height: 50px;
				line-height: 50px;
			}
			
			input {
				width: 300px;
				height: 50px;
				line-height: 50px;
				font-size: 20px;
				padding-left: 10px;
			}
			p button{
                float:center;
            }
</style>