import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';

import style from './Loader.module.scss';

export const Loader = () => (
  <div className={style.spin_container}>
    <Space>
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Space>
  </div>
);
