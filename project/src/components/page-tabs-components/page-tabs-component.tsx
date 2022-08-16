import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tabNames } from '../../const';
import { DetailsTabComponent } from './details-tab-component';
import { OverviewTabComponent } from './overview-tab-component';
import { ReviewsTabComponent } from './reviews-tab-component';
import { mockComments } from '../../mocks/reviews';


export function PageTabsComponent () {
  const [activeTab, setActiveTab] = useState(tabNames.Overview);

  const renderTab = (tab: string) => {
    switch (tab) {
      case tabNames.Overview:
        return < OverviewTabComponent />;
      case tabNames.Details:
        return <DetailsTabComponent />;
      case tabNames.Reviews:
        return <ReviewsTabComponent reviews={mockComments} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link className="film-nav__link" onClick={() => setActiveTab(tabNames.Overview)} to={''}>Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link className='film-nav__link' onClick={() => setActiveTab(tabNames.Details)} to={''}>Details</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" onClick={() => setActiveTab(tabNames.Reviews)} to={''}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {renderTab(activeTab)}
    </div>
  );
}
