import Head from 'next/head';
import Navbar from './Navbar';
import '../static/css/Super.css';

const Layout = (props) => (
    <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/img/favicon.png" type="image/png" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
          <title>{props.title}</title>
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default Layout;