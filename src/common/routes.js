export const routes = [
    {
        name: 'home',
        pattern: '/'
    },
    {
        name: 'notFound',
        pattern: '/not-found'
    },
    {
        name: 'vehicleModelList',
        pattern: '/vehicle-models'
    },
    {
        name: 'createModel',
        pattern: '/vehicle-model/create'
    },
    {
        name: 'editModel',
        pattern: '/vehicle-model/:id/edit'
    },
    {
        name: 'vehicleMakeList',
        pattern: '/vehicle-makes/'
    },
    {
        name: 'createMake',
        pattern: '/vehicle-make/create'
    },
    {
        name: 'editMake',
        pattern: '/vehicle-make/:id/edit'
    }
];