import { useRef } from "react"
import Card from "./Card"

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et suscipit iste impedit commodi aut.",
            fileSize: "0.9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et suscipit iste impedit commodi aut.",
            fileSize: "0.9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "green" }
        },
        {
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et suscipit iste impedit commodi aut.",
            fileSize: "0.9mbs",
            close: true,
            tag: { isOpen: true, tagTitle: "Download now", tagColor: "yellow" }
        },
    ]

    return (
        <>
            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-12 flex-wrap flex-shrink " >
                {
                    data.map((item, index) => (
                        <Card dragRef={ref} key={index} data={item} />
                    ))
                }
            </div>
        </>

    )
}

export default Foreground