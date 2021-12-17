import React from 'react';
import './Vod.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardVideo from '../../components/CardVideo/CardVideo';

import thumbVideo01 from '../../assets/img/thumb-video-01.jpg';

import eyeIcon from '../../assets/img/eye-icon.svg';
import thumbUp from '../../assets/img/thumb-up-icon.svg';
import thumbDown from '../../assets/img/thumb-down-icon.svg';
import clock from '../../assets/img/clock-icon.svg';

const likesData = [
  {
    icon: eyeIcon,
    num: '1982 vistas'
  },
  {
    up: {
      icon: thumbUp,
      num: 111
    },
    down: {
      icon: thumbDown,
      num: 3
    }
  },
  {
    icon: clock,
    num: '1:23:45'
  },
];

const Vod = () => (
  <div>
    <div className="sportsgo-wrapper">
      <Header />
      <section>
      
        <div className="row">
          <div className="col col-12">
            <h2>VoD</h2>
          </div>
        </div>

        <div className="row">
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />

          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
          <CardVideo
            cols="col-4"
            thumbvideo={thumbVideo01}
            title="Lorem Ipsum Dolor"
            date="13/07/14"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt quam lacus, eget efficitur nibh imperdiet id. Pellentesque feugiat lectus neque, ac tincidunt nulla scelerisque sit amet."
            link="#;"
            data={ likesData }
          />
        </div>

      
      </section>
    </div>
    <Footer />
  </div>
);

export default Vod;
