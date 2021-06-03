import Header from "../../src/Components/Header";
import Footer from "../../src/Components/Footer";

export default function index(params) {
  return (
    <>
      <Header />
      {params.title}
      {}
      <Footer />
    </>
  );
}
