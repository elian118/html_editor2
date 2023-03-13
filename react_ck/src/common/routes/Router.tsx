import React from 'react';
import { useRoutes } from 'react-router-dom';
import { basicRoutes } from '@/common/routes/basicRoutes';

export const Router = () => useRoutes(basicRoutes);