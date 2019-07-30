import Head from 'next/head';
import Navbar from './Navbar';
import '../assets/css/Super.css';

//import '../assets/css/Bootstrap.min.css';

const Layout = (props) => (
    <div>
        <Head>
            <title>GuruDarshan</title>
            {/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> */}
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default Layout;