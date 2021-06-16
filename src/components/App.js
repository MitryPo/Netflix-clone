import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'
import requests from '../requests';
import '../css/App.css'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isLargeRow={true} title="Популярное" fetchUrl={requests.fetchTrending} />
      <Row title="Сериалы" fetchUrl={requests.fetchTv}/>
      <Row title="Ожидаемые" fetchUrl={requests.fetchUpcoming}/>
      <Row title="Лучшее за все время" fetchUrl={requests.fetchTopRated}/>
      <Row title="Боевики" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Комедии" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Ужасы" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Милодрамы" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Фантастика" fetchUrl={requests.fetchFantasy}/>
    </div>
  );
}

export default App;
