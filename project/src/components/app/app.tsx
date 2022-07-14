import MainPageScreen from '../../pages/main-page/main-page';

type AppProps = {
  movieName: string;
  movieGenre: string;
  movieYear: number;
  movieCount: number;
}

function App({movieName, movieGenre, movieYear, movieCount}: AppProps): JSX.Element {
  return (
    < MainPageScreen
      movieName={movieName}
      movieGenre={movieGenre}
      movieYear={movieYear}
      movieCount={movieCount}
    />);
}

export default App;
