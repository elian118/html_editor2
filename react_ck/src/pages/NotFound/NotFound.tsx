import React from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      페이지를 찾을 수 없습니다.
      <Button onClick={() => navigate('/')}>홈으로</Button>
    </div>
  );
};