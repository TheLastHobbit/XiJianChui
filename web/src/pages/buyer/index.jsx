import { Button, Space, Card, Form, Input } from 'antd';
import './index.css';
import CardLogo from '@/assets/card-logo.jpg';
import custom from '@/assets/custom.svg';

const Buyer = () => {
  const arr = [
    {id: 12, name: 'Super Wash', symbol: "SWH"},
    {id: 33, name: 'Music Car', symbol: "MSC"},
    {id: 66, name: 'Fresh Fruit', symbol: "FF"},
  ]
  return (
    <div className='card-box'>
      <div className='card-right'>
        <div className="label">My Balance</div>
        <div className="value">12000(wUSD)</div>
      </div>
      <div className='card-left'>
        {
          arr.map((item, index) => {
            return <div key={item.id} style={{marginRight: '32px'}}>
              <Card title={`My Card ${index + 1}`} style={{ width: 400 }} type="inner" >
                <div className="info-item">
                  <div className="label">Merchant ID</div>
                  <div className="value">{item.id}</div>
                </div>
                <div className="info-item">
                  <div className="label">Series Name</div>
                  <div className="value">{item.name}</div>
                </div>
                <div className="info-item">
                  <div className="label">Series Symbol</div>
                  <div className="value">{item.symbol}</div>
                </div>
                <img src={CardLogo} alt="CardLogo" className='logo-img' />
                <Space align="center">
                  <Button style={{width: "60px"}} type="primary">List</Button>
                  <Button danger>Delist</Button>
                </Space>
              </Card>
            </div>
          })
        }
      </div>
      <img className='custom' src={custom} />
    </div>
  )
}

export default Buyer