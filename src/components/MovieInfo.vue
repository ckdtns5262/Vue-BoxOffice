<template>
 <nav class="navbar">
      <h2>영화정보</h2>
    </nav>
  <div class="movie-head">
      <ul class="movie-list">
      <li><span>영화명 : </span>{{movies.movieNm}}</li>
      <li><span>영화코드 : </span>{{movies.movieCd}}</li>
      <li><span>개봉일 : </span>{{movies.openDt}}</li>
      <li><span>제작상태 : </span>{{movies.prdtStatNm}}</li>
      <li><span>상영시간 : </span>{{movies.showTm}}</li>
      <li><span>관람등급 : </span>{{audits}}</li>
      <li><span>제작국가 : </span>{{nations}}</li>
      <li><span>감독 : </span>{{directors}}</li>
      <li><span>장르 : </span>{{genres}}</li>
        <div class="movie-like">
        <span>👍 좋아요 갯수 : {{$store.state.like[$store.state.누른거]}}

        </span>
      </div>
      </ul>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name : 'MovieInfo',
  data(){
    return {
      movies : [],
      audits : '',
      nations : '',
      directors : '',
      genres : '',
      company : '',
      find : [],
      click : 0
    
    }
  },
  methods : {
    getMovie(){
      let now = new Date()
      let yes = new Date(now.setDate(now.getDate()-1))
      let d = yes.toISOString().substring(0,10).replaceAll('-','')
      let url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?';
      url = url + 'key=' + 'f5eef3421c602c6cb7ea224104795888';
      url = url + '&movieCd=' + this.$route.params.id

      axios.get(url)
      .then((res)=>{
      this.movies = res.data.movieInfoResult.movieInfo
      // console.log(this.movies)


      // audits 찾기
      this.audits = this.movies.audits.find((res)=>{
        return res
      })
      this.audits = this.audits.watchGradeNm
      // nations 찾기
      this.nations = this.movies.nations.find((res)=>{
        return res
      })
      this.nations = this.nations.nationNm
      // director 찾기
      this.directors = this.movies.directors.find((res)=>{
        return res
      })
      this.directors = this.directors.peopleNm
      // genres 찾기
      this.genres = this.movies.genres.map((res)=>{
        return res
      })
      this.genres = this.genres.map((res)=>{
        return res.genreNm
      })
      this.genres = this.genres.join('')



      })
    

    },
   
  },
  mounted(){
    this.getMovie()

  },
  props : {
    i : Number
  }
}
</script>

<style>
li {
  list-style: none;
}
.movie-head {
  display: flex;
  justify-content: center;
  align-items: center;

}
.movie-list li{
  margin-top: 20px;
  text-align: center;
  font-size: larger;
}
.movie-list span {
  font-weight: bold;
  font-size :x-large;
  
}
.movie-like span {
  display: flex;
  justify-items: center;
  align-items: center;
}

</style>