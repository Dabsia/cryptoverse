import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import { Link } from 'react-router-dom'
import Cryptocurrency from '../Cryptocurrency/Cryptocurrency'
import News from '../News/News'
import Loader from '../../components/Loader/Loader'

const { Title } = Typography

const HomePage = () => {

    const { data, isFetching } = useGetCryptosQuery(10)



    const globalStats = data?.data?.stats

    if (isFetching) return <Loader />

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}>
                    <Statistic title='Total Cryptocurrencies' value={millify(globalStats.total)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total 24h volume' value={millify(globalStats.total24hVolume)} />
                </Col>
                <Col span={12}>
                    <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} />
                </Col>
            </Row>
            <div className='home-heading-container' >
                <Title level={3} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={5} className='home-title'><Link to='/cryptocurrencies' >Show More</Link></Title>
            </div>
            <Cryptocurrency simplified />
            <div className='home-heading-container' >
                <Title level={3} className='home-title'>Latest Crypto News</Title>
                <Title level={5} className='home-title'><Link to='/news' >Show More</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default HomePage
