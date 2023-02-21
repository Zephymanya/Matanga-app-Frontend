const linkApi = "http://localhost:8001";

export const routeApi = {
  login: `${linkApi}/api/auth/login`,
  register: `${linkApi}/api/auth/register`,
  refresh: `${linkApi}/api/auth/refresh`,
  user_profile: `${linkApi}/api/auth/user-profile`,

  create_defunt: `${linkApi}/api/defunt/create-defunt`,
  edit_defunt: `${linkApi}/api/defunt/edit-defunt`,
  get_defunt: `${linkApi}/api/defunt/defunt`,
  delete_defunt: `${linkApi}/api/defunt/delete-defunt`,

  logout: `${linkApi}/api/auth/logout`,
};

export const configAuthHeader = {
  headers: {
    "Content-Type": "application/json",
    // "Authorization": localStorage.getItem("token")
  },
};

export const configHeader = {
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
};

export const configAuthFormDataHeader = {
  headers: {
    "Content-Type": "multipart/form-data",
    // "Authorization": localStorage.getItem("token")
  },
};
