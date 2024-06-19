import { Flex, Typography } from 'antd';

export function CoinInfo({ coin, withSymbol }) {
  return (
    <Flex align="center">
      <img
        src={coin.icon}
        alt={coin.name}
        style={{ width: 40, marginRight: 20 }}
      />
      <Typography.Title level={2} style={{ marginBottom: 5 }}>
        {withSymbol && <span>({coin.symbol})</span>} {coin.name}
      </Typography.Title>
    </Flex>
  );
}
