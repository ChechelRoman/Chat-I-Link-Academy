import React from 'react';
import './style.scss';
import loadingIcon from '../../../images/loading-icon.svg';

export const LoadingIcon: React.FC = () => {
  return (
    <div className="loading_icon_container">
      <img className="loading_icon" src={loadingIcon} alt="loading icong" />
    </div>
  );
};
