import { ReactNode } from "react";
import Navigation from "../../shared/components/nav/Navigation";

const LoginPage = (): ReactNode => {

    return <>
        <Navigation />
        This is the login page.
        <p>This page should be visible only for unauthenticated users.</p>
    </>
}

export default LoginPage