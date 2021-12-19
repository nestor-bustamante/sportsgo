import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import VideoLive from '../../components/VideoLive/VideoLive';
import './Video.scss';

import thumbVideo01 from '../../assets/img/thumb-video-02.jpg';

const Video = () => (
  <div>
    <div className="sportsgo-wrapper">
      <Header />
      <section>
        
        <div className="row">
          <div className="col col-12">
            <h2>Lorem Ipsum Dolor</h2>
          </div>
        </div>

        <div className="row">
 
          <div className="col col-8">
             <VideoLive
              imgvideo={thumbVideo01}
              title="Campeonato Femenino Pádel España"
              reference="#;"
              addclass=""
              mainvideo=""
            />
          </div>
 
          <div className="col col-4">
            <div className="margin-bottom">
              <VideoLive
                imgvideo={thumbVideo01}
                title="Campeonato Femenino Pádel España"
                reference="#;"
                addclass=""
                mainvideo=""
              />
            </div>
             <VideoLive
              imgvideo={thumbVideo01}
              title="Campeonato Femenino Pádel España"
              reference="#;"
              addclass=""
              mainvideo=""
            />
          </div>
 
        </div>
        
      </section>
    </div>
    <Footer />
  </div>
);

export default Video;
