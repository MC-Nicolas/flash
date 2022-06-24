import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUserInfos } from '../../hooks/user/user.hooks';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setFolders } from '../../redux/user/userSlice';

import CategoryTitle from '../categoryTitle/categoryTitle.component';
import Dashboard from '../dashboard/dashboard.component';
import FlashCardsContainer from '../flashCardsContainer/flashCardsContainer.component';

type Props = {};

const NavHandler = (props: Props) => {
  const { email } = useAppSelector((state) => state.user);
  const { activeSubFolder } = useAppSelector((state) => state.foldersNav);
  const userInfos = useUserInfos(email);
  const dispatch = useAppDispatch();
  console.log(activeSubFolder);

  useEffect(() => {
    dispatch(setFolders(userInfos.folders));
  }, [userInfos]);

  return (
    <div className='main-container flex flex-col'>
      {/* <LoginPage /> */}
      <CategoryTitle title='Dashboard' />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route
          path='/flashcards/:subFolder'
          element={<FlashCardsContainer />}
        />
      </Routes>
    </div>
  );
};

export default NavHandler;
