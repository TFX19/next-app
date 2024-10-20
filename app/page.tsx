import Link from "next/link";
//import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
  <main>
    <h1>My First next.js experience</h1>
    <Link className="btn btn-primary mb-5" href="/users">Users</Link>
    {/* <ProductCard /> */}
  </main>
  );
}
