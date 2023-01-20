import './Disclaimer.scss';

const Disclaimer = ({disclaimer}) => {
  return (
    <div className='disclaimer'>
      <h3>{disclaimer}</h3>
    </div>
  )
}

export default Disclaimer;