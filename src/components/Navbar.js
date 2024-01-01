import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { RiSearchLine } from 'react-icons/ri';
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const {cart}=useSelector(state=>state.AuthReducer)
    const [totalCartItems,setTotalCartItems]=useState(0)

    useEffect(()=>{
        let count=0
        cart.map((item)=>{
            count+=item.count
        })
        setTotalCartItems(count)
    },[cart])
    return (

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid mx-5 ">
                    <Link className="navbar-brand text-style-heading mx-5" to="/"><span className='text-style-heading heading'>Shop</span>Lane</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <NavLink className="nav-link mx-5" aria-current="page" to="/home">HOME</NavLink>
                            </li>
                            <li className="nav-item mx-5 ">
                                <NavLink className="nav-link" to="/Clothing">CLOTHINGS</NavLink>
                            </li>
                            <li className="nav-item mx-5">
                                <NavLink className="nav-link " to="/Accessories">ACCESSORIES</NavLink>
                            </li>


                        </ul>

                        <form className="d-flex " role="search">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn" type="submit"> <RiSearchLine /></button>
                        </form>
                        {/* <NavLink className="nav-link active" to="/Accessories"> <RiSearchLine /></NavLink> */}

                        <p className="nav-item my-3 mx-5">
                            <NavLink className="nav-link active" to="/Accessories"> <FaShoppingCart/>{totalCartItems!==0&&<p style={{height:20,width:20,fontSize:15,position:"absolute"}}>{totalCartItems}</p>}</NavLink>
                        </p>
                        <p className="nav-item my-3 mx-5">
                            <NavLink className="nav-link active" to="/Accessories"><CgProfile /></NavLink>
                        </p>

                    </div>
                </div>
            </nav>
        
    )
}

export default Navbar





































// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//                 <div className="container-fluid">
//                     <Link className=" mx-4 navbar-brand" to="/home"><span className="text-success">SHOP</span>LANE</Link>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/Clothing">Clothing</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/Accessories">Accessories</NavLink>
//                             </li>

//                         </ul>

//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
