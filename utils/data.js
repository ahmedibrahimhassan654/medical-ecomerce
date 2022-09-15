// import bcrypt from "bcryptjs";
const data = {
  //   users: [
  //     {
  //       name: "John",
  //       email: "admin@example.com",
  //       password: bcrypt.hashSync("123456"),
  //       isAdmin: true,
  //     },
  //     {
  //       name: "Jane",
  //       email: "user@example.com",
  //       password: bcrypt.hashSync("123456"),
  //       isAdmin: false,
  //     },
  //   ],
  // products: [
  //   {
  //     name: "midical1",
  //     slug: "midical-1",
  //     category: "heart ",
  //     image: "/images/prod1.jpg",
  //     isFeatured: true,
  //     featuredImage: "/images/prod1.jpg",
  //     price: 70,
  //     brand: "Nike",
  //     rating: 4.5,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "molestiae quas vel ",
  //   },
  //   {
  //     name: "midical2",
  //     slug: "midical-2",
  //     category: "Shirts",
  //     image: "/images/prod2.jpg",
  //     isFeatured: true,
  //     featuredImage: "/images/prod2.jpg",
  //     price: 80,
  //     brand: "Adidas",
  //     rating: 4.2,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "A popular shirt",
  //   },
  //   {
  //     name: "Slim Shirt",
  //     slug: "slim-shirt",
  //     category: "Shirts",
  //     image: "/images/prod3.jpg",
  //     price: 90,
  //     brand: "Raymond",
  //     rating: 4.5,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "A popular shirt",
  //   },
  //   {
  //     name: "Golf Pants",
  //     slug: "golf-pants",
  //     category: "Pants",
  //     image: "/images/prod4.jpg",
  //     price: 90,
  //     brand: "Oliver",
  //     rating: 4.5,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "Smart looking pants",
  //   },
  //   {
  //     name: "Fit Pants",
  //     slug: "fit-pants",
  //     category: "Pants",
  //     image: "/images/prod5.jpg",
  //     price: 95,
  //     brand: "Zara",
  //     rating: 4.5,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "A popular pants",
  //   },
  //   {
  //     name: "Classic Pants",
  //     slug: "classic-pants",
  //     category: "Pants",
  //     image: "/images/prod3.jpg",
  //     price: 75,
  //     brand: "Casely",
  //     rating: 4.5,
  //     numReviews: 10,
  //     countInStock: 20,
  //     description: "A popular pants",
  //   },
  // ],
  newProducts: [
    {
      name: "Acne (TF)",
      slug: "Acne-(TF)",
      description:
        "Tretinoin 0.025% Foam Tretinoin foam can be customized (0.05%, 0.1%) with same price",
      category: "Acne",
      image: "/images/prod1.jpg",
      brand: "brand 1",
      size: [
        {
          unit: "ml",
          price: "10",
          count: "30",
          numberonStock: 5,
        },
        {
          unit: "ml",
          price: "20",
          count: "50",
          numberonStock: 5,
        },
      ],
      requiredPrescription: false,
    },
    {
      name: "Acne",
      slug: "acne",
      description: "Clindamycin 1% Tretinoin 0.025% Cream",
      category: "Acne",
      image: "/images/prod2.jpg",
      brand: "brand 2",
      size: [
        {
          unit: "gm",
          price: "10",
          count: "30",
          numberonStock: 5,
        },
        {
          unit: "ml",
          price: "20",
          count: "65",
          numberonStock: 5,
        },
      ],
      requiredPrescription: false,
    },
    {
      name: "Acne (S)",
      slug: "Acne-(S)",
      description: "Sodium Sulfacetamide USP 12% Sulfur 6% Cream",
      category: "Acne",
      image: "/images/prod3.jpg",
      brand: "brand 3",
      size: [
        {
          unit: "gm",
          price: "10",
          count: "30",
          numberonStock: 5,
        },
        {
          unit: "gm",
          price: "20",
          count: "65",
          numberonStock: 15,
        },
      ],
      requiredPrescription: true,
    },
    {
      name: "Acne (TD)",
      slug: "Acne-(TD)",
      description: "Tretinoin 0.025%  Vit C 2.5%  Hyaluronic Acid 0.3% ",
      category: "Acne",
      image: "/images/prod3.jpg",
      brand: "brand 3",
      size: [
        {
          unit: "gm",
          price: "10",
          count: "25",
          numberonStock: 5,
        },
        {
          unit: "gm",
          price: "20",
          count: "20",
          numberonStock: 15,
        },
      ],
      requiredPrescription: true,
    },
    {
      name: "Actinic Keratosis",
      slug: "Actinic-Keratosis",
      description: "Fluorouracil 5.75% Cream",
      category: "Actinic Keratosis ",
      image: "/images/prod3.jpg",
      brand: "brand 5",
      size: [
        {
          unit: "gm",
          price: "55",
          count: "40",
          numberonStock: 5,
        },
        {
          unit: "gm",
          price: "65",
          count: "60",
          numberonStock: 15,
        },
      ],
      requiredPrescription: true,
    },
  ],
};
export default data;
