import React from 'react'

import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

export default function NavToggler({ toggle, on }) {
    return (
        <Button onClick={toggle}>
            {on ?
               <CloseIcon/>
               :
               <MenuIcon/>
            }
        </Button>
    )
}