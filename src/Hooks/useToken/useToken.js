import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            try {

                axios.get(`http://localhost:5000/jwt?email=/${email}`)
                    .then(res => res.json())
                    .then(data => {
                        if (data.accessToken) {
                            localStorage.setItem('accessToken', data.accessToken);
                            setToken(data.accessToken);
                            console.log(data.accessToken);
                        }
                    })

            } catch (error) {
                console.log(error)
            }
        }
    }, [email])
    return [token];
}

export default useToken;