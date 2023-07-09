import React from 'react';
import PriceCard from './PriceCard';

const Header = () => {
  return (
    <div>
      <header className="navbar navbar-expand-md navbar-light fixed-top bg-white d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <div>
          <a className="navbar-brand" href="#">
            Company name
          </a>
        </div>

        <div
          className="collapse navbar-collapse d-flex justify-content-end"
          id="navbarCollapse"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Enterprise
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <button type="button" class="btn btn-outline-primary">
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
};

const PricingPage = () => {
  return (
    <div>
      <Header />
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="card-deck mb-3 text-center">
          <div>
            <h1 className="display-4">Pricing</h1>
            <p
              className="lead"
              style={{ fontSize: '1.25rem', fontWeight: 300 }}
            >
              Quickly build an effective pricing table for your potential
              customers with this Bootstrap example. It's built with default
              Bootstrap components and utilities with little customization.
            </p>
          </div>
          <PriceCard />
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
