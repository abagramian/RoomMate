import './index.scss';
import Sidebar from '../Sidebar'
import ToGetContainer from '../ToGet/ToGetContainer';
import { Link } from "react-router-dom";

const Layout = () => {
    return (
    <>
        <Sidebar />
        <div id="page-wrap">
            <ToGetContainer />
        </div>
    </>
    );
};

export default Layout;