/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card } from '../../components';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        outlined
                        label="Pesquisar"
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                        <Card photo = {restaurante} title = "Restaurante" />
                    </Carousel>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    );
};
export default Home;