import React, { useState } from 'react'
import ConfirmationTooltip from '../ConfirmationTooltip'

const ToolTipButton = ({ handleConfirm, text }) => {
  const [visible, setVisible] = useState(false);
  return (
    // <ConfirmationTooltip
    //   handleConfirm={handleConfirm}
    //   handleCancel={() => setVisible(false)}
    //   visible={visible}
    // >
      <button
        className="px-5 py-2 tracking-wider text-white uppercase duration-500 ease-in-out rounded-md bg-primaries-800 hover:bg-primaries-500"
        onClick={handleConfirm}
      >
        {text}
      </button>
    // </ConfirmationTooltip>
  )
}

export default ToolTipButton