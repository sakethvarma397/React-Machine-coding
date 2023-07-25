import React, {useEffect, useState} from 'react';
import { uuid4 as v4} from 'uuid4';
import BoxRow from "./BoxRow.jsx";

const getInitialState = (layout) => {
    return layout.map(row => {
        return row.map(isVisible => {
            if (isVisible) {
                return {id: v4(), isClicked: false}
            } else {
                return null;
            }
        })
    })
}
function BoxGrid({layout}) {
    const [config, setConfig] = useState(getInitialState(layout));
    const [clickOrder, setClickOrder] = useState(new Set([]));

    const changeBoxStatus = (id, value) => {
        setConfig(prev => prev.map(row => {
            return row.map(item => {
                if (!item?.id) {
                    return null;
                }

                if (item.id === id) {
                    return {...item, isClicked: value}
                } else  {
                    return {...item}
                }
            })
        }));
    }

    useEffect(() => {
        if (clickOrder.size ===7) {
            let order = Array.from(clickOrder);
            for(let i = 0; i <= clickOrder.size-1 ; i++) {
                setTimeout(() => {
                    changeBoxStatus(order[i], false);
                }, i* 800);
            }
            setClickOrder(new Set([]));
        }
    }, [clickOrder])

    const onClick = (id) => {
        changeBoxStatus(id, true)
        setClickOrder(new Set(Array.from(clickOrder.add(id))));
    };

    return (
        <>
            {config.map((rowConfig, index) => <BoxRow key={index} config={rowConfig} handleClick={onClick} />)}
        </>
    );
}

export default BoxGrid;
