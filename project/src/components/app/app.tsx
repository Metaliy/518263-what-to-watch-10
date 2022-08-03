import MainPageScreen from '../../pages/main-page/main-page';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import AddReviewPageScreen from '../../pages/add-review-page/add-review-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFoundComponent from '../not-found-component/not-found-component';
import MoviePageScreen from '../../pages/movie-page/movie-page';
import MyListScreen from '../../pages/my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import SignInPageScreen from '../../pages/sign-in-page/sign-in-page';
import PlayerPageScreen from '../../pages/player-page/player-page';
import { Filmslist } from '../../types/films';


type AppProps = {
  mockFilms: Filmslist,
  movieCount: number;
}

function App({mockFilms, movieCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            < MainPageScreen
              mockFilms={mockFilms}
              movieCount={movieCount}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            < AddReviewPageScreen
              films={mockFilms}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerPageScreen
              films={mockFilms}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInPageScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListScreen
                films={mockFilms}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePageScreen
              films={mockFilms}
            />
          }
        />
        <Route
          path="*"
          element={<NotFoundComponent />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
