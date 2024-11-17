import Image from "next/image"
const FeaturedProducts = () => {
    return (
        <div className="flex flex-wrap justify-start gap-4 px-4 py-6">
            {/*product1*/}
            <div className="flex flex-col items-center w-48">
                <Image src="/product 1.jpeg"
                alt="Product ONE" width={200} height={200} />
                <p className="text-center pt-4 font-semibold">PKR 1000</p>
                <button className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Buy Now
                    </button>
                    </div>
                    {/*Product2 */}
                    <div className="flex flex-col items-center w-48">
                        <Image src="/product2.jpeg"
                        alt="Product Two" width={300} height={300} />
                        <p className="text-center pt-4 font-semibold">PKR 3000</p>
                        <button className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md
                         hover:bg-green-600">
                            Buy Now
                        </button>
                    </div>

            <div className="flex flex-col items-center w-48">
                <Image
                    src="/product3.jpg"
                    alt="Product Three"
                    width={200}
                    height={200}
                />
                <p className="text-center pt-4 font-semibold">PKR 6,000</p>
                <button className="px-4 py-2 mt-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Buy Now
                    </button>
                </div>
            </div>
        
    );
};

export default FeaturedProducts;