import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const Dragdown = ({ labels, title, handler }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const styles = {
    container: {
      margin: "auto 1rem",
      borderRadius: "25px",
      border: "2px solid",
      padding: "8px",
    },
    button: {
      padding: "2rem",
    },
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (name) => {
    setAnchorEl(null);
    if (name === "Duration") {
      handler(0);
    } else {
      handler(name);
    }
  };

  return (
    <div style={styles.container}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <div style={{ marginRight: "1rem" }}>{title ? title : "Duration"}</div>

        {/* chevron icon */}
        <svg
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.51349 1.74997L8.2992 8.53568L15.0849 1.74997"
            stroke="#A0A4A8"
            stroke-width="2.03571"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={styles.button}
      >
        <MenuItem onClick={() => handleMenuClick(labels.title)}>
          {labels.title}
        </MenuItem>
        {labels.array.map((name) => (
          <MenuItem onClick={() => handleMenuClick(name)}>{name}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dragdown;
