import React from 'react';
import service1 from '../Image/service-icon2.png';
// import service2 from '../Image/service-icon1.png';
// import service3 from '../Image/service-icon3.png';


function Card() {
    return (
        <div>
            <div className="card d-flex" style={{ width: '300px' }}>
                <img src={service1} className="card-img-top" alt="..." style={{ width: '50px' }} />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            {/* <div className="card" style={{ width: '18rem' }}>
                <img src={service2} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={service3} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> */}
        </div>
    );
}

export default Card;
