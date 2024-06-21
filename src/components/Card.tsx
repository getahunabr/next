import { Children } from "react";

const card = ({ Children }: { children: React.ReactNode }) => {
  const cardStyle = {
    backgroundColor: "lightblue",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
    margin: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return <div style={cardStyle}>{Children}</div>;
};

export default card;
