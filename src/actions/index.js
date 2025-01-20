"use server";

export async function fetchAllProducts() {
  try {
    const result = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await result.json();

    return {
      success: true,
      data: data?.products,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! Please try again",
    };
  }
}

export async function fetchProductById(id) {
  try {
    const result = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await result.json();

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Some error occurred! Please try again",
    };
  }
}
