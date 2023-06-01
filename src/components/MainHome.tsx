import { Content } from 'antd/es/layout/layout';
import { CSSProperties } from 'react';
import VideoPlayer from './VideoPlayer';
import { Button, Card, Col, Image, Row, Space, Tabs } from 'antd';
import { AppleOutlined, EyeFilled, HeartFilled, SettingFilled } from '@ant-design/icons';
import { Emissions, Programmes } from '../mock/MainHomeData';
import Meta from 'antd/es/card/Meta';
import { useNavigate } from 'react-router-dom';
import Player from './Player';
import HomeSection1 from './HomeSection1';
import MainHomeSection1 from './MainHomeSection1';
import MainHomeSection2 from './MainHomeSection2';
import MainHomeSection3 from './MainHomeSection3';

const mainStyle: CSSProperties = {
  // padding: '30px 0 20px',
  display: 'grid',
  placeItems: 'center',
  marginTop:0
};

const MainHome = () => {
  const sources = {
    sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    test: 'http://media.w3.org/2010/05/video/movie_300.webm',
  };
  //   useE
  return (
    <Content style={mainStyle}>
      {/* <VideoPlayer sources={[sources.bunnyTrailer]} /> */}


      <HomeSection1 />
      {/* <Player src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" /> */}

      {/* <Row>
        <Col span={24}>
          <Tabs
            style={{
              width: '80vw',
              // border: '1px solid black',
              overflow: 'hidden',
              padding: 10,
            }}
            defaultActiveKey="1"
            items={[
              {
                label: (
                  <span>
                    <AppleOutlined />
                    Nos emissions
                  </span>
                ),
                key: '1',
                children: <Tab1 />,
              },
              {
                label: (
                  <span>
                    <AppleOutlined />
                    Programmes
                  </span>
                ),
                key: '2',
                children: <Tab2 />,
              },
              {
                label: (
                  <span>
                    <AppleOutlined />
                    Bouquets
                  </span>
                ),
                key: '3',
                children: <Tab3 />,
              },
            ]}
          />
        </Col>
      </Row> */}


      <MainHomeSection1 />
      <MainHomeSection2 />
      <MainHomeSection3 />

    </Content>
  );
};

const TabsContainerStyle: CSSProperties = {
  width: '100%',
  overflow: 'hidden',
  overflowX: 'scroll',
  padding : 15,
};

const Tab1 = () => {
  const navigate = useNavigate()
  return (
    <Space style={TabsContainerStyle}>
      {Emissions.map((el, i) => {
        return <Button onClick={e =>{
          navigate(`emissions/${el.title.replaceAll('/','-')}`)
        }} key={i}>{el.title}</Button>;
      })}
    </Space>
  );
};

const Tab2 = () => {
  return (
    <Space style={TabsContainerStyle} >
      {Programmes.map((el, i) => {
        return (
          <Card
            key={i}
            hoverable
            style={{ width: 200}}
            cover={<Image src={el.image} />}
            actions={[
              <EyeFilled />,
              <HeartFilled  style={{color : 'red'}}/>
            ]}
          >
            {el.horaires.map((ell, j) => {
              return <Meta key={j} title={ell.title} description={ell.hours} />;
            })}
          </Card>
        );
      })}
    </Space>
  );
};

const Tab3 = ()=>{
  const bouquets = Array(10).fill('assets/images/tv-bouquet.jpg')
  return <Space style={TabsContainerStyle}>
    {bouquets.map((el,i)=><Image key={i} src={el} height={140} width={140} style={{objectFit : 'cover'}}/>) }
  </Space>
}

export default MainHome;
