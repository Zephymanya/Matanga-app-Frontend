const linkApi = "http://localhost:8000"

export const routeApi = {
    login:         `${linkApi}/api/auth/login`,
    register:      `${linkApi}/api/auth/register`,
    edit_account:  `${linkApi}/api/auth/edit-account`,
    refresh:       `${linkApi}/api/auth/refresh`,
    user_profile:  `${linkApi}/api/auth/user-profile`,

    create_defunt:   `${linkApi}/api/auth/create-defunt`,
    edit_defunt:     `${linkApi}/api/auth/edit-defunt`,
    edit_defunt:     `${linkApi}/api/auth/edit-defunt`,
    get_all_defunts: `${linkApi}/api/auth/defunts`,
    get_defunt:      `${linkApi}/api/auth/one-defunt`,
    get_data_defunt: `${linkApi}/api/defunt`,
    delete_defunt:   `${linkApi}/api/auth/delete-defunt`,
    
    get_defunts_random: `${linkApi}/api/defunts-random`,
    get_defunts_all_user: `${linkApi}/api/defunts-all-users`,

    get_comments:   `${linkApi}/api/comments`,
    create_comment: `${linkApi}/api/auth/create-comment`,
    delete_comment: `${linkApi}/api/auth/delete-comment`,

    search_all_defunt: `${linkApi}/api/search-all-defunt`,
    search_all_user_defunt: `${linkApi}/api/auth/search-all-user-defunt`,

    get_cimetieres: `${linkApi}/api/cimetieres`,

    logout:        `${linkApi}/api/auth/logout`,
}


export const configHeader = {
    headers:{
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
}

export const configHeaderFormData = {
    headers:{
        "Content-Type": "multipart/form-data",
        "X-Requested-With": "XMLHttpRequest"
    }
}
