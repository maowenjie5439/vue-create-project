export interface LoginFormData{
    username: string;
    password: string;
}

interface Token{
    token: string
}
export interface LoginResponseData{
    code: number;
    data: Token
} 

interface User{
    userId: number,
    avatar: string,
    username: string,
    email: string,
    desc: string,
    roles: string[],
    buttons: string[],
    routes: string[],
    token: Token
}
export interface UserInfoReponseData{
    code: number,
    data: User
}