import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function App() {

  const[coins,setCoins]=useState([])

  useEffect(()=>{

    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false")
    .then(res=>{
      setCoins(res.data)
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])

  return (
    <div className="main">
      <div className="sidenavbar">
        <div className='icon1'><HomeIcon/></div>
        <div className='icon2'><CalendarViewDayIcon/></div>
        <div className='icon2'><SettingsIcon/></div>
        <div className='icon2'><HelpIcon/></div>
      </div>
      <div>
      <div className="Navbar">
        <div className="logo">
          <img className="img1" src="https://scalebranding.com/wp-content/uploads/2021/04/White-Angry-Lion-Logo-1024x1024.jpg" alt=""/>
        </div>
        <div className="sbr">
          Sabertooth
          </div>
        <div className="username">
          <div className="username2"><PersonIcon/></div>
          <div className="username1">User Name</div>
          <div className="username3"><KeyboardArrowDownIcon/></div>
          </div>
      </div>
      <div className='coinsearch1'>
        <div className='coinsearch'>
          {coins && coins.map((item)=>(
              <div className='datacome'>
                <div className='box'>
                <div><img className='img2' src={item.image} alt="" /></div>
                <p className='name'>{item.name}</p>
                <p className='ignore'>{item.total_volume}</p>
                 <div className='bitcoins'>
                  <p className='symbol'>{item.market_cap_change_percentage_24h}{item.symbol}</p>
                <p className='usd'>{item.price_change_percentage_24h}USD</p>
                </div>
                </div>
              </div>
             
          ))}
           </div>
          <div className='graph'>
            <p className='statics'>Statistic</p>
            <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <AreaChart
          width={500}
          height={300}
          data={coins}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis/>
          <YAxis />
          <Tooltip />
          <Area dataKey="price_change_percentage_24h" stackId="3" stroke="#8884d8" fill="#8884d8" />
          {/* <Area type="monotone" dataKey="price_change_percentage_24h" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
          <Area  dataKey="market_cap_change_percentage_24h" stackId="3" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
           </div>
          <div className='balnce'>
           <div className='last'>
              <p>Total Balance</p>
              <p>रु 16365</p>
            </div>
            <div className='lastone'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={coins}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis />
          <Bar dataKey="total_volume" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

            </div>
           </div>
           </div>
           
      </div>
    </div>
  );
}

export default App;
