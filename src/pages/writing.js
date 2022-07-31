import * as React from "react";
import NavBar from "../components/navBar";
import Layout from "../components/layout";

const Writing = () => (
  <Layout>
    <NavBar />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50vh",
      }}
    >
      <h1 style={{ paddingBottom: "50px" }}>writing</h1>
      <p>
        {" "}
        Coming Soon: a compilation of my writing samples, from news articles to
        journal entries!{" "}
      </p>
    </div>
  </Layout>
);

export default Writing;
