
export default function DataVideo(props: any) {
  const { data } = props;
  let count = 1;
  const list = data.map( (item: any) => {
    if (  item.hasOwnProperty('up')) {
      return (
        <li className="thumbs" key={count = count + 1}>
          <ul>
            <li>
              <em><img src={item.up.icon} alt="" /></em>
              { item.up.num }
            </li>
            <li>
              <em><img src={item.down.icon} alt="" /></em>
              { item.down.num }
            </li>
          </ul>
        </li>
      );
    } else {
      return (
        <li key={ count = count + 1 }>
          <em><img src={item.icon} alt="" /></em>
          { item.num }
        </li>
      )
    }
  }) 
  return list;
}