import React, { Fragment } from 'react';
import sad from '../../assets/images/other-images/sad.png';
import { Link } from 'react-router-dom';
import { Container, Button, Media, Col } from 'reactstrap';
import { BACK_TO_HOME_PAGE } from '../../constant';
import { DefaultLayout } from '../../layout/theme-customizer';

const Error500 = () => {
  const id = window.location.pathname.split('/').pop();
  const defaultLayout = Object.keys(DefaultLayout);
  const layout = id ? id : defaultLayout;
  return (
    <Fragment>
      <div className='page-wrapper'>
        <div className='error-wrapper'>
          <Container>
            <Media body className='img-100' src={sad} alt='' />
            <div className='error-heading'>
              <h2 className='headline font-primary'>{'500'}</h2>
            </div>
            <Col md='8 offset-md-2'>
              <p className='sub-content'>{'The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.'}</p>
            </Col>
            <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layout}`}>
              <Button color='primary-gradien' size='lg'>
                {BACK_TO_HOME_PAGE}
              </Button>
            </Link>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default Error500;
