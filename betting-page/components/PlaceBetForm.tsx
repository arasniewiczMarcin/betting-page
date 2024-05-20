import { useForm, type SubmitHandler } from 'react-hook-form'
import React from 'react'
interface PlaceBetFormProps {
  odd: number
  setMyBets: (stake: string) => void
}

const PlaceBetForm = (props: PlaceBetFormProps): JSX.Element => {
  interface Inputs {
    stake: string
  }

  const {
    register,
    handleSubmit,
    watch
  } = useForm<Inputs>()
  const stake = watch('stake')
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    props.setMyBets(stake)
  }

  const getReturnValue = (): string => {
    return (props.odd !== undefined && !isNaN(parseFloat(stake))) ? (props.odd * parseFloat(stake)).toFixed(2) : '0.00'
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded-lg mt-auto">
            <div className="flex gap-2">
                <input {...register('stake', { required: true })} placeholder="stake" className="w-28 py-1 px-2 mb-4 rounded-md border border-gray-300" />
                <label className="py-2">€</label>
                <label className="p-2 ml-auto mb-4 bg-yellow-400 rounded-md font-semibold">{props.odd.toFixed(2)}</label>
            </div>
            <div className="pb-4 flex gap-2">
                <label>To return</label>
                <label className="ml-auto m">{getReturnValue()} €</label>
            </div>
            <input type="submit" value={'Place Bet'} className="w-full py-2 px-4 bg-blue-700 text-white rounded cursor-pointer hover:bg-blue-700" />
        </form>
  )
}
export default PlaceBetForm
