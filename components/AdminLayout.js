import Head from 'next/head';
import '../static/css/Super.css';

const AdminLayout = (props) => (
    <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/img/favicon.png" type="image/png" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
          <title>{props.title}</title>
        </Head>
        {props.children}
    </div>
);

export default AdminLayout;