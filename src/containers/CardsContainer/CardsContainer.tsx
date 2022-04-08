import React from "react";
import Card from "components/Card";
import { Col, Row } from "antd";
import data from "data";

const CardsContainer: React.FC = () => {
  return (
    <Row gutter={[48, 48]}>
      {data.map((q, key) => (
        <Col key={key} className="gutter-row" sm={24} md={8}>
          <Card item={q} />
        </Col>
      ))}
    </Row>
  );
};

export default CardsContainer;
