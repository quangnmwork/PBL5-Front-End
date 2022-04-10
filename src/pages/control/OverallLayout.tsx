import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import RenderRoutes from '../../utils/RenderRoutes';
import FormSignIn from '../authentication/components/FormSignIn';
import AuthRoutes from '../authentication/routes';
const OverallLayout = () => {
  return <Routes>{RenderRoutes(AuthRoutes)}</Routes>;
};

export default OverallLayout;
