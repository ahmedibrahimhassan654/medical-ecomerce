import { DoorBack } from "@mui/icons-material";
import {
  Box,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/product/ProductCard";
import Product from "../models/Product";
import { Colors } from "../styles/colors";
import classes from "../utils/classes";
import db from "../utils/db";
const PAGE_SIZE = 10;

const Search = (props) => {
  const router = useRouter();
  const {
    query = "all",
    category = "all",
    brand = "all",
    price = "all",
    rating = "all",
    sort = "featured",
    size = "all",
    requiredPrescription = "all",
  } = router.query;
  const {
    products,
    countProducts,
    categories,
    allsizes,
    prescriptionstatus,
    brands,
    pages,
  } = props;
  const filterSearch = ({
    page,
    category,
    brand,
    size,
    prescription,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const path = router.pathname;
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (size) query.size = size;
    if (prescription) query.prescription = prescription;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  return (
    <Layout title="search">
      <Grid sx={{ mt: "5rem" }} container spacing={1}>
        <Grid md={3} borderRight="10px">
          <List
            sx={{
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ListItem>
              <Box width="100%" mt="20px" padding="10px">
                <Typography textAlign="initial" mb="5px" color={Colors.info}>
                  categories
                </Typography>
                <Select fullWidth value={category} onChange={categoryHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {categories &&
                    categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
          </List>
        </Grid>
        <Grid md={9}>
          <Grid container md={12} spacing={2} pt={2} pr={5} pl={5}>
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  await db.connect();
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || "";
  const brand = query.brand || "";
  const price = query.price || "";
  const rating = query.rating || "";
  const size = query.size || "";
  const requiredPrescription = query.requiredPrescription || "";
  const sort = query.sort || "";
  const searchQuery = query.query || "";
  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? {
          name: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};
  const categoryFilter = category && category !== "all" ? { category } : {};
  const brandFilter = brand && brand !== "all" ? { brand } : {};
  const sizeFilter = size && size !== "all" ? { size } : {};
  const requiredPrescriptionFilter =
    requiredPrescription && requiredPrescription !== "all"
      ? { requiredPrescription }
      : {};

  const ratingFilter =
    rating && rating !== "all"
      ? {
          rating: {
            $gte: Number(rating),
          },
        }
      : {};
  // 10-50
  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1]),
          },
        }
      : {};

  const order =
    sort === "featured"
      ? { featured: -1 }
      : sort === "lowest"
      ? { price: 1 }
      : sort === "highest"
      ? { price: -1 }
      : sort === "toprated"
      ? { rating: -1 }
      : sort === "newest"
      ? { createdAt: -1 }
      : { _id: -1 };
  const categories = await Product.find().distinct("category");
  console.log("categores ", categories);
  const brands = await Product.find().distinct("brand");
  const productDocs = await Product.find(
    {
      ...queryFilter,
      ...categoryFilter,
      ...priceFilter,
      ...brandFilter,
      ...ratingFilter,
    },
    "-reviews"
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();
  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...brandFilter,
    ...ratingFilter,
  });
  await db.disconnect();
  const products = productDocs.map(db.convertDocToObj);

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      brands,
    },
  };
}

export default Search;
