import type MyBetsType from '@/interfaces/MyBetsType'
import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'

interface MyBetsProps {
  myBets: MyBetsType[]
}

const MyBets = (props: MyBetsProps): JSX.Element => {
  return (
    <>
      {props.myBets.length > 0
        ? (
        <div className="flex flex-col w-80 h-auto divide-y bg-white px-2 mx-2 pt-4 rounded-lg shadow-m mr-4 mt-6">
          <Typography className="text-xs font-semibold mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            My Bets
          </Typography>
          {props.myBets.map((match, index) => (
            <Card className="w-full bg-white p-2 rounded-lg border" key={index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <CardBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="flex justify-between gap-8">
                  <div className="text-[10px] font-semibold">
                    {match.home} - {match.away}
                  </div>
                </div>
                <div className="flex justify-between gap-8 py-2">
                  <div className="flex gap-1">
                    <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      Type:
                    </Typography>
                    <Typography className="text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                      {match.type}
                    </Typography>
                  </div>
                  <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {match.odd}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
          <div className='flex flex-col gap-8 divide-y my-2 py-2 px-2'>
            <div className="flex justify-between gap-8">
              <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Total Odds:
              </Typography>
              <Typography className="p-1 text-sm ml-auto bg-yellow-400 rounded-md font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {props.myBets.reduce((acc, curr) => acc * parseFloat(curr.odd), 1).toFixed(2)}
              </Typography>
            </div>

            <div className="flex justify-between gap-8">
              <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Stake:
              </Typography>
              <Typography className="text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {parseFloat(props.myBets[0].stake).toFixed(2)} €
              </Typography>
            </div>
            <div className="flex justify-between gap-8">
              <Typography className="text-sm font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                To return:
              </Typography>
              <Typography className="text-sm font-bold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {(props.myBets.reduce((acc, curr) => acc * parseFloat(curr.odd), 1) * parseFloat(props.myBets[0].stake)).toFixed(2)} €
              </Typography>
            </div>
          </div>
        </div>
          )
        : null}
    </>
  )
}

export default MyBets
