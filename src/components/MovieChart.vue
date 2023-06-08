<template>
  <div>
    <nav class="navbar">
      <h2>BoxOffice({{day}} 일자)</h2>
    </nav>
    <section class="movie-section">
      <ul class="movie">
        <a v-for="(a,i) in movies" :key="i">
         <span class="rank">{{i}}</span> 
         <span class="name">
          <router-link :to="`/movielist/${a.movieCd}`" class="movie-name">
            {{a.movieNm}} 
          </router-link>
          <span @click="$store.commit('likes',i)" class="like">❤️ {{$store.state.like[i]}}</span> 
        </span>
        </a>
       

      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
name : 'MovieChart',
data(){
  return {
    movies : [],
    day : ''
  }
},
props : {
  step : Number
}, 
methods : {
  getMovie(){
    let now = new Date()
    let yes = new Date(now.setDate(now.getDate()-1))
    let d = yes.toISOString().substring(0,10).replaceAll('-','') //subString 0에서 9번째까지 남기고 replaceall은 - 전부 지움
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = url + 'key=' + 'f5eef3421c602c6cb7ea224104795888';
    url = url + '&targetDt=' + d ;
    this.day = d
    axios.get(url)
    .then((res)=>{
      this.movies = res.data.boxOfficeResult.dailyBoxOfficeList
      // console.log(this.movies)
    })
  }
},
mounted(){
  this.getMovie()
}
}
</script>

<style>
h1 {
  color: red;
}
.movie a {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin : 20px;
  font-size: x-large;
  border: 2px solid black;
  border-radius: 15px;

}
.rank {
  background: black ;
  color: #eee;
  margin-right: 3px;
  border:  solid  black ;
  padding: 3px  ;
}
.name {
  display: flex;
  font-size: larger;
  color: black;
}
.movie-name {
  border-style: none !important
}
.movie-scetion {
  margin-left: 20px;
}


.navbar {
  padding : 5px;
  background: lightblue;
  text-align: center;
  font-size: x-larger;
  color : white
}
.like {
  z-index: 20;
  display: flex;
   justify-content: center;
  align-items: center;
}
</style>