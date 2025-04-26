import plasticsheets from "../assets/plasticsheets.jpg";
import fruits from "../assets/products/fruits.jpeg";
import vegetables from "../assets/products/vegetables.webp";
import powders from "../assets/products/powders.jpeg";
import tea from "../assets/products/tea.jpg";
import cotton from "../assets/products/cotton.webp";
import garlic from "../assets/products/garlic.avif";
import banana from "../assets/products/banana.webp";
import pomegranate from "../assets/products/pomegranate.jpeg";
import pineapple from "../assets/products/pineapple.webp";
import mangoes from "../assets/products/mangoes.jpg";
import jackfruit from "../assets/products/jackfruit.jpg";
import onions from "../assets/products/onions.jpg";
import garlicPowder from "../assets/products/garlic-powder.webp";
import bananaPowder from "../assets/products/banana-powder.jpg";
import guarGumPowder from "../assets/products/guargumpowder.webp";
import jackfruitPowder from "../assets/products/jackfruitpowder.png";
import tealeaf from "../assets/products/tealeaf.avif";
import rawCotton from "../assets/products/cotton.jpeg";
import cottonWaste from "../assets/products/cottonwaste.jpg";
import rawPlastic from "../assets/products/plasticraw.jpg";
import opticalFiber from "../assets/products/fiberoptics.jpg";

//pdf files
import bananaPdf from "../assets/products/banana.pdf";
import pomegranatesPdf from "../assets/products/promograntes.pdf";
import pineapplePdf from "../assets/products/pineapple.pdf";
import mangoesPdf from "../assets/products/mangoes.pdf";
import jackfruitPdf from "../assets/products/jackfruit.pdf";
import garlicPdf from "../assets/products/garlic.pdf";
import onionsPdf from "../assets/products/onions.pdf";
import garlicPowderPdf from "../assets/products/garlicpowder.pdf";
import bananaPowderPdf from "../assets/products/bananapowder.pdf";
import guarGumPowderPdf from "../assets/products/gargumpowder.pdf";
import jackfruitPowderPdf from "../assets/products/jackfruitpowder.pdf";
import teaPdf from "../assets/products/tea.pdf";
import rawCottonPdf from "../assets/products/rawcotton.pdf";
import cottonWastePdf from "../assets/products/cottonwaste.pdf";
import plasticFilmPdf from "../assets/products/plasticfilm.pdf";
import rawPlasticPdf from "../assets/products/rawplastic.pdf";
import opticalFiberPdf from "../assets/products/opticalfibre.pdf";


const categories = [
  {
    imageUrl: fruits,
    title: "Fruits",
    description: "Banana, Pomegranates, Pineapple, Mango, Jackfruit",
    link: "/fruits",
    products: [
      {
        name: "Banana",
        description: "Fresh and ripe bananas.",
        imageUrl: banana,
        downloadUrl: bananaPdf,
      },
      {
        name: "Pomegranates",
        description: "Fresh pomegranates rich in nutrients.",
        imageUrl: pomegranate,
        downloadUrl: pomegranatesPdf,
      },
      {
        name: "Pineapple",
        description: "Sweet and tangy pineapples.",
        imageUrl: pineapple,
        downloadUrl: pineapplePdf,
      },
      {
        name: "Mango",
        description: "Sweet mangoes from the tropical region.",
        imageUrl: mangoes,
        downloadUrl: mangoesPdf,
      },
      {
        name: "Jackfruit",
        description: "Large jackfruit with a sweet flavor.",
        imageUrl: jackfruit,
        downloadUrl: jackfruitPdf,
      },
    ],
  },
  {
    imageUrl: vegetables,
    title: "Vegetables",
    description: "Fresh Garlic, Onion",
    link: "/vegetables",
    products: [
      {
        name: "Garlic",
        description: "Fresh organic garlic cloves.",
        imageUrl: garlic,
        downloadUrl: garlicPdf,
      },
      {
        name: "Onion",
        description: "Fresh red onions for all your recipes.",
        imageUrl: onions,
        downloadUrl: onionsPdf,
      },
    ],
  },
  {
    imageUrl: powders,
    title: "Powder Form",
    description: "Garlic powder, Banana powder, Guar gum powder, Jackfruit powder",
    link: "/powder-form",
    products: [
      {
        name: "Garlic Powder",
        description: "100% pure garlic powder.",
        imageUrl: garlicPowder,
        downloadUrl: garlicPowderPdf,
      },
      {
        name: "Banana Powder",
        description: "Natural banana powder for smoothies.",
        imageUrl: bananaPowder,
        downloadUrl: bananaPowderPdf,
      },
      {
        name: "Guar Gum Powder",
        description: "High-quality guar gum powder for culinary use.",
        imageUrl: guarGumPowder,
        downloadUrl: guarGumPowderPdf,
      },
      {
        name: "Jackfruit Powder",
        description: "Organic jackfruit powder for various recipes.",
        imageUrl: jackfruitPowder,
        downloadUrl: jackfruitPowderPdf,
      },
    ],
  },
  {
    imageUrl: tea,
    title: "Tea",
    description: "High-quality tea from trusted suppliers",
    link: "/tea",
    products: [
      {
        name: "Green Tea",
        description: "Fresh green tea leaves from the best sources.",
        imageUrl: tealeaf,
        downloadUrl: teaPdf,
      },
      {
        name: "Black Tea",
        description: "A rich and bold black tea for every occasion.",
        imageUrl: tealeaf,
        downloadUrl: teaPdf,
      },
    ],
  },
  {
    imageUrl: cotton,
    title: "Raw Cotton & Cotton Waste",
    description: "Top-grade cotton for various uses",
    link: "/cotton",
    products: [
      {
        name: "Raw Cotton",
        description: "High-quality raw cotton for textile production.",
        imageUrl: rawCotton,
        downloadUrl: rawCottonPdf,
      },
      {
        name: "Cotton Waste",
        description: "Cotton waste for recycling and other uses.",
        imageUrl: cottonWaste,
        downloadUrl: cottonWastePdf,
      },
    ],
  },
  {
    imageUrl: plasticsheets,
    title: "Plastic Products",
    description: "Plastic films, raw materials, optical fibers",
    link: "/plastic-products",
    products: [
      {
        name: "Plastic Films",
        description: "High-quality plastic films for various industries.",
        imageUrl: plasticsheets,
        downloadUrl: plasticFilmPdf,
      },
      {
        name: "Raw Plastic Materials",
        description: "Raw plastic materials for manufacturing.",
        imageUrl: rawPlastic,
        downloadUrl: rawPlasticPdf,
      },
      {
        name: "Optical Fibers",
        description: "High-performance optical fibers for telecommunications.",
        imageUrl: opticalFiber,
        downloadUrl: opticalFiberPdf,
      },
    ],
  },
];

export default categories;
