import msiB450TomahawkMax from "../images/products/msi-b450-tomahawk-max.png";
import asusTufGaming from "../images/products/asus-tuf-gaming.png";
import asusRogStrixB450f from "../images/products/asus-rog-strix-b450f-gaming.png";
import prevMsiB450TomahawkMax from "../images/products/msi-b450-tomahawk-max-preview.jpg";
import prevAsusTufGaming from "../images/products/asus-tuf-gaming-preview.jpg";
import prevAsusRogStrixB450f from "../images/products/asus-rog-strix-b450f-gaming-preview.jpg";
import msiB450TomahawkMaxGallery1 from "../images/products/msi-b450-tomahawk-max-gallery-1.png";
import msiB450TomahawkMaxGallery2 from "../images/products/msi-b450-tomahawk-max-gallery-2.png";
import msiB450TomahawkMaxGallery3 from "../images/products/msi-b450-tomahawk-max-gallery-3.png";
import msiB450TomahawkMaxGallery4 from "../images/products/msi-b450-tomahawk-max-gallery-4.png";
import msiB450TomahawkMaxGallery5 from "../images/products/msi-b450-tomahawk-max-gallery-5.png";
import asusTufGamingGallery1 from "../images/products/asus-tuf-gaming-gallery-1.png";
import asusTufGamingGallery2 from "../images/products/asus-tuf-gaming-gallery-2.png";
import asusTufGamingGallery3 from "../images/products/asus-tuf-gaming-gallery-3.png";
import asusRogStrixB450fGallery1 from "../images/products/asus-rog-strix-b450f-gaming-gallery-1.png";
import asusRogStrixB450fGallery2 from "../images/products/asus-rog-strix-b450f-gaming-gallery-2.png";
import asusRogStrixB450fGallery3 from "../images/products/asus-rog-strix-b450f-gaming-gallery-3.png";
import asusRogStrixB450fGallery4 from "../images/products/asus-rog-strix-b450f-gaming-gallery-4.png";
import asusRogStrixB450fGallery5 from "../images/products/asus-rog-strix-b450f-gaming-gallery-5.png";
import asusRogStrixB450fGallery6 from "../images/products/asus-rog-strix-b450f-gaming-gallery-6.png";

const motherboards = [
  {
    category: "Motherboard",
    categoryId: "motherboards",
    id: "msi-b450-tomahawk-max",
    name: "MSI B450 Tomahawk MAX PRO ULTRA",
    price: 114.99,
    image: msiB450TomahawkMax,
    previewImage: prevMsiB450TomahawkMax,
    gallery: [
      msiB450TomahawkMaxGallery1,
      msiB450TomahawkMaxGallery2,
      msiB450TomahawkMaxGallery3,
      msiB450TomahawkMaxGallery4,
      msiB450TomahawkMaxGallery5,
    ],
    description: "The MSI B450 Tomahawk MAX PRO ULTRA is designed for gamers who need reliable performance and excellent value.",
    specifications: {
      chipset: "AMD B450",
      memorySupport: "DDR4 4133 MHz",
      slots: "4",
      storage: "6 x SATA 6Gb/s, 1 x M.2",
      ports: "USB 3.2 Gen 1, HDMI, DVI-D"
    }
  },
  {
    category: "Motherboard",
    categoryId: "motherboards",
    id: "asus-tuf-gaming-x570-plus-wifi",
    name: "Asus TUF Gaming X570-Plus (Wi-Fi)",
    price: 189.99,
    image: asusTufGaming,
    previewImage: prevAsusTufGaming,
    gallery: [
      asusTufGamingGallery1,
      asusTufGamingGallery2,
      asusTufGamingGallery3,
    ],
    description: "The Asus TUF Gaming X570-Plus (Wi-Fi) is built for durability and performance, featuring advanced cooling and high-speed connectivity.",
    specifications: {
      chipset: "AMD X570",
      memorySupport: "DDR4 4400 MHz",
      slots: "4",
      storage: "8 x SATA 6Gb/s, 2 x M.2",
      ports: "USB 3.2 Gen 2, HDMI, DisplayPort, Wi-Fi"
    }
  },
  {
    category: "Motherboard",
    categoryId: "motherboards",
    id: "asus-rog-strix-b450-f-gaming",
    name: "Asus ROG STRIX B450-F GAMING",
    price: 112.93,
    image: asusRogStrixB450f,
    previewImage: prevAsusRogStrixB450f,
    gallery: [
      asusRogStrixB450fGallery1,
      asusRogStrixB450fGallery2,
      asusRogStrixB450fGallery3,
      asusRogStrixB450fGallery4,
      asusRogStrixB450fGallery5,
      asusRogStrixB450fGallery6,
    ],
    description: "The Asus ROG STRIX B450-F GAMING offers great performance and aesthetics for gamers.",
    specifications: {
      chipset: "AMD B450",
      memorySupport: "DDR4 3600 MHz",
      slots: "4",
      storage: "6 x SATA 6Gb/s, 2 x M.2",
      ports: "USB 3.1 Gen 2, HDMI, DisplayPort"
    }
  },
];

export default motherboards;
