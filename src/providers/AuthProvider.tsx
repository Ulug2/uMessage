import { Session } from '@supabase/supabase-js';
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { supabase } from '../lib/supabase';


const AuthContext = createContext({})

export default function AuthProvider({children}: PropsWithChildren){

    const [session, setSession] = useState<Session | null>(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
        })
        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, [])

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}