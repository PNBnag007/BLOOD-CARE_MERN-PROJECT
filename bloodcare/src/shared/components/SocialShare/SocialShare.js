import React from 'react'
import useScript from "hooks/useScript"
const SocialShare = () => {
    useScript('https://platform-api.sharethis.com/js/sharethis.js#property=5fa5054acc85000012ec2cc0&product=sticky-share-buttons')
    return (
        <div>
            
        </div>
    )
}

export default SocialShare
