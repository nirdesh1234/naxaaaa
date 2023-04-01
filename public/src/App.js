import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesRequest } from "./actions/servicesActions";

function App() {
  const dispatch = useDispatch();
  const { loading, services, error } = useSelector(
    ({ services }) => services
  );

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, [dispatch]);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="services">
          <h1>Our Services</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <ul>
            {services.map(({ id, title, description }) => (
              <li key={id}>
                <h2>{title}</h2>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section id="about">
          <h1>About Us</h1>
          <p>We are a team of professionals dedicated to...</p>
        </section>
        <section id="team">
          <h1>Our Team</h1>
          <p>Meet the people behind our success...</p>
        </section>
        <section id="contact">
          <h1>Contact Us</h1>
          <p>Get in touch with us today...</p>
        </section>
      </main>
    </div>
  );
}

export default App;
