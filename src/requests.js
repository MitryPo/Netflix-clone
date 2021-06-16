const API_KEY = "46f647b23c20600432618a8ec5bd6b6f"


const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ru`,
    fetchTv: `/discover/tv?api_key=${API_KEY}&language=ru`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=ru`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ru`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=ru`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=ru`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=ru`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=ru`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=ru`,
}

export default requests