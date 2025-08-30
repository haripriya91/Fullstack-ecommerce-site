// Removed duplicate import
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';

const CountryDropdown = () => {
    return (
        <>
            <Button className="countryDrop">
                <div className='info d-flex flex-column'>
                    <span className='label'> Your Location</span>
                    <span className='name'>Germany</span>
                </div>
                <span className='ml-auto'><FaAngleDown /> </span>
            </Button>


            <Dialog open={true} className='locationDialog'> 
                <h5>Choose your Delivery Location</h5>
                <p>Enter your address and we will specify the offer for your area.</p>
          
                <div className="headerSearch w-100">
                    <input type="text" placeholder='Search your area....' />
                    <Button><IoSearch /></Button>
                </div>
          
            </Dialog>
        </>
        
    );
}

export default CountryDropdown;