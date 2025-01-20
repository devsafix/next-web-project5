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
import { useRouter } from "next/navigation";

const ProductCard = ({ productItem }) => {
  const { id, title, description, price, thumbnail } = productItem;

  const router = useRouter();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img className="size-40" src={thumbnail} alt={title} />
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-gray-900 font-bold">${price}</p>
        <Button onClick={() => router.push(`/${id}`)}>Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
