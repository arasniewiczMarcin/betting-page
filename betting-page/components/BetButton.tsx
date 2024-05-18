import { Button } from '@material-tailwind/react'
import React from 'react'

interface BetButtonProps {
  odd: string
  type: string
}

const BetButton = (props: BetButtonProps): JSX.Element => (
    <Button
    variant="filled"
    size="md"
    className="rounded-md p-2 text-black bg-gray-200 hover:bg-gray-300 w-24"
    placeholder={undefined}
    onPointerEnterCapture={undefined}
    onPointerLeaveCapture={undefined}
    >
        <div className="flex justify-between">
            <p className="text-left">{props.type}</p>
            <p className="text-right">{props.odd}</p>
        </div>

    </Button>
)
export default BetButton
