import React from 'react';
import { ProfessionType } from '@/app/interfaces';
import { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';

type ScheduleDropdownProps = {
  profession: ProfessionType,
  setProfession: React.Dispatch<React.SetStateAction<ProfessionType>>
}

const ScheduleDropdown = ({ profession, setProfession } : ScheduleDropdownProps) => {
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    // TO DO: Fix type error here
    setProfession(e.key);
  };

  const items: MenuProps['items'] = [
    {
      label: ProfessionType.SOFTWARE_ENGINEER,
      key: ProfessionType.SOFTWARE_ENGINEER,
      icon: <UserOutlined />,
    },
    {
      label: ProfessionType.DATA_SCIENTIST,
      key: ProfessionType.DATA_SCIENTIST,
      icon: <UserOutlined />,
    },
    {
      label: ProfessionType.PRODUCT_MANAGER,
      key: ProfessionType.PRODUCT_MANAGER,
      icon: <UserOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="flex flex-col gap-1 w-44">
      <p className="text-sm font-redHatText text-accent/60 font-medium">Position</p>
      <Dropdown menu={menuProps}>
        <Button>
          <Space>
            {profession}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default ScheduleDropdown;
