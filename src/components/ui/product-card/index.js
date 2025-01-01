/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../button";

const ProductCard = ({ productItem }) => {
  const { title, description, price, thumbnail } = productItem;
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={thumbnail} alt={title} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-gray-900 font-bold">${price}</p>
        <Button>Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
