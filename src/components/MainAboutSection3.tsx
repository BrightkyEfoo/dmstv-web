import React from 'react';
import './MainAboutSection3.css';
import MainAboutSection3Small from './MainAboutSection3Small';

const MainAboutSection3 = () => {
  return (
    <div className="MainAboutSection3-container">
      <div className="MainAboutSection3">
        <img
          src="https://websitedemos.net/church-04/wp-content/uploads/sites/452/2019/06/mission-free-img.jpg"
          alt=""
        />
        <MainAboutSection3Small
          subTitle="VISION"
          title="We dream to be the familly sit voluptatem accusantium doloremque eaque."
          main="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt."
        />
        <MainAboutSection3Small
          subTitle="VISION"
          title="We dream to be the familly sit voluptatem accusantium doloremque eaque."
          main="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt."
        />
        <img
          src="https://websitedemos.net/church-04/wp-content/uploads/sites/452/2019/06/vision-free-img.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default MainAboutSection3;
