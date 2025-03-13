import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne"
import ProductDetailsArea from "./ProductDetailsArea"

const ProductDetails = () => {
  return (
    <>
      <HeaderOne />
      <main className="main-area fix">
        <BreadcrumbOne title="Course Details" sub_title="Course Details" />
        <ProductDetailsArea />
      </main>
      <FooterOne style={false} style_2={true} />
    </>
  )
}

export default ProductDetails
