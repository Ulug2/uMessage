import UserListItem from "@/src/components/UserListItem"
import { supabase } from "@/src/lib/supabase"
import { useAuth } from "@/src/providers/AuthProvider"
import { useEffect, useState } from "react"
import { FlatList } from "react-native"

interface Profile {
    id: string;
    username: string;
    full_name: string;
    avatar_url?: string;
}

export default function UsersScreen(){
    const [users, setUsers] = useState<Profile[]>([])
    const { user } = useAuth()

    useEffect(() => {
        const fetchUsers = async () => {
            let { data: profiles, error } = await supabase
                .from('profiles')
                .select('*')
                .neq('id', user?.id);
            
            if (profiles) {
                setUsers(profiles)
            }
        }

        fetchUsers()
    }, [])

    return (
        <FlatList
            data={users}
            renderItem={({ item }) => <UserListItem user={item} />}
            keyExtractor={(item) => item.id}
        />
    )
}