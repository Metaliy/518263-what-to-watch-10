import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export function UserBlockComponent(): JSX.Element {
  const { authorizationStatus, avatarUrl } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const getUserBlockTemplate = (authStatus: AuthorizationStatus): JSX.Element =>
    authStatus === AuthorizationStatus.Auth ?
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <Link to={AppRoute.MyList}>
              <img src={avatarUrl as string} alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            className="user-block__link"
            to="/"
          >
            Sign out
          </Link>
        </li>
      </ul>
      :
      <div className="user-block">
        <Link to="/login" className="user-block__link">Sign in</Link>
      </div>;

  const userBlockTemplate = getUserBlockTemplate(authorizationStatus);

  return userBlockTemplate;
}
