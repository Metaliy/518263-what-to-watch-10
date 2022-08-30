import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/footer-component/footerComponent';
import { HeaderComponent } from '../../components/header-component';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';

function SignInPageScreen() {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {authorizationStatus} = useAppSelector((state) => state);


  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmitForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(emailRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };


  return (
    <div className="user-page">
      <HeaderComponent isInSignIn/>
      <div className='sign-in user-page__content'>
        <form
          action=''
          className='sign-in__form'
          onSubmit={handleSubmitForm}
        >
          <div className='sign-in__fields'>
            <div className='sign-in__field'>
              <input
                ref={emailRef}
                className='sign-in__input'
                type='email'
                placeholder='Email address'
                name='user-email'
                id='user-email'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-email'>Email address</label>
            </div>
            <div className='sign-in__field'>
              <input
                ref={passwordRef}
                className='sign-in__input'
                type='password'
                placeholder='Password'
                name='user-password'
                id='user-password'
              />
              <label className='sign-in__label visually-hidden' htmlFor='user-password'>Password</label>
            </div>
          </div>
          <div className='sign-in__submit'>
            <button
              onClick={() =>
              {
                if (authorizationStatus === AuthorizationStatus.Auth) {
                  navigate(AppRoute.Root);
                }
              }}
              className='sign-in__btn'
              type='submit'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignInPageScreen;
