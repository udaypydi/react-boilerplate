import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root'
const Home = React.lazy(() => import('./components/home/home.component'));


// Suspense API used to render fallback before mounting component

function App() {
  return (
    <div>
       <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense> 
    </div>
  )
}

export default hot(App);
