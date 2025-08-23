// client server
// "use client";

// import { useEffect } from "react";

import Heading from "../components/Heading";
import { roboto_mono } from "./fonts";

export default function Page() {
  //   useEffect(() => {
  //     window.alert("Hello World!");
  //   }, []);
  return (
    <>
      <Heading className={roboto_mono.className}>Halaman Home</Heading>
      <p>Hello, Next.js!</p>
    </>
  );
}
