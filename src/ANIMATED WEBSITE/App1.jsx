import Home from './ANIMATED WEBSITE/Home';
import {Switch, Route} from "react-router-dom";
import Animated from './ANIMATED WEBSITE/animated';
import Service from './ANIMATED WEBSITE/Service';
import About from './ANIMATED WEBSITE/About';

const App1 = () => {

  return (


    <>
      {/* <Restaurent /> */}



      <Switch>
        <Route  excat path="/" component={Home}/>
        <Route  excat path="/about" component={About}/>
        <Route  excat path="/service" component={Service}/>
        <Route  excat path="/animated" component={Animated}/>

      {/* <Temp /> */}
      </Switch>
      {/* <Animated /> */}




    </>
  )
};

export default App1;