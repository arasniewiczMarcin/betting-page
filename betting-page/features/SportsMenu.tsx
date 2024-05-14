'use client'
import { Menu, MenuHandler, Button, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'

const SportsMenu = (): JSX.Element => {
  return (
        <div className="flex flex-col w-80 pl-4 py-4">
            <h1 className="pb-2 bold text-md font-semibold">Sports</h1>
            <Menu>
                <MenuHandler>
                    <Button
                        variant="filled"
                        size="md"
                        className="rounded-md py-2 text-black bg-white hover:bg-gray-300 text-left px-4"
                        placeholder={undefined}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        >
                        Menu
                    </Button>
                </MenuHandler>
                <MenuList className="bg-blue-700" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Menu Item 1
                    </MenuItem>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Menu Item 1
                    </MenuItem>
                    <MenuItem placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        Menu Item 1
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
  )
}
export default SportsMenu
