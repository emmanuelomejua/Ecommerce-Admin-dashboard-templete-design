export const rows = [
    {
        id: 1111,
        product: 'HP ChromeBook',
        img: require('./assets/HP-Chromebook-x360-14c-xda-768x512.jpg'),
        customer: 'Chisom Onwubiko',
        date: 'March 31',
        amount: 950,
        method: 'Cash on delivery',
        status: 'Pending'
    },
    {
        id: 1112,
        product: 'Jeans Jacket',
        img: require('./assets/2347026585038_status_1f0672e305a646ca851decfbe9237e8b.jpg'),
        customer: 'Andrew Onwubiko',
        date: 'March 19',
        amount: 950,
        method: 'Cash on delivery',
        status: 'Approved'
    },
    {
        id: 1113,
        product: 'Mens Loungue',
        img: require('./assets/2349092821760_status_b390cad871834275bbc6f36daf4b4e19.jpg'),
        customer: 'Emma Onwubiko',
        date: 'March 14',
        amount: 950,
        method: 'Online Payment',
        status: 'Pending'
    },
    {
        id: 1114,
        product: 'Mac 2 Desktop Set Up',
        img: require('./assets/thres.jpg'),
        customer: 'Chisom Okeke',
        date: 'March 12',
        amount: 950,
        method: 'Cash on delivery',
        status: 'Approved'
    }, {
        id: 1115,
        product: 'HP-Spectre-x360',
        img: require('./assets/HP-Spectre-x360-16-9-768x512.jpg'),
        customer: 'Mazi Tompolo',
        date: 'March 11',
        amount: 950,
        method: 'Cash on delivery',
        status: 'Approved'
    },
    {
        id: 11116,
        product: 'HP-Pavilion-Aero-13',
        img: require('./assets/HP-Pavilion-Aero-13-6-768x512.jpg'),
        customer: 'Onyii Iyke',
        date: 'March 4',
        amount: 950,
        method: 'Cash on delivery',
        status: 'Pending'
    },
    {
        id: 11117,
        product: 'HP-Envy-17-2021-xda',
        img: require('./assets/HP-Envy-17-2021-xda-768x512.jpg'),
        customer: 'Jachinma Paul',
        date: 'March 1',
        amount: 950,
        method: 'Online',
        status: 'Approved'
    },
    {
        id: 11118,
        product: 'HP Elite-Book',
        img: require('./assets/HP-EliteBook-840-Aero-5-768x512.jpg'),
        customer: 'Blessing Peter',
        date: 'January 24',
        amount: 1950,
        method: 'Cash on delivery',
        status: 'Approved'
    },
]

export const userColumns = [
    { 
        field: 'id', 
        headerName: 'ID',
        width: 50           
    },
    {
        field: 'user', 
        headerName: 'User', 
        width: 230, 
        renderCell: (params) => {
        return(
            <div className='cellWidthTable'>
                <img className='cellImg' alt='' src={params.row.img}/>
                <p> {params.row.fullName}</p>
            </div>
          )
        }
    },
    {
        field: 'email', 
        headerName: 'Email', 
        width: 230 
    },
    {
        field: 'age', 
        headerName: 'Age', 
        width: 100 
    },
    {
        field: 'status', 
        headerName: 'Status', 
        width: 180,
        renderCell: (params) => {
            return(
                <div className={`cellWidthStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },

]

export const userRows = [
    {
        id: 0,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'active',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 1,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'active',
        email: 'blex@lookmail.com',
        age: 30
    },
    {
        id: 2,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 3,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 4,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'active',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 5,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 6,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'active',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 7,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 8,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 9,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
    {
        id: 10,
        fullName: 'Blessing Peter',
        img: require('./assets/1671696742908.jpg'),
        status: 'passive',
        email: 'blex@lookmail.com',
        age: 22
    },
]