'use client';

import '../globals.css';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, MenuProps, Modal } from 'antd';
const { Footer, Sider } = Layout;
import {
  ClockCircleOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import axios, { AxiosError } from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '../interfaces';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export default function RegularLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>({
    email: '',
    username: '',
    _v: 0,
    _id: '',
  });
  const [selectedMenuItem, setSelectedMenuItem] = useState('');
  const [movingToo, setMovingToo] = useState<string | null>('');
  const router = useRouter();
  const path = usePathname();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (path: string) => {
    setIsModalOpen(true);
    setMovingToo(path);
  };

  const handleOk = () => {
    if (movingToo) {
      setIsModalOpen(false);
      router.push(movingToo);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLogout = async () => {
    await axios
      .get('http://localhost:4000/auth/logout')
      .then((res) => router.push('/welcome'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:4000/auth/login/success',
          {
            withCredentials: true,
          },
        );
        setUser(res.data.user);
        if (!res.data.user) {
          router.push('/welcome');
        }
      } catch (error: AxiosError | any) {
        console.log(error);
        if(error){
          router.push('/welcome');
        }
      }
    };

    getUser();
  }, []);

  const items: MenuProps['items'] = [
    getItem('History', 'history', <ClockCircleOutlined />),
    getItem('Profile', 'profile', <UserOutlined />, [
      getItem(user.email, 'user email'),
      getItem('Report a bug', 'report', <ExclamationCircleOutlined />),
      getItem('Logout', 'logout', <LogoutOutlined />),
    ]),
  ];

  return (
    <>
      <div>
        <Layout className="max-h-screen overflow-hidden" hasSider>
          {/* TO DO: Have Sider animation where when it loads up have it slide up from the side */}
          <Sider
            className="SideBarNav	h-screen fixed left-0 top-0 bottom-0"
            breakpoint="sm"
            collapsedWidth={0}
          >
            <div
              className="flex gap-2 justify-center items-center w-11/12 mx-auto rounded-md mt-5 mb-5 cursor-pointer"
              onClick={() => {
                setSelectedMenuItem('');
                if (path.includes('interview')) {
                  showModal('/start/dashboard');
                } else {
                  router.push('/start/dashboard');
                }
              }}
            >
              <p className="text-xl font-bold text-white">Interviewify</p>
            </div>
            <Menu
              className="SideBarMenu hover:text-white"
              mode="inline"
              items={items}
              onClick={(info) => {
                if (info.key === 'logout') {
                  handleLogout();
                } else if (info.key === 'history') {
                  setSelectedMenuItem(info.key);
                  if (path.includes('interview')) {
                    showModal('/start/history');
                  } else {
                    router.push('/start/history');
                  }
                }
              }}
              selectedKeys={[selectedMenuItem]}
            />
          </Sider>
          <Layout
            className="site-layout min-h-screen"
            style={{ background: 'white' }}
          >
            <div className="h-full bg-[#1677ff] flex justify-center items-center">
              <div className='h-[95%] w-[95%] bg-white rounded-xl drop-shadow'>
                {children}
              </div>
            </div>
          </Layout>
        </Layout>
      </div>
      <Modal
        title="Are you sure you want to end your interview?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText={'Go Back'}
        okType="default"
      >
        <p>Your progress will not be saved!</p>
      </Modal>
      </>
  );
}
