export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'addUser':

        return [
            //repartimos la lista de usuario que ya existe
            ...state,
            {
                //Lo que venga en el parámetro como payload
                ...action.payload,
                id: new Date().getTime(),
            }
        ];

    default:
        return state;
    }
}