import { Home } from '@/pages/Home/Home';
import React from 'react';
import MyCkEditor from '@/pages/MyCkEditor/MyCkEditor';
import NotFound from '@/pages/NotFound/NotFound';

export const basicRoutes = [
  {path: '/', element: <Home />},
  {path: 'ckeditor', element: <MyCkEditor />},
  {path: '*', element: <NotFound />},
];