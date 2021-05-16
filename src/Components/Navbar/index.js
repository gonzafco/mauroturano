import styles from "./Navbar.module.scss";
import Card from "../Card";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
export default function index() {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    fetchDataNavbar();
  }, []);

  function fetchDataNavbar() {
    sanityClient
      .fetch('*[_type=="home"]{title,path}')
      .then((data) => setNavbar(data))
      .catch(console.error);
  }
  return (
    <>
      {navbar.map((nav, key) => (
        <Card title={nav.title} path={nav.path} key={key} />
      ))}
    </>
  );
}
