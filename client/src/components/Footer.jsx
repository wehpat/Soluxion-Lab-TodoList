export default function Footer() {
  return (
        <footer className='py-2 flex justify-center items-center border-t-1 border-brownDefault'>
            <div className=''>
                <button className="text-xs cursor-pointer font-light text-md ml-3 text-white bg-brownDefault p-1.5 rounded-full">
                    Cancel
                </button>
                <button className='text-xs cursor-pointer font-ligt text-md ml-3 text-white bg-brownDefault p-1.5 rounded-full'>
                    Save
                </button>
            </div>
        </footer>
  )
}
