"use client";

import { BrandsGrid } from "../ui/brands-grid";

const brands = [
  {
    name: "Brand One",
    logo: "/images/brands/brand1.svg",
  },
  {
    name: "Brand Two",
    logo: "/images/brands/brand2.svg",
  },
  {
    name: "Brand Three",
    logo: "/images/brands/brand3.svg",
  },
  {
    name: "Brand Four",
    logo: "/images/brands/brand4.svg",
  },
  {
    name: "Brand Five",
    logo: "/images/brands/brand5.svg",
  },
  {
    name: "Brand Six",
    logo: "/images/brands/brand6.svg",
  },
  {
    name: "Brand Seven",
    logo: "/images/brands/brand7.svg",
  },
  {
    name: "Brand Eight",
    logo: "/images/brands/brand8.svg",
  },
  {
    name: "Brand Nine",
    logo: "/images/brands/brand9.svg",
  },
  {
    name: "Brand Ten",
    logo: "/images/brands/brand10.svg",
  },
  {
    name: "Brand Eleven",
    logo: "/images/brands/brand11.svg",
  },
  {
    name: "Brand Twelve",
    logo: "/images/brands/brand12.svg",
  },
];

export function ClientLogos() {
  return (
    <BrandsGrid
      brands={brands}
      className="min-w-[800px]"
      title="Förtroende från 700+ företag i Norden"
    />
  );
}
