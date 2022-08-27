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
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchMovieAction } from '../../store/api-actions';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Spinner } from '../spinner/spinner';


function App(): JSX.Element {

  store.dispatch(fetchMovieAction());

  const {filmList, isDataLoaded, authorizationStatus} = useAppSelector((state) => state);

  const isCheckedAuth = (authStat: AuthorizationStatus): boolean =>
    authStat === AuthorizationStatus.Unknown;


  if (isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return (
      <SignInPageScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            < MainPageScreen
              films={filmList}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            < AddReviewPageScreen
              films={filmList}
            />
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerPageScreen
              films={filmList}
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
              authorizationStatus={authorizationStatus}
            >
              <MyListScreen
                films={filmList}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePageScreen
              films={filmList}
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
