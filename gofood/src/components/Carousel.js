import React, { useEffect, useState } from 'react'

export default function Carousel() {

    const[foodimg, setfoodimg] = useState([]);

    const loadImg = async ()=>{
        let response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/foodData", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
      
          });
          response = await response.json()
          setfoodimg(response[0])
    }
    useEffect(() => {
        loadImg()
        //console.log("img",foodimg)
        
      }, [])
    return (
        <div>

            <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">

                <div className="carousel-inner " id='carousel'>
                    <div className=" carousel-caption  " style={{ zIndex: "9" }}>
                        <form className=" d-flex justify-content-center">  {/* justify-content-center, copy this <form> from navbar for search box */}
                            <input className="form-control me-2 w-75 bg-white text-dark" type="search" placeholder="Type in..." aria-label="Search" />
                            <button className="btn text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" >
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                    {foodimg.map((imgSrc)=>{
                        return(
                            <div className="carousel-item active" >
                        <img src={imgSrc.img} className="d-block w-100  " style={{ filter: "brightness(30%)" }} alt="..." />
                    </div>
                        )
                    })}
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div>
    )
}
