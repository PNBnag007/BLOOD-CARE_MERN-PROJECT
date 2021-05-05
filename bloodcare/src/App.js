//import logo from './logo.svg';
import React from 'react'


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import NBD from 'views/NBD/NBD';
import LandingPage from 'views/LandingPage/LandingPage';
import OrderPage from 'views/OrderPage/OrderPage';
import Donors_page from 'views/Donors_page/Donors_page';
import ProfilePage from 'views/ProfilePage/ProfilePage';
import Editprofile from 'views/Editprofle/Editprofile';
import BBprofile from 'views/BBprofile/BBprofile';
import Bpage from 'views/Bpage/Bpage';
import {StickyShareButtons} from 'sharethis-reactjs';


import App_a from './App_a.jsx';
import App_b from './App_b.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import Verify from './screens/Verify.js';
import Verifyl from './screens/Verifyl.js';

import PrivateRoute from './Routes/PrivateRoute';

import Loginb from './screens/Loginb.jsx';
import Registerb from './screens/Registerb.jsx';
import Activateb from './screens/Activateb.jsx';
import Privateb from './screens/Privateb.jsx';
import ForgetPasswordb from './screens/ForgetPasswordb.jsx';
import ResetPasswordb from './screens/ResetPasswordb.jsx';
import Verifyb from './screens/Verifyb.js';
import Verifybl from './screens/Verifybl.js';


import PrivateRouteb from './Routes/PrivateRouteb';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
    {/* <LandingPage/> */}
    <Switch>
          <Route exact path="/">
          <LandingPage/>
          <StickyShareButtons
          config={{
            alignment: 'left',    // alignment of buttons (left, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 16,        // font size for the buttons
            hide_desktop: false,  // hide buttons on desktop (true, false)
            labels: 'counts',     // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            min_count: 0,         // hide react counts less than min_count (INTEGER)
            networks: [           // which networks to include (see SHARING NETWORKS)
              'linkedin',
              'facebook',
              'twitter',
              'pinterest',
              'email'
            ],
            padding: 12,          // padding within buttons (INTEGER)
            radius: 4,            // the corner radius on each button (INTEGER)
            show_total: true,     // show/hide the total share count (true, false)
            show_mobile: true,    // show/hide the buttons on mobile (true, false)
            show_toggle: true,    // show/hide the toggle buttons (true, false)
            size: 48,             // the size of each button (INTEGER)
            top: 160,             // offset in pixels from the top of the page
 
            // OPTIONAL PARAMETERS
            url: 'http://www.bloodcare.com/', // (defaults to current url)
            image: 'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/blood_1280p.jpg?itok=1YSWqk1a',  // (defaults to og:image or twitter:image)
            description: 'Blood Care',       // (defaults to og:description or twitter:description)
            title: 'Support Blood Care',            // (defaults to og:title or twitter:title)
            message: 'Join the Bloodcare Community',     // (only for email sharing)
            subject: 'Blood Care',  // (only for email sharing)
            username: 'pnbnag007' // (only for twitter sharing)
 
          }}/>
          </Route>
          <Route exact path="/NBD">
          <NBD/>  
          </Route>
          <Route exact path="/Donors">
            <Donors_page/>  
          </Route>
          <Route exact path="/UserProfile"> {/* /:uid */}
             <ProfilePage/>
          </Route>
          <Route exact path="/EditProfile"> {/* /:uid */}
             <Editprofile/>
          </Route>
          <Route path="/order/:bankId" exact >
            <OrderPage/>
          </Route>
          <Route path="/BBEdit" exact >
            <BBprofile/>
          </Route>
          <Route path="/BBprofile" exact >
            <Bpage/>
          </Route>

          <Route path='/regis' exact render={props => <App_a {...props} />} />
          <Route path='/regib' exact render={props => <App_b {...props} />} />

          <Route path='/login' exact render={props => <Login {...props} />} />
          <Route path='/register' exact render={props => <Register {...props} />} />
          <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
          <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
          <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
          <PrivateRoute path="/private" exact component={Private} />
          <Route path='/verify' exact render={props => <Verify {...props} />} />
          <Route path='/verifyl' exact render={props => <Verifyl {...props} />} />

          <Route path='/loginb' exact render={props => <Loginb {...props} />} />
          <Route path='/registerb' exact render={props => <Registerb {...props} />} />
          <Route path='/users/password/forgetb' exact render={props => <ForgetPasswordb {...props} />} />
          <Route path='/users/password/resetb/:token' exact render={props => <ResetPasswordb {...props} />} />
          <Route path='/users/activateb/:token' exact render={props => <Activateb {...props} />} />
          <Route path='/verifyb' exact render={props => <Verifyb {...props} />} />
          <Route path='/verifybl' exact render={props => <Verifybl {...props} />} />
          <PrivateRouteb path="/privateb" exact component={Privateb} />
    </Switch>
      
    </Router>
  );
}

export default App;
