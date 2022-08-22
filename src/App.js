import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/spinner/Spinner";
import { checkUserSession } from './store/user/userAction'
import { GlobalStyle } from "./global.styles";

const Navigation = lazy(() => import('./routes/navigation/Navigation'));
const Home = lazy(() => import('./routes/home/Home'));
const Shop = lazy(() => import('./routes/shop/Shop'));
const Authentication = lazy(() => import('./routes/authentication/Authentication'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
    //getCurrentUser().then(user => console.log(user))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>  {/* parent route always present on page */}
          <Route index element={<Home />} /> {/* index - this route (page) will show at start on parents path (/) */}
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
