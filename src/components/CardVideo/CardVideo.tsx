import DataVideo from '../DataVideo/DataVideo';

export default function CardVideo(props: any) {
  const { cols, thumbvideo, title, date, desc, link, data } = props;
  return (
    <article className={`col ${ cols }`}>
      <div className="card">
        <div className="card-thumbnail">
          <div className="card-thumb-img">
            <img src={ thumbvideo } alt="" />
          </div>
          <div className="card-thumb-title">
            <div>{ title }</div>
          </div>
        </div>
        <div className="card-info">
          <p className="card-info-date">{ date }</p>
          <p>{ desc }</p>
          <a href={ link } className="secondary">Ver ahora</a>
          <div className="margin-top">
            <ul className="data-video">
              <DataVideo data={ data } />
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

