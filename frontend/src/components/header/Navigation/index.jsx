
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdImportantDevices } from "react-icons/md";
import { TiContacts } from "react-icons/ti";
import { MdOutlineBakeryDining } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { IoBagHandleOutline } from "react-icons/io5";


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
                                <li className='list-inline-item'><Link to='/'><IoHomeOutline /> &nbsp;Home</Link></li>
                                <li className='list-inline-item'><Link><IoBagHandleOutline /> &nbsp;Fashion</Link></li>
                                <li className='list-inline-item'><Link><MdImportantDevices />&nbsp;Electronic</Link></li>
                                <li className='list-inline-item'><Link><MdOutlineBakeryDining />&nbsp;Bakery</Link></li>
                                <li className='list-inline-item'><Link><LiaStoreAltSolid />&nbsp;Grocery</Link></li>
                                <li className='list-inline-item'><Link><MdImportantDevices />&nbsp;Blog</Link></li> 
                                <li className='list-inline-item'><Link><TiContacts />&nbsp;Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>    
    )

}

export default Nagivation;