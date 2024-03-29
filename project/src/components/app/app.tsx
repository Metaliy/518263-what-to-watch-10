import MainPageScreen from '../../pages/main-page/main-page';
import {Route, Routes} from 'react-router-dom';
import { AddReviewPageScreen } from '../../pages/add-review-page/add-review-page';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFoundComponent from '../not-found-component/not-found-component';
import { MoviePageScreen } from '../../pages/movie-page/movie-page';
import MyListScreen from '../../pages/my-list-page/my-list-page';
import PrivateRoute from '../private-route/private-route';
import SignInPageScreen from '../../pages/sign-in-page/sign-in-page';
import PlayerPageScreen from '../../pages/player-page/player-page';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';


function App(): JSX.Element {

  const {isDataLoaded, authorizationStatus} = useAppSelector((state) => state);


  const isCheckedAuth = (authStat: AuthorizationStatus): boolean =>
    authStat === AuthorizationStatus.Unknown;


  if (isDataLoaded || isCheckedAuth(authorizationStatus)) {
    return (
      <Spinner />
    );
  }

  return (
    <HistoryRouter history= {browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            < MainPageScreen />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewPageScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={
            <PlayerPageScreen />
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
              <MyListScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePageScreen />
          }
        />
        <Route
          path="*"
          element={<NotFoundComponent />}
        />
      </Routes>
    </HistoryRouter>);
}

export default App;
