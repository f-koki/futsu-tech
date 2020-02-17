import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const FeaturesPage: React.FC = () => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Works
      </h2>
      {/* <p className="lead grey-text w-responsive mx-auto mb-5">
        I work
      </p> */}
      <MDBRow>
        <MDBCol md="4">
          <MDBIcon icon="chart-area" size="3x" className="red-text" />
          <h5 className="font-weight-bold my-4">ENGINEERING</h5>
          <p className="grey-text mb-md-0 mb-5">
            フロントエンド開発
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon icon="book" size="3x" className="cyan-text" />
          <h5 className="font-weight-bold my-4">DESIGN</h5>
          <p className="grey-text mb-md-0 mb-5">
            デザイン
          </p>
        </MDBCol>
        <MDBCol md="4">
          <MDBIcon far icon="comments" size="3x" className="orange-text" />
          <h5 className="font-weight-bold my-4">KEYBOARDIST</h5>
          <p className="grey-text mb-md-0 mb-5">
            Youtube登録者数1000人
            ピアノ講座動画
          </p>
        </MDBCol>
      </MDBRow>
    </section>
  );
};

export default FeaturesPage;
