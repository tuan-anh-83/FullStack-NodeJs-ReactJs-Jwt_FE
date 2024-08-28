import React, { useState } from "react";
import {
  ShopOutlined, // Sửa đổi ở đây
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  const items = [
    {
      label: <Link to={"/"}>Home Page</Link>,
      key: "home",
      icon: <MailOutlined />,
    },

    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <MailOutlined />,
    },

    {
      label: "Welcom BrothersCBT",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          label: "Đăng nhập",
          key: "login",
        },
        {
          label: "Đăng xuất",
          key: "logout",
        },
      ],
    },
  ];

  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
