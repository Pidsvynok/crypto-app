import { Layout, Select, Space, Button, Modal, Drawer } from 'antd';
import { useCrypto } from '../context/crypto-context';
import { useState, useEffect } from 'react';
import { CoinInfoModal } from './CoinInfoModel';
import { AddAssetForm } from './AddAssetForm';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#0E1023',
};

export const AppHeader = () => {
  const [coin, setCoin] = useState(null);
  const [select, setSelect] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const { crypto } = useCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev);
      }
    };
    document.addEventListener('keypress', keypress);
    return () => document.removeEventListener('keypress', keypress);
  }, []);

  const handleSelect = (value) => {
    setIsModalOpen(true);
    setCoin(crypto.find((c) => c.id === value));
  };

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        open={select}
        value="press / to open"
        onSelect={handleSelect}
        onClick={() => setSelect((prev) => !prev)}
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{' '}
            {option.data.label}
          </Space>
        )}
      />

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <CoinInfoModal coin={coin} />
      </Modal>

      <Button onClick={() => setDrawer(true)} type="primary">
        Add Asset
      </Button>

      <Drawer
        destroyOnClose
        title="Add Asset"
        width={600}
        onClose={() => setDrawer(false)}
        open={drawer}
      >
        <AddAssetForm onClose={() => setDrawer(false)} />
      </Drawer>
    </Layout.Header>
  );
};
