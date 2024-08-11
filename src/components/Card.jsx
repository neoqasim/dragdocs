import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion"


const Card = ({ data, dragRef }) => {

    return (
        <>
            <motion.div
                whileDrag={{ scale: "0.99" }}
                whileTap={{ scale: 1.1 }}
                dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
                dragConstraints={dragRef}

                drag

                className="relative h-80 w-64 rounded-[2rem] bg-zinc-900/85 text-white px-6 py-8 overflow-hidden " >
                <p className="text-base  leading-tight mt-4 " >{data.desc}</p>
                <div className="footer absolute bottom-0  left-0 w-full py-12  ">
                    <div className="flex justify-between py-8 px-8 items-center" >
                        <h3>{data.fileSize}</h3>
                        <span className="bg-zinc-700 rounded-full text-lg h-7 w-7 flex justify-center items-center " >{data.close ? (<MdOutlineFileDownload size={24} />) : (<h1 className="mb-1" >x</h1>)}</span>
                    </div>
                    {data.tag.isOpen &&
                        <div className={`w-full h-12 absolute flex justify-center items-center `} style={{ background: data.tag.tagColor, }}>
                            <h3 style={{ mixBlendMode: "difference" }} className=" font-semibold text-center text-yellow-400 ">Download now</h3>
                        </div>
                    }
                </div>
            </motion.div>

        </>
    )
}

export default Card