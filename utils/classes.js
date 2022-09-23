const classes = {
  visible: {
    display: "initial",
  },
  hidden: {
    display: "none",
  },
  // header
  appbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 1,
    },
  },
  main: {
    minHeight: "100%",
  },
  brand: { fontWeight: "bold", fontSize: "1.5rem", flexGrow: 1 },
  footer: {
    textAlign: "center",
    marginTop: 6,
    minHeight: 100,
  },

  // search

  searchForm: {
    border: "1px solid #ffffff",
    backgroundColor: "#ffffff",
    borderRadius: 2,
  },
  searchInput: {
    paddingLeft: 1,
    color: "#000000",
    "& ::placeholder": {
      color: "#606060",
    },
  },
  searchButton: {
    backgroundColor: "#f8c040",
    padding: 1,
    borderRadius: "0 5px 5px 0",
    "& span": {
      color: "#000000",
    },
  },
  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
};

export default classes;
