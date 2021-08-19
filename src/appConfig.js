



const mainNav = [
    {
        id: 1,
        title: 'Главная',
        name: 'Главная',
        to: '/',
        exact: true,
        image: null
    },
    {
        id: 2,
        title: 'Прогнозы',
        name: 'Прогнозы',
        to: '/prognozi-na-sport',
        exact: false,
        image: null
    },
    {
        id: 3,
        title: 'Букмекеры',
        name: 'Букмекеры',
        to: '/bukmakers',
        disabled: true,
        exact: true,
        image: null
    },
    {
        id: 4,
        title: 'Сервисы',
        name: 'Сервисы',
        to: '/services',
        exact: true,
        image: null

    }
];

export default mainNav;