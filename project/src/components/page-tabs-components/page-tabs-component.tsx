import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DetailsTabComponent } from './details-tab-component';
import { OverviewTabComponent } from './overview-tab-component';
import { ReviewsTabComponent } from './reviews-tab-component';
import { TabName } from '../../const';


export function PageTabsComponent () {
  const [activeTab, setActiveTab] = useState(TabName.Overview);
  const renderTab = (tab: string) => {
    switch (tab) {
      case TabName.Overview:
        return < OverviewTabComponent />;
      case TabName.Details:
        return <DetailsTabComponent />;
      case TabName.Reviews:
        return <ReviewsTabComponent />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className="film-nav__item">
            <Link className="film-nav__link" onClick={() => setActiveTab(TabName.Overview)} to={''}>Overview</Link>
          </li>
          <li className="film-nav__item">
            <Link className='film-nav__link' onClick={() => setActiveTab(TabName.Details)} to={''}>Details</Link>
          </li>
          <li className="film-nav__item">
            <Link className="film-nav__link" onClick={() => setActiveTab(TabName.Reviews)} to={''}>Reviews</Link>
          </li>
        </ul>
      </nav>
      {renderTab(activeTab)}
    </div>
  );
}


