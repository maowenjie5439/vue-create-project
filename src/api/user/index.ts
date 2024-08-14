import request from "@/utils/request"
import type { LoginFormData, LoginResponseData, UserInfoReponseData} from "./type"
enum API {
  LOGIN_URL = '/user/login',

  USERINFO_URL = '/user/info',

  LOGOUT_URL = '/user/logout'
}
//登录接口
export const reqLogin = async(data: LoginFormData): Promise<LoginResponseData> =>
  request.post<any, LoginResponseData>(API.LOGIN_URL, data)
//获取用户信息

export const reqUserInfo = async (): Promise<UserInfoReponseData> => request.get<any, UserInfoReponseData>(API.USERINFO_URL)

//退出登录
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
