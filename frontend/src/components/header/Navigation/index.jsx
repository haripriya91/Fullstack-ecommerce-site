
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Nagivation = ()=> {
    return (
        <>
            <nav>
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-3 navPart1'>
                            <Button className='allCatTab'>
                                <span className='icon1 mr-2'><IoIosMenu/></span>
                                <span className= 'text'>All Categories</span>
                                <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>
                        </div>
                        <div className='col-sm-9 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'> 
                                <li className='list-inline-item'><Link to='/'>Home</Link></li>
                                <li className='list-inline-item'><Link>Fashion</Link></li>
                                <li className='list-inline-item'><Link>Electronic</Link></li>
                                <li className='list-inline-item'><Link>Bakery</Link></li>
                                <li className='list-inline-item'><Link>Grocery</Link></li>
                                <li className='list-inline-item'><Link>Blog</Link></li>
                                <li className='list-inline-item'><Link>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>    
    )

}

export default Nagivation;