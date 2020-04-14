<template>
  <div class="wrapper">
    <div class="login">
      <h1>Hello</h1>
      <h2>{{ name }}!!</h2>
      <button @click="signOut">Sign out</button>
      <hr>
      <hr>
      <hr>
    </div>
    <div class="todo">
      <div class="form">
        <input type="text" v-model="newTodoName">
        <button type="subit" v-on:click="addTodo()">submit</button>
      </div>
      <div class="list">
        <h2>タスク一覧</h2>
        <ul>
          <li v-for="item in list">{{item.todo}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: firebase.auth().currentUser.email,
      newTodoName: '',
      list: [],
    }
  },
  created () {
    // 認証チェック
    firebase.auth().onAuthStateChanged( user => {
      if (user) {
        // logged in
        this.listen()
      }
    })
  },
  methods: {
    addTodo () {
      firebase.database().ref('todos').push({
        todo: this.newTodoName,
      }, () => {
        this.newTodoName = ''
      })
    },
    signOut () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    },
    listen () {
      firebase.database().ref('todos/').on('value', snapshot => {
        if (snapshot) {
          const rootList = snapshot.val()
          let list = []
          Object.keys(rootList).forEach((val, key) => {
            rootList[val].id = val
            list.push(rootList[val])
          })
          this.list = list
        }
      })
    },
  }
}
</script>

<style>
  .todo {
    width: 600px;
    margin: 40px auto;
  }
  .list {
    margin: 60px 0;
  }
  .list h2 {
    text-align: left;
  }
  .todo ul {
    padding: 0;
    list-style: none;
    text-align: left;
  }
  .todo ul li {
    margin-bottom: 20px;
    padding: 15px 20px;
    border: 1px solid #eee;
    box-shadow: 0 3px 5px rgba(0,0,0,.10);
  }
</style>
