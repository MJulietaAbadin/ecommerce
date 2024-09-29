import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
      name: "IPhone 16 Pro",
      price: 799,
      description:
      "The iPhone 16 Pro boasts a grade 5 titanium design with a micro-sandblasted finish, making it strong and lightweight. It comes in four vibrant colors, including desert titanium, and features a 100% recycled thermal substructure for better heat dissipation. This model offers up to 20% improved continuous performance over the iPhone 15 Pro, enhancing user experience for longer use.",
      image:
      "https://i.postimg.cc/RZg1QJjG/iphone-16-pro.png",
      categoryId: 1,
      stock: 10
  },
  {
      name: "IPhone 16",
      price: 699,
      description:
      "The iPhone 16 features a 6.1-inch Super Retina XDR display, a powerful A18 chip, and a 48MP camera system with ultrawide capabilities. It supports MagSafe wireless charging and offers up to 22 hours of video playback. Available in Ultramarine, Teal, Pink, White, and Black, it combines performance and style with sustainable materials.",
      image:
      "https://i.postimg.cc/5N18hmJn/iphone-16-removebg-preview.png",
      categoryId: 1,
      stock: 10
  },
  {
      name: "IPhone 15",
      price: 609,
      description:
      "The iPhone 15 includes the Dynamic Island for live alerts and a 48 MP ultra-wide camera. Its aluminum design is waterproof and dust-resistant, featuring a brighter 6.1-inch Super Retina XDR display. Powered by the A16 Bionic chip, it has a USB-C connector and safety features such as crash detection. Additionally, it uses recycled materials and privacy technologies to reduce its environmental impact.",
      image:
      "https://i.postimg.cc/28wnrB8m/iphone-15-removebg-preview.png",
      categoryId: 1,
      stock: 10
  },
  {
      name: "IPhone 14",
      price: 799,
      description:
      "The iPhone 14 features an advanced dual-camera system, the fast A15 Bionic chip, and a significant improvement in battery life. Its design is durable and includes a brighter Super Retina XDR display. Additionally, it is resistant to spills, splashes, and dust, with an IP68 rating. Battery life varies depending on usage and settings.",
      image:
      "https://i.postimg.cc/d07C2HRt/iphone-14-removebg-preview.png",
      categoryId: 1,
      stock: 10
  },
  {
      name: "IPhone SE",
      price: 499,
      description:
      "The iPhone SE is the most powerful 4.7-inch model, equipped with the A13 Bionic chip that delivers exceptional performance in apps and games. It features Portrait mode, lighting effects, Smart HDR, and cinematic-quality 4K video. It also includes a long-lasting battery and water resistance. This iPhone combines all the features you love in a compact design.",
      image:
      "https://i.postimg.cc/fb69Bc57/iphone-se-removebg-preview.png",
      categoryId: 1,
      stock: 10
  },
  {
      name: "MacBook Air",
      price: 759,
      description:
      "The MacBook Air is Apple's thinnest and lightest notebook, equipped with the M1 chip. Its 8-core CPU accelerates projects, while its GPU enhances graphics in apps and games. Additionally, the Neural Engine optimizes machine learning, all in a quiet design that offers up to 18 hours of battery life. Portable and more powerful than ever.",
      image:
      "https://i.postimg.cc/Hkkjty5K/macbook-air-13-m2-chip-8-core-cpu-8-core-gpu-256gb-space-grey-removebg-preview.png",
      categoryId: 2,
      stock: 10
  },
  {
      name: "MacBook Pro",
      price: 899,
      description:
      "The MacBook Pro is Apple's thinnest and lightest notebook, equipped with the M1 chip. Its 8-core CPU accelerates projects, while its GPU enhances graphics in apps and games. Additionally, the Neural Engine optimizes machine learning, all in a quiet design that offers up to 18 hours of battery life. Portable and more powerful than ever.",
      image:
      "https://i.postimg.cc/4dV33bkK/mbp14-spacegray-select-202110.png",
      categoryId: 2,
      stock: 10
  },
  {
      name: "iPad Pro",
      price: 790,
      description:
      "This product combines the power of a computer with the versatility of an iPad, allowing for easy multitasking. You can download numerous applications from the App Store and enjoy video calls and high-quality photos thanks to its 12 MP cameras, which ensure sharpness and vibrant colors.",
      image:
      "https://i.postimg.cc/qqrCdpPz/ipad-pro-removebg-preview.png",
      categoryId: 3,
      stock: 10
  },
  {
      name: "iPad Air",
      price: 599,
      description:
      "This product combines the power of a computer with the versatility of an iPad, allowing for easy multitasking. You can download numerous applications from the App Store and enjoy video calls and high-quality photos thanks to its 12 MP cameras, which ensure sharpness and vibrant colors.",
      image:
      "https://i.postimg.cc/BbCPSd3N/ipad-air-removebg-preview.png",
      categoryId: 3,
      stock: 10
  },
  {
      name: "iPad",
      price: 1000,
      description:
      "This product combines the power of a computer with the versatility of an iPad, allowing for easy multitasking. You can download numerous applications from the App Store and enjoy video calls and high-quality photos thanks to its 12 MP cameras, which ensure sharpness and vibrant colors.",
      image:
      "https://i.postimg.cc/T315x74q/ipad-removebg-preview.png",
      categoryId: 3,
      stock: 10
  },
  {
      name: "iPad Mini",
      price: 499,
      description:
      "This product combines the power of a computer with the versatility of an iPad, allowing for easy multitasking. You can download numerous applications from the App Store and enjoy video calls and high-quality photos thanks to its 12 MP cameras, which ensure sharpness and vibrant colors.",
      image:
      "https://i.postimg.cc/CLPdcCxZ/ipad-min-removebg-preview.png",
      categoryId: 3,
      stock: 10
  },
  {
      name: "Apple Watch SE",
      price: 599,
      description:
      "The Apple Watch SE advanced health sensors for electrocardiograms, heart rate measurement, and blood oxygen monitoring. It includes safety features such as Crash and Fall Detection and is water-resistant up to 50 meters. Its always-on display and customization make it ideal for a healthy lifestyle, in addition to being compatible with other Apple devices.",
      image:
      "https://i.postimg.cc/yN9d6wX9/a-w-se-removebg-preview.png",
      categoryId: 4,
      stock: 10
  },
  {
      name: "Apple Watch Series 10",
      price: 399,
      description:
      "The Apple Watch Series 10 advanced health sensors for electrocardiograms, heart rate measurement, and blood oxygen monitoring. It includes safety features such as Crash and Fall Detection and is water-resistant up to 50 meters. Its always-on display and customization make it ideal for a healthy lifestyle, in addition to being compatible with other Apple devices.",
      image:
      "https://i.postimg.cc/26D5122t/a-w-series10-removebg-preview.png",
      categoryId: 4,
      stock: 20
  },
  {
      name: "Apple Watch Ultra 2",
      price: 389,
      description:
      "The Apple Watch Ultra 2 advanced health sensors for electrocardiograms, heart rate measurement, and blood oxygen monitoring. It includes safety features such as Crash and Fall Detection and is water-resistant up to 50 meters. Its always-on display and customization make it ideal for a healthy lifestyle, in addition to being compatible with other Apple devices.",
      image:
      "https://i.postimg.cc/KzD8BBW8/a-w-ultra2-removebg-preview.png",
      categoryId: 4,
      stock: 20
  }
]

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
