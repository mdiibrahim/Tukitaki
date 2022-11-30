import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../AuthProvider/AuthProvider";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState(false);
    const { setSeller } = useContext(AuthContext);

    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://tukitakibyrhidy.web.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {

                    setIsSeller(data.isSeller);
                    setSeller(data.seller)
                    setIsSellerLoading(false);
                })
        }
    }, [email, setSeller])
    return [isSeller, isSellerLoading]
}

export default useSeller;