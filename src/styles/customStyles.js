import { createStyles } from "@material-ui/core";
import { theme } from "./theme";

export const styles = () =>
  createStyles({
    main: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: theme.palette.newLinen,
      overflow: "hidden",
    },
    navBar: {
      display: "flex",
      flexDirection: "row-reverse",
      padding: "10px",
    },
    icons: {
      display: "flex",
      width: "10vh",
      justifyContent: "space-between",
    },
    iconHover: {
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&:hover": {
        transform: "translate(0px, -7px)",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
    link: {
      textDecoration: "none",
      padding: "0px 5px 0px 5px",
      margin: "0px 3px 0px 3px",
      borderRadius: "2px",
      color: theme.palette.black,
      backgroundColor: theme.palette.champangePink,
      "&:hover": {
        boxShadow: theme.linkHover,
        backgroundColor: theme.palette.hardPink,
        transform: "translate(0px, -7px)",
        transition: "all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
    },
    home: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "wrap",
      minHeight: "100vh",
    },
    project: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    homeDown: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingBottom: "50px",
    },
    grid: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      width: "350px",
      height: "300px",
      margin: "20px",
      boxShadow: theme.cardShadow,
      borderRadius: "15px",
      backgroundColor: theme.palette.newLinen,
      fontSize: theme.spacing[0],
      transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&:hover": {
        boxShadow: theme.cardHover,
        transform: "translate(0px, -7px)",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      "& .cardContent": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
        overflow: "hidden",
      },
      "& .cardHidden": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
      },
      "&:hover .cardContent": {
        transform: "translate(0px, -1px)",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      "&:hover .cardHidden": {
        transform: "translate(0px, -1px)",
        transition: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
        visibility: "visible",
        height: "auto",
      },
    },
  });
