export interface CardProps {
    title: string;
    description: String;
}

export interface SliderProps {
    name: string;
    cards: CardProps[];
}

export const slidersData: SliderProps[] = [
    {
        name: 'Технологии',
        cards: [
            { title: '1980', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1982', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1983', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1984', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1985', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1986', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
    {
        name: 'Кино',
        cards: [
            { title: '1987', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1988', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1989', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1990', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1991', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
    {
        name: 'Литература',
        cards: [
            { title: '1992', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1994', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1995', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '1997', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
    {
        name: 'Театр',
        cards: [
            { title: '1999', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2000', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2002', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2003', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2004', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
    {
        name: 'Спорт',
        cards: [
            { title: '2006', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2008', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2010', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2012', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2014', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
    {
        name: 'Наука',
        cards: [
            { title: '2015', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2016', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2017', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2018', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2019', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
            { title: '2022', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nostrum provident voluptatem odit modi recusandae ducimus quae, facilis, repellendus nisi praesentium impedit molestiae magnam' },
        ],
    },
];