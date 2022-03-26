import { atom, useRecoilState } from 'recoil';

// グローバルstateの型
type UserState = { id: number } | null;

// Atom（状態の一部を表すもの）の定義
const userState = atom<UserState>({
    key: 'user',　// グローバルstateを判別する一意の値
    default: null, // 初期値
});

// カスタムフック的
export const useUserState = () => {

    // AtomをRecoilに渡してグローバルstateを定義
    const [user, setUser] = useRecoilState<UserState>(userState);

    return { user, setUser };
};