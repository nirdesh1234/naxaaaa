import "./Addservice.css";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesRequest } from './servicesActions';

const Services = () => {
  const dispatch = useDispatch();
  const { loading, services, error } = useSelector(({ services }) => services);

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Services</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {services.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
