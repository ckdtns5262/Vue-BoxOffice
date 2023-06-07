<template>
  <div v-if="step == 1">
    <section>
      <ul class="movie">
     
        <a v-for="(a,i) in movies" :key="i">
         <span class="rank">{{i}}</span> 
         <span class="name">{{a.movieNm}}</span>
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
    movies : []
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
  
    axios.get(url)
    .then((res)=>{
      this.movies = res.data.boxOfficeResult.dailyBoxOfficeList
      console.log(this.movies)
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
  margin : 20px
}
.rank {
  background: black;
  color: #eee;
  margin-right: 3px;
}
.name {
  font-size: larger;
  color: black;

}

</style>