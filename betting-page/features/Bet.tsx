"use client";
import { Card, CardBody, Textarea, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import PlaceBetForm from "@/components/PlaceBetForm";

interface Match {
    odd: number;
    homeTeam: string;
    awayTeam: string;
    type: string;
}

interface BetProps {
    matches: Match[];
}

const Bet = (props: BetProps)=>{

    const cancelIcon = "/icons/cancel.svg";

    const [title, setTitle] = useState<string>("No Matches Selected");

    useEffect(() => {
        if(props.matches.length > 0){
            setTitle(`${props.matches.length} Matches Selected`);
        }else{
            setTitle("No Matches Selected");
        }
    }, [props.matches]);

    const countOdds = () => {
        let odds = 1;
        props.matches.forEach((match: Match) => {
            odds *= match.odd;
        });
        return odds;
    }

    return (
        <div className="flex flex-col w-80 h-[calc(100vh-100px)] divide-y bg-white px-4 pt-4 rounded-lg shadow-m mr-4 mt-6">
            <Typography className="text-xs font-semibold mb-4" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {title}
            </Typography>
            <div className="overflow-y-auto px-2">
            {props.matches.map((match: Match, index: number) => (
                <Card className="w-full bg-white p-2 rounded-lg border" key={index} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    <CardBody className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
                        <div className="flex justify-between gap-8">
                            <div className="text-[10px] font-semibold">
                                {match.homeTeam} - {match.awayTeam}
                            </div>
                            <Image src={cancelIcon} alt="Cancel" width={13} height={13} />
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
            </div>
            <PlaceBetForm odd={countOdds()} />
            {/*<div className="mt-auto flex flex-row justify-between items-center py-4 gap-4">
                <div className="w-80">
                    <Textarea 
                    placeholder="Stake"
                    className="w-32"
                    onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
                    />
                </div>
                <div>
                    <p className="text-sm">Total Odds</p>
                    <p className="text-lg font-semibold">15</p>
                </div>
        </div>*/}
        </div>
    )
}

export default Bet;