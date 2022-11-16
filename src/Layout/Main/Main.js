import React from 'react';
import { Outlet } from 'react-router-dom';
import Carusel from '../../component/Carusel/Carusel';
import Foooter from '../../component/Foooter/Foooter';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            <div><Header></Header></div>
            <div><Outlet></Outlet></div>
            <div className='bg-slate-500 mt-16'><Foooter></Foooter></div>
        </div>
    );
};

export default Main;