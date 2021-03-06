import Card from "../Card";
import { useState, useEffect } from "react";
import sanityClient from "../../client";
import Link from "next/link";
export default function index() {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    fetchDataNavbar();
  }, []);

  async function fetchDataNavbar() {
    const query = `*[_type=="home"][0]{cards}`;
    const data = await sanityClient.fetch(query);

    setNavbar(data.cards);
  }
  return (
    <>
      {navbar.map((nav, key) => (
        <Link href={`/${nav.path}`} replace>
          <a>
            <Card title={nav.title} key={key} />
          </a>
        </Link>
      ))}
    </>
  );
}
