<template>
  <nav class="nav-header">
    <img src='../assets/images/logo.png' alt="LOGO"/>
    <h2>영화</h2>
    <a href="https://news.daum.net/">뉴스</a>
    <a href="https://entertain.daum.net/">연예</a>
    <a href="https://sports.daum.net/">스포츠</a>
    <a href="https://auto.daum.net/">자동차</a>
    <img src="../assets/images/placeholder.png" alt="User" class="user"/>
  </nav>
</template>

<script>

export default {
    name : 'Header',
    components : {

    }
}
</script>

<style>
.nav-header {
  display: flex;
  margin: 5px 50px 5px 50px;
  white-space : nowrap;
}
a {
  margin-top: 25px;
  margin-left: 20px;
  color : gray;
  cursor: pointer;
  text-align: center;
}
img {
  width: 3rem;
  height: 2rem;
  margin: 20px;
}
.user {
  width : 30px;
  height: 30px;
  border-radius: 10px;
  margin-left: 60vw;

}
a {
text-decoration-line: none;
}
</style>