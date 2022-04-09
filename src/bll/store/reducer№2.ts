


export type SomeStateType = {

}

type ActionsType = {}

const initialState: SomeStateType = {

}

export const SomeReducer2 = (state: SomeStateType = initialState, action: ActionsType): SomeStateType => {
    // switch (action.type) {
        // case "GET-TODOS": {
        //     let stateCopy = {...state}
        //     action.todos.forEach(t => {
        //         stateCopy[t.id] = []
        //     })
        //     return stateCopy
        // }

        // default:
            return state;
    }


