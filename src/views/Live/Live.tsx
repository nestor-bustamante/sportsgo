import React from 'react';
import './Live.scss';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardVideo from '../../components/CardVideo/CardVideo';

import thumbVideo01 from '../../assets/img/thumb-video-01.jpg';
import eyeIcon from '../../assets/img/eye-icon.svg';

const likesData = [
  {
    icon: eyeIcon,
    num: '1982 ahora'
  }
];

const Live = () => (
  <div>
    <div className="sportsgo-wrapper">
      <Header />
      <section>
      
        <div className="row">
          <div className="col col-12">
            <h2>Live</h2>
          </div>
        </div>

        <div className="row">
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="Live"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id."
            link="#;"
            data={ likesData }
          />
        </div>

      
      </section>
    </div>
    <Footer />
  </div>
);

export default Live;
