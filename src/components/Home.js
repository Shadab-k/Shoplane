import React, { useEffect, useState } from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
import Home2 from './Home2';
// import 'react-loading-skeleton/dist/skeleton.css'
// import SkeletonList from './SkeletonList';

const Home = () => {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const res = await fetch('https://fakestoreapi.com/products');
        setItems(await res.json());
    };

    useEffect(() => {
        getItems();
    }, []);

    const filteredAccessories = items.filter(item => item.category === "men's clothing" || item.category === "women's clothing");

    return (
        <div className="container">
            
            <p className='my-4 mx-2 text-style head2'> <b> Clothing for Men and Women</b></p>
            <div className="row">
                {filteredAccessories.map((item) => (
                    <div key={item.id} className=" container col-md-3 my-4">
                        <div className="card container mx-5" style={{ width: '18rem' }}>
                            <img src={item.image} style={{ width: '18rem', height:'17rem' }} className="card-img-top col-md-4" alt="..." />
                            <div className="container card-body overflow-hidden" style={{ height: '15rem' }}>
                                <h5 className="card-title">{item.title}</h5>
                                <p className=" container card-text overflow-hidden" >{item.description}</p>
                            </div>
                            
                            <div className='mx-3 my-1 '> <p className=" container card-text cursor-pointer text-success" >Rs {item.price}</p></div>
                            <div className='mx-3 '> <p className=" container card-text cursor-pointer text-danger" >Category: {item.category}</p></div>


                            {/* Additional card links if needed */}
                            <div className="card-body">
                                {/* <Link to="/" className="card-link">Card link</Link> */}
                                <Link to="/">   <button type="button" class="btn btn-primary mx-3">Add To Cart</button> </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <Home2/>
        </div>

        
    );
};

export default Home;
















































// import React, { useEffect, useState } from 'react'
// // import { Link } from 'react-router-dom'

// const Home = () => {
//     const [items, setItems] = useState([])
//     const getItems = async () => {
//         const res = await fetch('https://fakestoreapi.com/products')
//         setItems(await res.json())
//     }

//     useEffect(() => {
//         getItems()
//     }, [])

//     console.log(items)
//     return (
//         <div >
//             <p className='my-4 mx-2'>Clothing for Men nd Women</p>
            
//                { items.map((item) => {
//                     return (
//                         <div className="container">
//                             <div className="row">
//                                 <div className="col-md-4"></div>
//                                 <div className="card" style={{ width: '18rem' }}>
//                                     <img key={item?.id} src={item?.image} className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <h5 key={item?.id} className="card-title">{item?.title}</h5>
//                                         <p key={item?.id} className="card-text">{item?.description}</p>
//                                     </div>

//                                     {/* <div className="card-body">
//                                 <Link to="/" className="card-link">Card link</Link>
//                                 <Link to="/" className="card-link">Another link</Link>
//                             </div> */}
//                                 </div>
//                             </div>
//                         </div>
//                     )

//                 })
//             }

//         </div>
//     )
// }

// export default Home
