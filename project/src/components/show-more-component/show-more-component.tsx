
type ShowMoreComponentProps = {
  addFilmsFunction: () => void
}

export function ShowMoreComponent ({addFilmsFunction}: ShowMoreComponentProps) {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={addFilmsFunction}>Show more</button>
    </div>
  );
}
