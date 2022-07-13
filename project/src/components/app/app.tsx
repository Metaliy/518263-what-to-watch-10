import MainPageScreen from '../../pages/main-page/main-page';

type AppProps = {
  movieName: string;
  movieGenre: string;
  movieYear: number;
  movieCount: number;
}

function App(movieName: AppProps, movieGenre: AppProps, movieYear: AppProps, movieCount: AppProps): JSX.Element {
  return (
    < MainPageScreen
      {...movieName}
      {...movieGenre}
      {...movieYear}
      {...movieCount}
    />);
}

export default App;
