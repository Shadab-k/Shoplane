import React,{useState, useEffect} from 'react'
import{Link} from 'react-router-dom'

const Clothing = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      setItems(await res.json());
  };

  useEffect(() => {
      getItems();
  }, []);

  const filteredClothing = items.filter(item => item.category === "men's clothing " || item.category === "women's clothing");
  return (
 
       <div className="container">
            <p className='my-4 mx-2 text-style head2'> <b> Clothing's for Men and Women</b></p>
            <div className="row">
                {filteredClothing.map(item => (
                    <div key={item.id} className="container col-md-3 my-4">
                        <div className="card container mx-5" style={{ width: '18rem' }}>
                            {/* Card content */}
                            <img src={item.image} style={{ width: '14rem', height: '13rem' }} className="card-img-top col-md-4" alt="..." />
                            <div className="container card-body overflow-hidden" style={{ height: '15rem' }}>
                                <h5 className="card-title">{item.title}</h5>
                                <p className="container card-text overflow-hidden">{item.description}</p>
                            </div>
                            <div className='mx-3 my-1'>
                                <p className="container card-text cursor-pointer text-success">Rs {item.price}</p>
                            </div>
                            <div className='mx-3'>
                                <p className="container card-text cursor-pointer text-danger">Category: {item.category}</p>
                            </div>
                            <div className="card-body">
                                <Link to="/">
                                    <button type="button" className="btn btn-primary mx-3">Add To Cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Clothing
