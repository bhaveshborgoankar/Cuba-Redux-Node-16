import React, { Fragment } from 'react';
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Home } from 'react-feather';
import { Link } from 'react-router-dom';
import { DefaultLayout } from '../theme-customizer';

const Breadcrumbs = (props) => {
  const id = window.location.pathname.split('/').pop();
  const defaultLayout = Object.keys(DefaultLayout);
  const layout = id ? id : defaultLayout;
  return (
    <Fragment>
      <Container fluid={true}>
        <div className='page-title'>
          <Row>
            <Col xs='6'>
              <h3>{props.title}</h3>
            </Col>
            <Col xs='6'>
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`}>
                    <Home />
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>{props.parent}</BreadcrumbItem>
                <BreadcrumbItem active>{props.title}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
