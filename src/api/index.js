export const getTableDataApi = (options = {}) => {
    console.log('request params...', options)
    const data = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2017-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2017-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2017-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2017-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
    ]

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                total: data.length,
                data: data.slice((options.page-1) * options.limit, options.page * options.limit)
            })
        }, 3000)
    })
}