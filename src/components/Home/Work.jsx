import React from "react";
import Card from "../Card";
import Title from "../Title";

const Work = () => {
  return (
    <div className="Work-main">
      <Title title={"Projects so far"} />
      <div className="Work-sub">
        <Card
          src={
            "https://images.unsplash.com/photo-1769112112580-cee0f8a30413?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          cardTitle={"This portfolio"}
          cardLong={"this is card paragraph"}
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1769112112580-cee0f8a30413?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Card
          src={
            "https://images.unsplash.com/photo-1769112112580-cee0f8a30413?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default Work;
