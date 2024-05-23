import ryzen5600X from "../images/products/ryzen-5600X.png";
import ryzen5800X from "../images/products/ryzen-5800X.png";
import ryzen5900X from "../images/products/ryzen-5900X.png";
import ryzen5950X from "../images/products/ryzen-5950X.png";
import prevRyzen5600X from "../images/products/ryzen-5600X-preview.jpg";
import prevRyzen5800X from "../images/products/ryzen-5800X-preview.jpg";
import prevRyzen5900X from "../images/products/ryzen-5900X-preview.jpg";
import prevRyzen5950X from "../images/products/ryzen-5950X-preview.jpg";
import ryzen5600XGallery1 from "../images/products/ryzen-5600X-gallery-1.png";
import ryzen5600XGallery2 from "../images/products/ryzen-5600X-gallery-2.png";
import ryzen5800XGallery1 from "../images/products/ryzen-5800X-gallery-1.png";
import ryzen5800XGallery2 from "../images/products/ryzen-5800X-gallery-2.png";
import ryzen5600 from '../images/products/ryzen-5600.webp';

const processors = [
  {
    category: "Processor",
    categoryId: "processors",
    id: "amd-ryzen-5-5600x",
    name: "AMD Ryzen 5 5600X",
    price: 299.0,
    image: ryzen5600X,
    previewImage: prevRyzen5600X,
    gallery: [ryzen5600XGallery1, ryzen5600XGallery2],
    description: "The AMD Ryzen 5 5600X is a high-performance CPU designed for gamers and creators.",
    specifications: {
      cores: 6,
      threads: 12,
      baseClock: "3.7GHz",
      maxBoostClock: "4.6GHz",
      cache: "35MB",
      tdp: "65W"
    }
  },
  {
    category: "Processor",
    categoryId: "processors",
    id: "amd-ryzen-7-5800x",
    name: "AMD Ryzen 7 5800X",
    price: 449.0,
    image: ryzen5800X,
    previewImage: prevRyzen5800X,
    gallery: [ryzen5800XGallery1, ryzen5800XGallery2],
    description: "The AMD Ryzen 7 5800X provides exceptional gaming and content creation performance.",
    specifications: {
      cores: 8,
      threads: 16,
      baseClock: "3.8GHz",
      maxBoostClock: "4.7GHz",
      cache: "36MB",
      tdp: "105W"
    }
  },
  {
    category: "Processor",
    categoryId: "processors",
    id: "amd-ryzen-9-5900x",
    name: "AMD Ryzen 9 5900X",
    price: 549.0,
    image: ryzen5900X,
    previewImage: prevRyzen5900X,
    gallery: [ryzen5900X, ryzen5600],
    description: "The AMD Ryzen 9 5900X is a powerful CPU designed for intense gaming and productivity.",
    specifications: {
      cores: 12,
      threads: 24,
      baseClock: "3.7GHz",
      maxBoostClock: "4.8GHz",
      cache: "70MB",
      tdp: "105W"
    }
  },
  {
    category: "Processor",
    categoryId: "processors",
    id: "amd-ryzen-9-5950x",
    name: "AMD Ryzen 9 5950X",
    price: 799.0,
    image: ryzen5950X,
    previewImage: prevRyzen5950X,
    gallery: [prevRyzen5950X, ryzen5950X],
    description: "The AMD Ryzen 9 5950X offers the ultimate performance for gaming and productivity.",
    specifications: {
      cores: 16,
      threads: 32,
      baseClock: "3.4GHz",
      maxBoostClock: "4.9GHz",
      cache: "72MB",
      tdp: "105W"
    }
  },
];

export default processors;
