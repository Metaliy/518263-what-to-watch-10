import { LogoComponent } from '../logo-component/logo-component';


export function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <LogoComponent />

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
