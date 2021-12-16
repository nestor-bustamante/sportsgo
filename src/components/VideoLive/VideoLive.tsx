import eyeIcon from '../../assets/img/eye-icon.svg';

export default function VideoLive(props: any) {
  const { title, reference, imgvideo, addclass, mainvideo} = props;
  return (
    <div className={`live ${ addclass }`}>
      <div className={`video ${mainvideo}`}>
        <div className="live-tag">
          <span>Live</span>
        </div>
        <div className="content-video">
          <div className="info-video">
            <div>
              <div className="title">{ title }</div>
              <a href={ reference } className="secondary">Ver ahora</a>
              <ul className="data-video justify-end">
                <li>
                  <em><img src={ eyeIcon } alt="" /></em>
                  1982 vistas
                </li>
              </ul>
            </div>
          </div>
          <div className="thumbnail">
            <img src={ imgvideo } alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
