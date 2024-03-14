import React from "react";

const Home_services_div = () => {
  return (
    <div class="services-div-main">
      <h1>Services We Provide</h1>

      <div class="cards">
        <div class="card">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1557353425-6c61136de070?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="content">
            <h1>Hairstyling</h1>
            <span>
              Professional hair styling for any occasion, from sleek blowouts to
              elegant updos.
            </span>
            <a href="#" class="link">
              Book Service
            </a>
          </div>
        </div>

        <div class="card inverted">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1583241800967-3b926edea1f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="content">
            <h1>Makeup Application</h1>
            <span>
              Expert makeup application for weddings, events, or everyday glam.
            </span>
            <a href="#" class="link">
              Book Service
            </a>
          </div>
        </div>

        <div class="card">
          <div class="image">
            <img
              src="https://images.unsplash.com/photo-1492618269284-653dce58fd6d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div class="content">
            <h1>Eyelash Extensions</h1>
            <span>
              Enhance your lashes with professional eyelash extensions for a
              fuller, more dramatic look.
            </span>
            <a href="#" class="link">
              Book Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_services_div;
