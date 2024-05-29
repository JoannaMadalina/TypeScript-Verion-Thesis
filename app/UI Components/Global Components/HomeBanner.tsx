import React from 'react';

const HomeBanner: React.FC = () => {
  return (
    <section className="static-banner">
      <div className="container">
        <div className="row">
          <div className="other-card1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">REMEMBER TO</p>
                <p className="card-text">CATEGORIES</p>
                <p className="card-text">ALL YOUR PRODUCTS</p>
              </div>
            </div>
          </div>
          <div className="first-card">
            <div className="card">
              <div className="card-body-first">
                <h5 className="card-title"></h5>
                <p className="card-text">REMEMBER TO ADD</p>
                <p className="card-text">WEIGHT</p>
                <p className="card-text">TO YOUR PRODUCTS</p>
              </div>
            </div>
          </div>
          <div className="other-card2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">REMEMBER TO SELECT THE</p>
                <p className="card-text">COUNTRY</p>
                <p className="card-text">YOU WANT THE FILE FOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;