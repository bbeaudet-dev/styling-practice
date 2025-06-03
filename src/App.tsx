import clsx from 'clsx';
import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <>
      <div className={clsx('flex flex-row justify-left items-center m-5 max-w-1/2 border-1 border-gray-300 rounded-lg', checked ? 'bg-green-50' : 'bg-white')}>
        <button onClick={handleCheck}
          className={clsx('aspect-square border-1 rounded-md w-5.5 h-5.5 ml-4 mr-2', checked ? 'bg-green-600 border-green-600' : 'bg-white border-gray-300')}>
        </button>
        <div className="flex flex-col px-2 pt-2 pb-3 max-w-1/2">
          <p className="text-md font-light font-inter pb-1">Sweep the Kitchen</p>
          <p className="text-xs font-extralight text-gray-500">Get under the cabinets, do a good job</p>
        </div>
      </div >
    </>
  )
}

export default App