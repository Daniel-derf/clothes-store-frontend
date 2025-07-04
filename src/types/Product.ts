type Product = {
  id: number;
  name: string;
  price: number;
  sex: string;
  imageUrl: string;
  description: string;
  ratingId: number;
  availableSizeQtt: { [size: string]: number };
  appliedDiscountPercentage: number;
};

export default Product;
