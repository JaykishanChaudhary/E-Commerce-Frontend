import React from "react";
import { useSearchParams } from "react-router-dom"
const Checkoutsucess=()=>{
    const searchquery= useSearchParams()[0];
    const params=searchquery.get('reference')
    return <div>
        <h2>checkout sucessfull</h2>
        <p>reference no `${params}`</p>
    </div>
};
export default Checkoutsucess;