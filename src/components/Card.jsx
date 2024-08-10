import { MdOutlineFileDownload } from "react-icons/md";


const Card = () => {
    return (
        <>
            <div className="relative h-80 w-64 rounded-[2rem] bg-zinc-900/85 text-white px-6 py-8 overflow-hidden " >
                <p className="text-sm leading-tight mt-4 font-semibold" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit qui architecto, blanditiis quod deleniti ipsum?</p>
                <div className="footer absolute bottom-0  left-0 w-full py-12  ">
                    <div className="flex justify-between py-8 px-8 items-center" >
                        <h3>0.43mb</h3>
                        <span className="bg-zinc-700 p-1 rounded-full" ><MdOutlineFileDownload size={20} /></span>
                    </div>
                    <div className="w-full h-12 absolute flex justify-center items-center bg-indigo-600 ">
                        <h3 className="text-sm font-semibold text-center ">Download now</h3>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card