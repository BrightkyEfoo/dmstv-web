import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  VideoCameraOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Col, Drawer, Image, Menu, MenuProps, Row } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React, { CSSProperties, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const headerStyle: CSSProperties = {
  color: '#181715',
  backgroundColor: 'white',
  height: 'fit-content',
};

const firstColStyle: CSSProperties = {
  minWidth: 52,
};

const lastColStyleMobile: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const lastColStyle: CSSProperties = {
  // display: 'flex',
  // alignItems : 'center',
  justifyContent: 'flex-end',
};

const NavBar = () => {
  const navigate = useNavigate();

  const MenuItems: MenuProps['items'] = [
    {
      label: 'Acceuil',
      key: 'home',
      onClick: () => {
        navigate('/');
      },
      icon: <HomeOutlined />,
    },
    {
      label: '',
      key: 'stream',
      onClick: () => {
        // navigate('/streaming');
      },
      icon: <StreamButton />,
    },
    {
      label: 'A Propos',
      key: 'about',
      onClick: () => {
        navigate('/about');
      },
      icon: <VideoCameraOutlined />,
    },
    {
      label: 'Contact',
      key: 'contact',
      icon: <VideoCameraOutlined />,
    },
    {
      label: '',
      key: 'donate',
      icon: <DonateButton />,
    },
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 662px)' });
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <Header style={headerStyle}>
      <Row justify={'space-between'} style={{ height: 'fit-content' }}>
        <Col span={1} style={firstColStyle}>
          <Image
            src="http://localhost:3000/assets/images/logo-tv.jpg"
            preview={false}
          />
        </Col>
        <Col flex="auto" style={isMobile ? lastColStyleMobile : lastColStyle}>
          {isMobile ? (
            <>
              <Button onClick={() => setIsMenuVisible(true)}>
                <MenuOutlined />
              </Button>
              <Drawer
                open={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
              >
                <Menu mode={'vertical'} items={MenuItems} />
              </Drawer>
            </>
          ) : (
            <Menu mode={'horizontal'} items={MenuItems} style={lastColStyle} />
          )}
        </Col>
      </Row>
    </Header>
  );
};

export const DonateButton = () => {
  return <button className="donate-button-1">Faire un don</button>;
};

export const StreamButton = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
  return (
    <div className="stream-button-1">
      <div className='stream-button-1-sub-container' onClick={()=>{
        setIsMenuDisplayed(!isMenuDisplayed)
      }}>
        <YoutubeOutlined />
        <span>Stream</span>
      </div>
      {isMenuDisplayed && (
        <div className='stream-button-1-option-container'>
          <button>Live</button>
          <button>VOD</button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
