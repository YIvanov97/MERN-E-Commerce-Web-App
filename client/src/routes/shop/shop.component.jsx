import { useEffect, useState } from 'react';
import ShopBannerSvg from '../../assets/images/shop-banner-svg.svg';
import { BannerClassic } from '../../components/banner/banner.component';
import { ShopCard } from '../../components/card/card.component';
import './shop.style';
import { GridContainer } from './shop.style';
import { FullContainer } from '../../styles/global';

const ShopPage = () => {
    const [products, setProducts] = useState({})

    useEffect(() => {
        (async () => {
            try {
                await fetch('https://localhost:4000/v1/products/get')
                .then(data => data.json())
                .then(products => {
                    setProducts(products)
                })
            } catch (err) {
                console.log(err);
            }
        })()
    }, [])

    return(
        <FullContainer>
            <BannerClassic id={''} type={'classic'} title={'Shop'} text={'some text shop page'} image={ShopBannerSvg} margin='0 0 100px 0'/>
            <GridContainer>
                <ShopCard image={ShopBannerSvg} type={'shop__card'} title={'Product'} text={'Product text'}/>
                <ShopCard image={ShopBannerSvg} type={'shop__card'} title={'Product'} text={'Product text'}/>
                <ShopCard image={ShopBannerSvg} type={'shop__card'} title={'Product'} text={'Product text'}/>
                <ShopCard image={ShopBannerSvg} type={'shop__card'} title={'Product'} text={'Product text'}/>
                <ShopCard image={ShopBannerSvg} type={'shop__card'} title={'Product'} text={'Product text'}/>
            </GridContainer>
        </FullContainer>
    )
}

export default ShopPage;