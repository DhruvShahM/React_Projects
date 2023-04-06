import React, { useState } from 'react'

function Family({ familyTree }) {

    const [isVisible, setIsVisible] = useState([]);

    const expand = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{ paddingLeft: 10 }}>
            <span onClick={expand}>{familyTree?.name}
            </span>


            {isVisible ? (
                familyTree?.children?.map((child) => {
                    return (
                        <div style={{ paddingLeft: 10 }}>
                            <Family familyTree={child}/>
                        </div>
                    )
                })
            ) :
                (<></>)
            }
        </div>
    )
}

export default Family
