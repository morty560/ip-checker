import { useQuery } from 'react-query'
import axios from "axios";
import { ipApiUrl } from "../constants/apiUrls";

async function fetchUserData() {
    const { data } = await axios.get(ipApiUrl)
    return data
}

export const useUserData = () => {
    const { data, isLoading, error } = useQuery('user', fetchUserData, {
        staleTime: Infinity,
    })

    return {
        userData: data,
        isLoading,
        error
    }
}