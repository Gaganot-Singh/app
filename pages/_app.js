import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../components/Layout";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
