import React from 'react';
import BlurLayer from '../components/blurLayer/blurLayer.component';
import FlexContainer from '../components/flexContainer/flexContainer.component';
import LoginForm from '../components/login-form.component';

const LoginPage = (): JSX.Element => {
  return (
    <FlexContainer>
      <BlurLayer>
        <LoginForm />
      </BlurLayer>
    </FlexContainer>
  );
};

export default LoginPage;
