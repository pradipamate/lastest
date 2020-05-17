import React, { useState, Component, useEffect, useRef } from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { Col, Container, Row } from 'react-bootstrap';
import { Card, CardBody, } from 'reactstrap';
import Burger from "./Burger";
import Menu from "./Menu";


function App() {

  const [list, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const node = useRef();

  useEffect(() => {
    Something();
  })

  async function Something() {
    const query = `
              {
                products(first: 5) {
                  edges {
                    node {
                      id
                      name
                      description
                    }
                  }
                }
              }
            `;
    const response = await fetch('https://pwa.demo.saleor.rocks/graphql/', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    });
    const json = await response.json();
    var productlist = json.data.products.edges;
    if (productlist.length && productlist !== undefined) {
      setData(productlist);
    }
  }

  const theme = {
    primaryDark: "#0D0C1D",
    primaryLight: "#EFFFFA",
    primaryHover: "#343078",
    mobile: "576px"
  };

  console.log("list", list);
  return (
    <div>
      <Container>
        <div>
          <ThemeProvider theme={theme}>
            <>
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>

              <GlobalStyles />
              <div className="product_listing">
                <h1 className="text-center">Sales & Product</h1>
                <Row className="mb-2">
                  {list.map((item) => (
                    <Col sm="4" className="listing_div">
                      <Card>
                        <CardBody>
                          <h2>{item.node.name}</h2>
                          <p>{item.node.description}</p>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>

            </>
          </ThemeProvider>
        </div>
      </Container>
    </div>
  )
}

export default App





