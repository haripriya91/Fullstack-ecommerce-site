import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown'
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";




const Header = () => {

    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Coming Soon in 🇩🇪 <b>Germany</b>! We’re crafting something incredible — stay tuned for the launch!                        </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2 ">
                                <Link to={'/'}><img className="custom-logo" src={logo} alt="logo" /></Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">
                                <CountryDropdown></CountryDropdown>

                                <div className="headerSearch ml-3 mr-3">
                                    <input type="text" placeholder='Search for Products....' />
                                    <Button><IoSearch /></Button>
                                </div>
                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className='circle mr-3'>
                                        <FiUser />
                                    </Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'>
                                                <IoBagOutline />
                                            </Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;