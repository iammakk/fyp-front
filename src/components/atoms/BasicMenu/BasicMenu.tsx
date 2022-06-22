import Button from "../Button";
import { useState } from "react";
import { Avatar, Menu, MenuItem } from "@mui/material";

export default function BasicMenu({ children, list, avatar, color }: any) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {avatar ? (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          sx={{
            color: "#ffffff",
            fontSize: "16px",
            textTransform: "capitalize",
            lineHeight: "1",
            verticalAlign: "unset",
            minWidth: "initial",
            padding: "0",
            "&:hover": {
              color: "#f5d312",
            },
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#fafafa",
              color: "#000000",
              fontSize: "16px",
            }}
          >
            {children}
          </Avatar>
        </Button>
      ) : (
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="text"
          sx={{
            color: color,
            fontSize: "14px",
            textTransform: "capitalize",
            lineHeight: "22px",
            textAlign: "left",
            verticalAlign: "unset",
            minWidth: "initial",
            padding: "0",
            "&:hover": {
              color: "#f5d312",
            },
          }}
        >
          {children}
        </Button>
      )}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "50%",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        {list.map((item: any, index: any) => (
          <MenuItem
            onClick={() => {
              item.onClick?.();
              handleClose();
            }}
            key={index}
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
