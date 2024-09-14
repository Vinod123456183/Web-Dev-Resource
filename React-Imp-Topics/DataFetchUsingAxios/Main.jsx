import React, { useEffect, useState } from 'react'
import TabsComponent from '../components/Dashboard/TabsComponent'
import axios from 'axios'
const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d',
      )
      .then((response) => {
        console.log('ResPonse', response)
        setCoins(response.data)
      })
      .catch((error) => {
        console.log('Error>>', error)
      })
  }, [])

  return (
    <div>
      <TabsComponent coins={coins} />
    </div>
  )
}

export default Dashboard
