import React from 'react';
import Button from "../../../shared/ui/Button/Button";
import '../../../shared/styles/_all.scss';
import {MENU_DATA} from "../model/data";

export default function Menu() {
    return (
        <>
            <nav className='menu'>
                {MENU_DATA.map((item) => (
                    <Button
                        key={item.id}
                        variant={"menu"}
                        text={item.label}
                        onClick={() => alert(item.label)}
                    />
                ))}
            </nav>
        </>
    );
}
