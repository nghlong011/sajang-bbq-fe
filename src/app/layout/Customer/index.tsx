import { ConfigProvider, Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';
import Banner from 'app/components/section/Banner';
import Contact from 'app/components/section/Contact';

interface IProps {
  children: JSX.Element;
}

const CustomerLayout = (props: IProps) => {
  const { children } = props;

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#a31d24', fontFamily: 'Inter, sans-serif' } }}>
      <Layout className="bg-[#F0F1F0]">
        <Header />
        <Banner />
        {children}
        <Contact />
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};

export default CustomerLayout;
