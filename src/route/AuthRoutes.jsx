import Signin from '../auth/signin';
// Authentication
import Login from '../pages/authentication/login';
import LoginWithBgImage from '../pages/authentication/loginWithBgImage';
import LoginWithBgVideo from '../pages/authentication/loginWithBgVideo';
import LoginWithValidation from '../pages/authentication/loginwithValidation';
import Register from '../pages/authentication/register';
import RegisterWithBgImage from '../pages/authentication/registerWithBgImage';
import RegisterWithBgVideo from '../pages/authentication/registerWithBgVideo';
import UnlockUser from '../pages/authentication/unlockUser';
import Forgetpwd from '../pages/authentication/forgetpwd';
import Resetpwd from '../pages/authentication/resetpwd';

// Comming soo
import Comingsoon from '../pages/comingSoon/comingsoon';
import ComingsoonImg from '../pages/comingSoon/comingsoonImg';
import ComingsoonVideo from '../pages/comingSoon/comingsoonVideo';

// Maintenanc
import Maintenance from '../pages/maintenance';
import Error400 from '../pages/errors/error400';
import Error401 from '../pages/errors/error401';
import Error403 from '../pages/errors/error403';
import Error404 from '../pages/errors/error404';
import Error500 from '../pages/errors/error500';
import Error503 from '../pages/errors/error503';

export const authRoutes = [
  { path: `${process.env.PUBLIC_URL}/login/:layout`, Component: <Signin /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/login/:layout`, Component: <Login /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg1/:layout`, Component: <LoginWithBgImage /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithBgImg2/:layout`, Component: <LoginWithBgVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/loginWithValidation/:layout`, Component: <LoginWithValidation /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signup/:layout`, Component: <Register /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg1/:layout`, Component: <RegisterWithBgImage /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/signupWithImg2/:layout`, Component: <RegisterWithBgVideo /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/forgetPwd/:layout`, Component: <Forgetpwd /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/unlockUser/:layout`, Component: <UnlockUser /> },
  { path: `${process.env.PUBLIC_URL}/pages/auth/resetPwd/:layout`, Component: <Resetpwd /> },

  //Coming-soon
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoon/:layout`, Component: <Comingsoon /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonImg/:layout`, Component: <ComingsoonImg /> },
  { path: `${process.env.PUBLIC_URL}/pages/comingsoon/comingsoonVideo/:layout`, Component: <ComingsoonVideo /> },

  { path: `${process.env.PUBLIC_URL}/pages/maintenance/:layout`, Component: <Maintenance /> },

  //Error
  { path: `${process.env.PUBLIC_URL}/pages/errors/error400/:layout`, Component: <Error400 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error401/:layout`, Component: <Error401 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error403/:layout`, Component: <Error403 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error404/:layout`, Component: <Error404 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error500/:layout`, Component: <Error500 /> },
  { path: `${process.env.PUBLIC_URL}/pages/errors/error503/:layout`, Component: <Error503 /> },
];
