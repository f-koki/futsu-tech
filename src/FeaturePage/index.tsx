import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage: React.FC = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">Works</h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Engineering / Design / Keyboard
      </p>
      <MDBRow>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon
                icon="flag-checkered"
                size="2x"
                className="deep-purple-text"
              />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">International</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Experimental</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon
                icon="glass-martini"
                size="2x"
                className="deep-purple-text"
              />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Relaxing</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
