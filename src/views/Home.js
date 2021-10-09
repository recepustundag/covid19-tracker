import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries, fetchMapInfo } from '../actions/covid';
const Search = lazy(() => import("../components/Search"));
const MapSwitcher = lazy(() => import("../components/MapSwitcher"));
const Table = lazy(() => import("../components/Table"));

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchMapInfo());
  }, [dispatch]);

  return (
    <div className="container home">
      <div className="home-left">
      <Suspense fallback={<div style={{height: '70px'}} />}>
        <Search />
      </Suspense>
      <Suspense fallback={<div style={{height: '110px'}} />}>
        <MapSwitcher />
      </Suspense>
      </div>
      <div className="home-right">
        <Suspense fallback={<div>Loading...</div>}>
          <Table />
        </Suspense>
      </div>
    </div>
  )
}

export default Home
