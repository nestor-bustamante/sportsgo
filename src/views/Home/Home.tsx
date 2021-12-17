import './Home.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import mainVideo from '../../assets/img/main-video.jpg';
import thumbVideo01 from '../../assets/img/thumb-video-01.jpg';
import thumbVideo02 from '../../assets/img/thumb-video-02.jpg';

import eyeIcon from '../../assets/img/eye-icon.svg';
import thumbUp from '../../assets/img/thumb-up-icon.svg';
import thumbDown from '../../assets/img/thumb-down-icon.svg';
import clock from '../../assets/img/clock-icon.svg';

import VideoLive from '../../components/VideoLive/VideoLive';
import CardVideo from '../../components/CardVideo/CardVideo';

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

const Home = () => (

  <div>
    <div className="sportsgo-wrapper">
      <Header />
      <section>
        
        <div className="row row-grid-live">
          
          <div className="col col-7">
            
            <VideoLive
              imgvideo={mainVideo}
              title="Campeonato Femenino Pádel España"
              reference="#;"
              addclass="height-full-percentage"
              mainvideo="main-video"
            />

          </div>
          
          <div className="col col-5">
            <div className="row">
              <div className="col col-12">
                <VideoLive
                  imgvideo={ thumbVideo01 }
                  title="World Padel Tour"
                  reference="#;"
                  addclass=""
                  mainvideo=""
                />
              </div>
              <div className="col col-12 margin-top">
                <VideoLive
                  imgvideo={ thumbVideo02 }
                  title="Lorem Ipsum Dolor"
                  reference="#;"
                  addclass=""
                  mainvideo=""
                />
              </div>
            </div>
          </div>

        </div>

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
        </div>

      </section>
    </div>
    <Footer />
  </div>
);

export default Home;
