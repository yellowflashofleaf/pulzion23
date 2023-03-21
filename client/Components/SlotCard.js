import React from 'react'
import { IoAlarmOutline, IoAlarmSharp, IoCalendarSharp } from 'react-icons/io5';
import { displayDate, displayFormat } from '../utils/displayTime';
import ToolTipButton from './Button/ToolTipButton';

const SlotCard = ({ slot, handleBook }) => {
    return (
        <>
            <div className='flex flex-col gap-4 py-4'>
                <div className='flex items-center gap-2 justify-between'>
                    <p className='text-white text-xl tracking-wide font-bold flex items-center gap-2'>
                        <IoCalendarSharp />
                        <span>{displayDate(slot.start_time)}</span>
                    </p>
                    <p className='text-white text-xl tracking-wide font-bold flex items-center gap-2'>
                        <IoAlarmSharp /> <span>{displayFormat(slot.start_time)} - {displayFormat(slot.end_time)}</span>
                    </p>
                </div>
                <div className='flex items-center gap-2 justify-between'>
                    <p className='text-white text-xl tracking-wide font-bold'>
                        capacity: {slot.capacity}
                    </p>
                    <ToolTipButton text="Book Now" handleConfirm={()=>handleBook(slot.id)}/>
                </div>
            </div>
            <div className='w-full h-px bg-white opacity-10'></div>
        </>
    )
}

export default SlotCard