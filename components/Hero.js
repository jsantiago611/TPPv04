import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";
import PageTitle from "./PageTitle";

export default function Hero() {
  return (
    <h1 class="py-14 text-[23vw] text-center sm:text-10xl leading-none select-none tracking-tightest font-extrabold">
  <span data-content="Develop." class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-1">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1"> The </span>
  </span>
  <span data-content="Preview." class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-2">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2"> Parents </span>
  </span>
  <span data-content="Ship." class="relative block before:content-[attr(data-content)] before:w-full before:z-0 before:block before:absolute before:top-0 before:px-2 before:bottom-0 before:left-0 before:text-center before:text-black before:animate-gradient-background-3">
    <span class="px-2 text-transparent bg-clip-text bg-gradient-to-r from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3"> Progress </span>
  </span>
</h1>
  );
}
