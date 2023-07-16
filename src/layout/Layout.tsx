import React, {FunctionComponent} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";


interface Props {
    children: React.ReactNode;
}

const Layout: FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <Menu></Menu>
            <div className="page-content-wrapper">{props.children}</div>
            <Footer></Footer>
        </>
    );
};

export default Layout;
