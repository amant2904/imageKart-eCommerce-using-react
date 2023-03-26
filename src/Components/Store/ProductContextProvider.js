import React, { useState } from 'react'
import ProductContext from './product-context'

export default function ProductContextProvider(props) {
    const [list, setList] = useState([{
        id: "p1",
        title: 'Colors',
        price: 100,
        imageUrl: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3JzfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            'https://buffer.com/resources/content/images/resources/wp-content/uploads/2013/04/The-Science-of-Colors-in-Marketing.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeIPNngkoVepiTq_pLI3THzbnrnraQYYg8A&usqp=CAU'
        ],
        database: null
    },
    {
        id: "p2",
        title: 'Black and white Colors',
        price: 50,
        imageUrl: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnOL-vXjB18Nay3jUzZ9h4ntPspT3eqVKgQ&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVBzOUTbPYoklKrq93FZmwhNf5WjG57S70A&usqp=CAU'
        ],
        database: null
    },
    {
        id: "p3",
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
            'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
            'https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg'
        ],
        database: null
    },
    {
        id: "p4",
        title: 'Blue Color',
        price: 100,
        imageUrl: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
            'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
            'https://images.ctfassets.net/kdawwlsweh27/2LtummpjO849eQ83yGGiUN/b33c73279163c84b65241cdfcc1c8844/Fresh_Stock_Content.jpg',
            'https://burst.shopifycdn.com/photos/person-holds-a-book-over-a-stack-and-turns-the-page.jpg?width=1200&format=pjpg&exif=0&iptc=0'
        ],
        database: null
    }])

    const database_handler = (identifier, database_id) => {
        const index = list.findIndex((item) => {
            return item.id.toString() === identifier.toString();
        })
        const new_list = [...list];
        new_list[index].database = database_id;
        setList(new_list);
    }

    const database_remover = (identifier) => {
        const index = list.findIndex((item) => {
            return item.id.toString() === identifier.toString();
        })
        const new_list = [...list];
        new_list[index].database = null;
        setList(new_list);
    }

    const firstUpdate_handler = (fetched_list) => {
        const mmp = new Map();
        for (let i = 0; i < fetched_list.length; i++) {
            mmp.set(fetched_list[i].identity, fetched_list[i]._id);
        }
        const new_list = [...list];
        for (let i = 0; i < new_list.length; i++) {
            if (mmp.has(new_list[i].id)) {
                let database_id = mmp.get(new_list[i].id);
                new_list[i].database = database_id;
            }
        }
        setList(new_list);
    }

    return (
        <ProductContext.Provider value={{
            products: list,
            database_handler: database_handler,
            database_remover: database_remover,
            firstUpdate_handler: firstUpdate_handler
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}
