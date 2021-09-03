/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Map } from '../../components';

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    // const[modalOpened, setModalOpened] = useState(true);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          setQuery(inputValue);
        }
      };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        outlined
                        label="Pesquisar Restaurantes"
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            type="text"
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange} />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                        <Card photo={restaurante} title="Restaurante" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </Container>
            <Map query={query} />
            {/* <Modal open = {modalOpened} onClose = {() => setModalOpened(!modalOpened)} /> */}
        </Wrapper>
    );
};
export default Home;