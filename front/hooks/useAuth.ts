import { useUserState } from '../atoms/userAtom';
import { axiosApi } from '../lib/axios';

export const useAuth = () => {
    const { user, setUser } = useUserState();

    const checkLoggedIn = async (): Promise<boolean> => { // 返り値はPromise型のジェネリクスにbooleanを渡す->boolean型
        // APIでもFrontでも認証中->グローバルstateに存在している
        if (user) {
            return true;
        }
        // リロード等でFrontでは未ログイン->API側にログインしているか確認->sessionにあるか
        try {
            const res = await axiosApi.get('/api/user');
            if (!res.data.data) { // APIで未ログイン判定される場合->response.dataがnull->引数部分はundefined
                return false;
            }
            setUser(res.data.data);
            return true;
        } catch {
            return false;
        }
    };

    return { checkLoggedIn };
};