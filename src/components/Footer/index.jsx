import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Link className="link" to='/' ><p className='company'>ImmoCorps</p></Link>
    </footer>
  )
}

export default Footer;