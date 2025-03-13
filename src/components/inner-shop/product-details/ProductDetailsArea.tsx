import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import Reviews from "./Reviews";
import RelatedProduct from "./RelatedProduct";
import { addToCart, decrease_quantity } from "../../../redux/features/cartSlice";
import { RootState } from "../../../redux/store";
import { Product } from "../../../redux/features/productSlice";
import { Link } from "react-router-dom";

const nav_data: string[] = [
   "/assets/img/shop/shop_img01.jpg",
   "/assets/img/shop/shop_img02.jpg",
   "/assets/img/shop/shop_img03.jpg"];

const ProductDetailsArea = ({ single_product }: any) => {

   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const productItem = useSelector((state: RootState) => state.cart.cart);
   const dispatch = useDispatch();

   const handleAddToCart = (item: Product) => {
      dispatch(addToCart(item));
   };

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
   };

   const totalItems = productItem.find((d_item: any) => d_item?.id === single_product?.id)

   return (
      <section className="shop-details-area section-pb-90">
         <div className="container">
            <Reviews />
            {/* <RelatedProduct /> */}
         </div>
      </section>
   )
}

export default ProductDetailsArea
