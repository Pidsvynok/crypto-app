import { Divider, Flex, Tag, Typography } from 'antd';
import { CoinInfo } from './CoinInfo';

export const CoinInfoModal = ({ coin }) => {
  return (
    <>
      <CoinInfo coin={coin} withSymbol />
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>Price: </Typography.Text>
        {coin.price.toFixed(2)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>Price in BTC: </Typography.Text>
        {coin.priceBtc.toFixed(5)}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>Market cap: </Typography.Text>
        {coin.marketCap}
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text>Contract adress: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
    </>
  );
};
