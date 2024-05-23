import rtx3070 from "../images/products/rtx-3070.png";
import rtx3080 from "../images/products/rtx-3080.png";
import rtx3090 from "../images/products/rtx-3090.png";
import prevRtx3070 from "../images/products/rtx-3070-preview.jpg";
import prevRtx3080 from "../images/products/rtx-3080-preview.jpg";
import prevRtx3090 from "../images/products/rtx-3090-preview.jpg";
import rtx3070Gallery1 from "../images/products/rtx-3070-gallery-1.png";
import rtx3080Gallery1 from "../images/products/rtx-3080-gallery-1.png";
import rtx3090Gallery1 from "../images/products/rtx-3090-gallery-1.png";

const videoCards = [
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3070",
    name: "Nvidia GeForce RTX 3070",
    price: 499.99,
    image: rtx3070,
    previewImage: prevRtx3070,
    gallery: [rtx3070Gallery1],
    description: "The Nvidia GeForce RTX 3070 delivers the ultimate performance for gamers and creators.",
    specifications: {
      cudaCores: 5888,
      boostClock: "1.73 GHz",
      memory: "8 GB GDDR6",
      memoryBandwidth: "448 GB/s",
      tdp: "220W"
    }
  },
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3080",
    name: "Nvidia GeForce RTX 3080",
    price: 699.99,
    image: rtx3080,
    previewImage: prevRtx3080,
    gallery: [rtx3080Gallery1],
    description: "The Nvidia GeForce RTX 3080 sets the bar for gaming performance and high-quality graphics.",
    specifications: {
      cudaCores: 8704,
      boostClock: "1.71 GHz",
      memory: "10 GB GDDR6X",
      memoryBandwidth: "760 GB/s",
      tdp: "320W"
    }
  },
  {
    category: "Video Card",
    categoryId: "video-cards",
    id: "nvidia-geforce-rtx-3090",
    name: "Nvidia GeForce RTX 3090",
    price: 1499.99,
    image: rtx3090,
    previewImage: prevRtx3090,
    gallery: [rtx3090Gallery1],
    description: "The Nvidia GeForce RTX 3090 is the ultimate GPU for gamers and creators, delivering unparalleled performance.",
    specifications: {
      cudaCores: 10496,
      boostClock: "1.70 GHz",
      memory: "24 GB GDDR6X",
      memoryBandwidth: "936.2 GB/s",
      tdp: "350W"
    }
  },
];

export default videoCards;
