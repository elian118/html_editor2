import React from 'react';
import { Home } from '@/pages/Home';
import { MyCkEditor } from '@/pages/MyCkEditor';
import { NotFound } from '@/pages/NotFound';

export const basicRoutes = [
  {path: '/', element: <Home />},
  {path: 'ckeditor', element: <MyCkEditor />},
  {path: '*', element: <NotFound />},
];