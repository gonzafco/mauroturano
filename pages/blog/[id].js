import Header from "../../src/Components/Header";
import Footer from "../../src/Components/Footer";

export default function index(params) {
  console.log(params)
  return (
    <>
      <Header />
      {params.title}
      {}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { title: "hola" }, // will be passed to the page component as props
  };
}
