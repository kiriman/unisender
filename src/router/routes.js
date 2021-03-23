export const ROOT = `/`
export const USERS = `${ROOT}users`
export const USER = id => `${USERS}/${id || ':id'}`
