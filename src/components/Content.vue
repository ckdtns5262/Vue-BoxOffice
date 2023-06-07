<template>
  <div class="content">
    <section class="section">
        <nav class="nav-list">
            <h2>홈</h2>
            <h2 @click="step = 1"> 랭킹</h2>
            <h2>상영/예정작</h2>
            <h2>콘텐츠</h2>
        </nav>
    </section>
    <section>
        <div class="content-text">
    <h1>범죄도시3</h1>
    <p>대체불가 괴물형사 마석도,서울 광수대로 발탁!<br/>
    베트남 납치 살해범 검거 후 7년 뒤,<br/>
    '마석도'(마동석)는 새로운 팀원들과 함께 살인사건을 조사한다...</p>
    <button class="button">예고편 보기</button>
    </div>
    </section>
  </div>
    <MovieChart :step="step"/>


</template>

<script>
import MovieChart from './Movie.vue'






export default {

    name : "Content",
    components : {
        MovieChart
        },
    
    data(){
        return {
            step : 0
        }
    },



}
</script>

<style>
.content {
    background-image: url('../assets/images/back.jpeg');
    height: 100vh;
    background-size: cover;
    background-position-y: -180px;
    background-repeat: no-repeat;
}
.section {
    display: flex;
    
}
.nav-list {
    display: inline-flex;
    width: 30rem;
    justify-content: space-between;
    margin: 0 auto;

    
}
.nav-list h2 {
    color : gray;
    cursor: pointer;
}
.nav-list h2:hover{
    color : #eee;
}
.content-text h1 {
    color: white;
}
.content-text {
    margin-left: 50px;
    margin-top: 50px;
    display: inline-block;
}
.button {
    padding: 5px;
    border-radius: 10px white;
    cursor: pointer;
}
</style>

