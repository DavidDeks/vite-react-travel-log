// import LocationDot from '../assets/location-dot-solid.svg'

export default function Card(props) {
  const arrival = new Date(props.item.arrival)
  const departure = new Date(props.item.departure)

  const arrivalFormat = formatDate(arrival)
  const departureFormat = formatDate(departure)

  return (
    <div className='card'>
        <img src={props.item.img} className='card--image' alt={`Image of ${props.item.destination}`}/>
        <div className='card--info'>
          <div className='card--details'>
            <svg className='card--pin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
            <span className='card--state'>{props.item.state.toUpperCase()}</span>
            <a href={props.item.map} className='card--map'>View on Google Maps</a>
          </div>
          <h2 className='card--destination'>{props.item.destination}</h2>
          <h4 className='card--date'>{arrivalFormat} - {departureFormat}</h4>
          <p className='card--desc'>{props.item.description}</p>
        </div>
    </div>
  );
}

function formatDate(date) {
  const shortMonth = {0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun' , 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'};
  
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return day + ' ' + shortMonth[month] + ', ' + year;
}