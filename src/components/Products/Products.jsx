export const products = [
    {
        id: 1,
        category: 'Vasijas',
        img: 'https://images.unsplash.com/photo-1677076454531-8b5f786f748c',
        alt: 'Producto 1',
        title: 'Producto 1',
        description: 'Desc.',
        price: 10,
        stock: 10,
    },
    {
        id: 2,
        category: 'Pintura',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Product 2',
        title: 'Product 2',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 3,
        category: 'Telares',
        img: 'https://images.unsplash.com/photo-1587925420577-527a56780bfd',
        alt: 'Product 3',
        title: 'Product 3',
        description: 'Desc.',
        price: 30,
        stock: 30,
    },
    {
        id: 4,
        category: 'Vasijas',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Producto 4',
        title: 'Producto 4',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 5,
        category: 'Pintura',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Producto 5',
        title: 'Producto 5',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 6,
        category: 'Telares',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Product 6',
        title: 'Product 6',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 7,
        category: 'Vasijas',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Product 7',
        title: 'Product 7',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 8,
        category: 'Pintura',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Product 8',
        title: 'Product 8',
        description: 'Desc.',
        price: 20,
        stock: 20,
    },
    {
        id: 9,
        category: 'Telares',
        img: 'https://plus.unsplash.com/premium_photo-1669802516069-d2ab1e70b644',
        alt: 'Product 9',
        title: 'Product 9',
        description: 'Desc.',
        price: 20,
        stock: 20,
        types: ['Vasijas', 'Pintura', 'Telares'],
    },
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 2500);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};