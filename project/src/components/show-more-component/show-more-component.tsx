

type ShowMoreComponentProps = {
  onAddFilms: () => void
}

export function ShowMoreComponent ({onAddFilms}: ShowMoreComponentProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onAddFilms}>Show more</button>
    </div>
  );
}
