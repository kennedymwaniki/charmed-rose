import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => {
  return c.json({
    message: "Hello from Hono!",
  });
});

export const GET = handle(app);
("use client");
// import Signin from "@/components/Signin";
// import { useEffect, useState } from "react";

// export default function Home() {
//   const [message, setMessage] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await fetch("/api/hello");
//       const { message } = await res.json();
//       setMessage(message);
//     };
//     fetchData();
//   }, []);

//   if (!message) return <p className="text-cyan-500">Loading...</p>;

//   return (
//     <>
//       <p>{message}</p>
//       <Signin />
//     </>
//   );
// }
