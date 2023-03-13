import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate('/ckeditor')}>일반 CK편집기</Button>
    </div>
  );
};