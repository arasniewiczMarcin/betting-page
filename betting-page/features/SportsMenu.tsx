'use client'
import React from 'react'
import leagues from '@/public/data/leagues.json'

interface SportsMenuProps {
  setLeague: (league: number) => void
}

const SportsMenu = (props: SportsMenuProps): JSX.Element => {
  return (
        <div className="mt-2 ml-6">
            <h1 className="p-2 bold text-md font-semibold">Popular Leagues</h1>
            <div className="flex flex-col w-64 divide-y bg-white px-2 rounded-lg">
                {leagues.response.slice(0, 9).map((league: any, index: number) => (
                    <div key={index} onClick={() => { props.setLeague(league.league.id as number) }} className="text-xs font-semibold w-full bg-white px-2 py-3 rounded-lg hover:cursor-pointer">
                        {league.league.name}
                    </div>
                ))}
            </div>
            {/* <h1 className="pb-2 bold text-md font-semibold">Sports</h1>
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
  </Menu> */}
        </div>
  )
}
export default SportsMenu
