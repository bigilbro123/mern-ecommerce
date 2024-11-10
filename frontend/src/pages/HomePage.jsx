import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Engine Components", name: "Engine Components", imageUrl: "/Engine Components.jpg" },
	{ href: "/Transmission System", name: "Transmission System", imageUrl: "/Transmission System.jpeg" },
	{ href: "/Electrical and Electronics", name: "Electrical and Electronics", imageUrl: "/Electrical and Electronics.jpg" },
	{ href: "/Suspension and Steering", name: "Suspension and Steering", imageUrl: "/Suspension and Steering.jpg" },
	{ href: "/Braking System", name: "Braking System", imageUrl: "/Braking System.jpg" },
	{ href: "/Cooling System", name: "Cooling System", imageUrl: "/Cooling System.jpg" },
	{ href: "/Fuel System", name: "Fuel System", imageUrl: "/Fuel System.webp" },
	{ href: "/Exhaust System", name: "Exhaust System", imageUrl: "/Exhaust System.webp" },
	{ href: "/Body and Exterior", name: "Body and Exterior", imageUrl: "/Body and Exterior.jpg" },
	{ href: "/Interior and Cabin", name: "Interior and Cabin", imageUrl: "/Interior and Cabin.jpg" },
	{ href: "/HVAC (Heating, Ventilation, and Air Conditioning)", name: "HVAC (Heating, Ventilation, and Air Conditioning)", imageUrl: "/HVAC.jpg" },
	{ href: "/Filters", name: "Filters", imageUrl: "/Filters.jpeg" },
	{ href: "/Drive Train", name: "Drive Train", imageUrl: "/Drive Train.jpg" },
	{ href: "/Wheels and Tires", name: "Wheels and Tires", imageUrl: "/Wheels and Tires.webp" },
	{ href: "/Fluids and Lubricants", name: "Fluids and Lubricants", imageUrl: "/Fluids and Lubricants.jpg" },
	{ href: "/Safety and Security", name: "Safety and Security", imageUrl: "/Safety and Security.jpg" },
	{ href: "/Accessories", name: "Accessories", imageUrl: "/Accessories.jpg" }
]
	;

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Your one-stop shop for high-quality, reliable vehicle spare parts delivering performance and durability with every purchase.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
