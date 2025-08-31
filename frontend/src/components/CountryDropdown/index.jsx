
import React from 'react';
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import { useState } from 'react';
//import slide  from '@mui/material/Slide';

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    
    const countries = [
        "Argentina", "Australia", "Brazil", "Canada", "China",
        "France", "Germany", "India", "Italy", "Japan",
        "Mexico", "Netherlands", "Norway", "Russia", "Saudi Arabia",
        "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
        "Switzerland", "Turkey", "United Arab Emirates", "United Kingdom", "United States"
    ];

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'> Your Location</span>
                    <span className='name'>Germany</span>
                </div>
                <span className='ml-auto'><FaAngleDown /> </span>
            </Button>


            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationDialog'> 
                <h4 className='mb-0'>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={() => setIsOpenModal(false)} aria-label="Close"><MdClose/></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder='Search your area....' />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {countries.map((country) => (
                        <li key={country}>
                        <Button onClick={() => setIsOpenModal(false)}>{country}</Button>
                        </li>
                    ))}
                </ul>
          
            </Dialog>
        </>
        
    );
}

export default CountryDropdown;