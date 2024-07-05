import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';

import style from './Loader.module.scss';

export const Loader = () => (
  <Space className={style.spin_container}>
    <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
  </Space>
);
