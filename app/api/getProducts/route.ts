import { NextResponse } from "next/server";
type item = {
  name: string;
  price: number;
  rating: number;
};

let products: item[] = [
  { name: "redmi", price: 100, rating: 3 },
  { name: "oneplus", price: 300, rating: 5 },
  { name: "samsung", price: 200, rating: 1 },
];

export async function GET() {
  return NextResponse.json({ products: products });
}
