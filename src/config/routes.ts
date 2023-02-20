export const routePaths = {
    home: '/',
    info: '/aktualne-info',
    history : '/historia-klubu',
    trainings : '/treningy',
    trainings_group1 : '/treningy/skupina_1',
    trainings_group2 : '/treningy/skupina_2',
    trainings_parkour1 : '/treningy/parkour_1',
    trainings_parkour2 : '/treningy/parkour_2',
    trainings_public : '/treningy/public',
    trainings_individual : '/treningy/individual',
    trainings_racers : '/treningy/pretekári',
    trainers : '/nasi-treneri',
    trainerDetail: '/nasi-treneri/:id',
    gallery : '/fotogaleria',
    contests : '/sutaze',
    contacts : '/kontakty',
}


export const configMap = [
    {id: 'skupina1', route: routePaths.trainings_group1, name: 'Skupina1'},
    {id: 'skupina2', route: routePaths.trainings_group2, name: 'Skupina2'},
    {id: 'parkour1', route: routePaths.trainings_parkour1, name: 'Parkour1'},
    {id: 'parkour2', route: routePaths.trainings_parkour2, name: 'Parkour2'},
    {id: 'public', route: routePaths.trainings_public, name: 'Verejne'},
    {id: 'individual', route: routePaths.trainings_individual, name: 'Individual'},
    {id: 'racers', route: routePaths.trainings_racers, name: 'Pretekári'}
];

export const getRouteConfig = (searchId :string, ) => {
    const result = configMap.find(i => i.id === searchId);
    if(result){
        return result;
    }
}
