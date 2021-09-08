import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Card, RestaurantCard, Map, Modal, Loader, Skeleton } from '../../components';

import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
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

    const handleOpenModal = (placeId) => {
        setPlaceId(placeId);
        setModalOpened(true);
    };

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do restaurante" />
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    ><Input
                            type="text"
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={handleChange} />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <div>
                            <CarouselTitle>Na sua Área</CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <Card
                                        key={restaurant.place_id}
                                        photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
                                        title={restaurant.name}
                                    />))}
                            </Carousel>
                        </div>
                    ) : (
                        <Loader />
                    )}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        onClick={() => handleOpenModal(restaurant.place_id)}
                        restaurant={restaurant} />
                ))}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <div>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>{restaurantSelected?.opening_hours?.open_now
                            ? 'Aberto agora'
                            : 'Fechado no momento'}
                        </ModalContent>
                    </div>
                ) : (
                    <div>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </div>
                )}
            </Modal>
        </Wrapper>
    );
};
export default Home;