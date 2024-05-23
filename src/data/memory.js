import kingstonFuryDDR3 from "../images/products/kingston-fury-ddr3.png";
import kingstonFuryDDR4 from "../images/products/kingston-fury-ddr4-gallery-3.png";
import kingstonPredatorDDR4 from "../images/products/kingston-predator-ddr4.png";
import kingstonPredatorDDR4rgb from "../images/products/kingston-predator-ddr4-rgb.png";
import prevKingstonFuryDDR4 from "../images/products/kingston-fury-ddr4-preview.jpg";
import prevKingstonFuryDDR4rgb from "../images/products/kingston-fury-ddr4-rgb-preview.jpg";
import prevKingstonPredatorDDR4 from "../images/products/kingston-predator-ddr4-preview.jpg";
import prevKingstonPredatorDDR4rgb from "../images/products/kingston-predator-ddr4-rgb-preview.jpg";
import kingstonFuryDDR3Gallery1 from "../images/products/kingston-fury-ddr3-gallery-1.png";
import kingstonFuryDDR3Gallery2 from "../images/products/kingston-fury-ddr3-gallery-2.png";
import kingstonFuryDDR4Gallery1 from "../images/products/kingston-fury-ddr4-gallery-1.png";
import kingstonFuryDDR4Gallery2 from "../images/products/kingston-fury-ddr4-gallery-2.png";
import kingstonFuryDDR4RGBGallery1 from "../images/products/kingston-fury-ddr4-rgb-gallery-1.png";
import kingstonFuryDDR4RGBGallery2 from "../images/products/kingston-fury-ddr4-rgb-gallery-2.png";
import kingstonPredatorDDR4RGBGallery1 from "../images/products/kingston-predator-ddr4-rgb-gallery-1.png";
import kingstonPredatorDDR4RGBGallery2 from "../images/products/kingston-predator-ddr4-rgb-gallery-2.png";

const memory = [
  {
    category: "Memory",
    categoryId: "memory",
    id: "kingston-hyperx-fury-ddr3",
    name: "Kingston FURY DDR3",
    price: 47.53,
    image: kingstonFuryDDR3,
    previewImage: kingstonFuryDDR3Gallery2,
    gallery: [
      kingstonFuryDDR3Gallery1,
      kingstonFuryDDR3Gallery2,
    ],
    description: "The Kingston HyperX FURY DDR3 provides reliable performance for your PC.",
    specifications: {
      memoryType: "DDR3",
      capacity: "8GB",
      speed: "1600MHz",
      voltage: "1.5V",
      dimensions: "133.35mm x 34.04mm"
    }
  },
  {
    category: "Memory",
    categoryId: "memory",
    id: "kingston-hyperx-fury-ddr4",
    name: "Kingston FURY DDR4",
    price: 36.99,
    image: kingstonFuryDDR4,
    previewImage: prevKingstonFuryDDR4,
    gallery: [
      kingstonFuryDDR4Gallery1,
      kingstonFuryDDR4Gallery2,
    ],
    description: "The Kingston HyperX FURY DDR4 offers high speed and low latency.",
    specifications: {
      memoryType: "DDR4",
      capacity: "8GB",
      speed: "2400MHz",
      voltage: "1.2V",
      dimensions: "133.35mm x 34.04mm"
    }
  },
  {
    category: "Memory",
    categoryId: "memory",
    id: "kingston-hyperx-fury-ddr4-rgb",
    name: "Kingston FURY DDR4 RGB",
    price: 62.95,
    image: kingstonFuryDDR4RGBGallery2,
    previewImage: prevKingstonFuryDDR4rgb,
    gallery: [kingstonFuryDDR4RGBGallery1, kingstonFuryDDR4RGBGallery2],
    description: "The Kingston HyperX FURY DDR4 RGB enhances your build with stunning RGB lighting.",
    specifications: {
      memoryType: "DDR4",
      capacity: "16GB",
      speed: "3200MHz",
      voltage: "1.35V",
      dimensions: "133.35mm x 41.24mm"
    }
  },
  {
    category: "Memory",
    categoryId: "memory",
    id: "kingston-hyperx-predator-ddr4",
    name: "Kingston Predator DDR4",
    price: 44.36,
    image: kingstonPredatorDDR4,
    previewImage: prevKingstonPredatorDDR4,
    gallery: [kingstonPredatorDDR4, kingstonPredatorDDR4RGBGallery2],
    description: "The Kingston HyperX Predator DDR4 delivers extreme speed and low latency.",
    specifications: {
      memoryType: "DDR4",
      capacity: "8GB",
      speed: "2933MHz",
      voltage: "1.35V",
      dimensions: "133.35mm x 41.24mm"
    }
  },
  {
    category: "Memory",
    categoryId: "memory",
    id: "kingston-hyperx-predator-ddr4-rgb",
    name: "Kingston Predator DDR4 RGB",
    price: 53.99,
    image: kingstonPredatorDDR4rgb,
    previewImage: prevKingstonPredatorDDR4rgb,
    gallery: [
      kingstonPredatorDDR4rgb,
      kingstonPredatorDDR4RGBGallery1,
      kingstonPredatorDDR4RGBGallery2,
    ],
    description: "The Kingston HyperX Predator DDR4 RGB combines high performance and stunning RGB lighting.",
    specifications: {
      memoryType: "DDR4",
      capacity: "16GB",
      speed: "3200MHz",
      voltage: "1.35V",
      dimensions: "133.35mm x 41.24mm"
    }
  },
];

export default memory;
