import baseURL from '@/apis';
import { LoginButton, NavigationBar } from '@/components';
import { LOGIN_PAGE_MESSAGE } from '@/constants/messages';

export default function Login() {
  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center gap-[0.4375rem] bg-bg-primary pb-[13.4375rem]">
      <NavigationBar />
      <div className="flex h-[100%] w-[100%] max-w-[25rem] flex-col items-center justify-center gap-40">
        <div className="flex flex-col items-start gap-24 self-stretch">
          <h2 className="display-b-48 self-stretch text-text-main">
            {LOGIN_PAGE_MESSAGE.loginTitle}
          </h2>
          <p className="body-sb-20 text-text-sub">
            {LOGIN_PAGE_MESSAGE.loginBody}
          </p>
        </div>
        <div className="flex flex-col items-start gap-16 self-stretch">
          <LoginButton
            type="kakao"
            loginRouter={`${baseURL}/oauth2/authorization/kako`}
          />
          <LoginButton
            type="google"
            loginRouter={`${baseURL}/oauth2/authorization/google`}
          />
          <LoginButton loginRouter="/none-member" type="nonMember" />
        </div>
      </div>
    </div>
  );
}
