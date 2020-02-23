import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage: React.FC = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Skills
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Engineering / Keyboard / Coarching
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
              <h5 className="font-weight-bold mb-3">Engineering</h5>
              <p className="grey-text">
                Java / JavaScript / CSS / Sass / Reactjs / Go / PHP / GAS /
                初心者へのメンタリング
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Keyboardist</h5>
              <p className="grey-text">
                ライブ活動歴あり / Youtubeピアノ講座動画30万回視聴 / 作曲
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
              <h5 className="font-weight-bold mb-3">Coarching</h5>
              <p className="grey-text">独立支援 / 転職支援</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
