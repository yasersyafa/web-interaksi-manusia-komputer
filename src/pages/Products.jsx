import Card from "../components/Card"
import Product1 from '../assets/product1.png'
import Product2 from '../assets/product2.png'
import Product3 from '../assets/product3.png'

const Products = () => {
  return (
    <div className="my-20 px-10">
        <h1 className="text-center text-4xl font-lora underline underline-offset-4">PRODUCTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <Card title={`Furniture`} description={`These are the essential items that provide comfort and functionality in a home. Examples include chairs for seating, tables for dining or working, cabinets for storage, and beds for sleeping.`} imageSrc={Product1} />
          <Card title={`Decorations`} description={`These items add personality and style to a space. They can include artwork, mirrors that enhance the sense of space, vases for flowers, and various wall art that reflect the homeowner's taste.`} imageSrc={Product2} />
          <Card title={`Lighting`} description={`Proper lighting sets the mood and illuminates a home. Table lamps are great for focused lighting, floor lamps can brighten up corners, and chandeliers often serve as statement pieces in dining or living areas.`} imageSrc={Product3} />
        </div>
        <div className="w-full flex justify-end">
          <div className='bg-[#464447] p-3 px-5 font-futura text-white w-fit mt-10 rounded-md'>View All Products</div>
        </div>
    </div>
  )
}

export default Products