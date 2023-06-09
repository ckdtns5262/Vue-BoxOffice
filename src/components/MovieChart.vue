<template>
  <div>
    <nav class="navbar">
      <h2>BoxOffice({{day}} 일자)</h2>
    </nav>
    <section class="input-section">
      <span>영화명입력</span><input class="input" placeholder="영화명을 입력하세요" @input="search($event.target.value)"/>
      <input type="date" class="date" v-model="selectedDate" @change="change(selectedDate)"/>
    </section>
    <section class="movie-section">
      <ul class="movie">
        <a v-for="(a,i) in filteredMovies" :key="i">
         <span class="rank">{{i}}</span> 
         <span class="name" @click="$store.commit('select',i)">
          <router-link :to="`/movielist/${a.movieCd}`" class="movie-name">
            {{a.movieNm}} 
          </router-link>
          <span @click="$store.commit('likes',i)"  class="like">❤️ {{$store.state.like[i]}}</span> 
        </span>
        </a>
       

      </ul>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue'
export default {
name : 'MovieChart',
data(){
  return {
    movies : [],
    day : '',
    filter : '',
    filteredMovies : reactive([]),
    selectedDate : ''

  }
},
props : {
  step : Number
}, 
methods : {
  getMovie(date){
    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = url + 'key=' + 'f5eef3421c602c6cb7ea224104795888';
    url = url + '&targetDt=' + date;
    console.log(date)
    console.log(url)

    axios.get(url)
    .then((res)=>{
      this.movies = res.data.boxOfficeResult.dailyBoxOfficeList
      this.filteredMovies = [...this.movies]
    })
  },
  search(검색어){
   this.filteredMovies = this.movies.filter((movie)=>{
   return movie.movieNm.indexOf(검색어) != -1
   })
  },
  change(날짜){
    날짜 = 날짜.substring(0,10).replaceAll('-','')
    this.getMovie(날짜)
    this.day = 날짜
  }

},
// computed : {
//   filteredMovies(){
//     if(this.filter == ''){
//       return this.movies
//     }
//     return this.filterMovies
//   }
// },
 mounted(){
    let now = new Date();
    let yes = new Date(now.setDate(now.getDate() - 1));
    let d = yes.toISOString().substring(0, 10).replaceAll('-', ''); //subString 0에서 9번째까지 남기고 replaceall은 - 전부 지움
    this.day = d;
    this.selectedDate = d;
    this.getMovie(d);
}
}
</script>

<style>
h1 {
  color: red;
}
.date {
  font-size: x-large;
  height: 30px;
}

.input-section {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: x-large;
  font-weight: bold;
  margin-top: 10px;
}
.input  {
  width: 300px;
  height: 30px;
  font-size: x-large;
}
.input::placeholder {
  font-size:x-large
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