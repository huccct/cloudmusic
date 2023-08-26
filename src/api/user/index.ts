import request from '@/utils/request'

enum API {
  QRKEY_URL = '/login/qr/key',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}
export const reqGenerateQRKey = () => request.get<any, any>(API.QRKEY_URL)
