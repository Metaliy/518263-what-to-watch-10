import { AuthorizationStatus } from '../../const';

type FavoriteButtonIconProps ={
  favoriteStatus?: boolean,
  authorizationStatus: string
}

export const FavoriteButtonIcon = ({favoriteStatus, authorizationStatus}: FavoriteButtonIconProps): JSX.Element => {
  if (favoriteStatus && authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>
  );
};
