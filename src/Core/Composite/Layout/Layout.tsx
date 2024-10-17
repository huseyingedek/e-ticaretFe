import React from "react";
import { Header, Footer } from "@/src/Core/index";
import Layout from "antd/lib/layout";

export type LayoutProps = {
  children: React.ReactNode;
};

const { Content } = Layout;

const LayoutPage: React.FC<LayoutProps> = ({ children }: LayoutProps) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ paddingTop: '20px', marginTop: '70px' }}>
        <div>
          {children}
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default LayoutPage;
