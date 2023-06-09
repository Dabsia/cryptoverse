import React from 'react'
import { Space, Typography } from 'antd'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                Cryptoverse <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
    )
}

export default Footer
