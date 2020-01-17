const projectsReducer = (state = [], action) => {
    switch (action.type) {
        // case 'NEW_PROJECT':
        //     return [...state, action.data]
        case 'INIT_PROJECTS':
            return action.data
        default:
            return state
    }
}

export const initializeProjects = (projects) => {
    return {
        type: 'INIT_PROJECTS',
        data: projects
    }
}

export default projectsReducer