import classNames from "classnames"
import { FC,ReactNode } from "react"
import { useInView } from "react-intersection-observer";

import "./ScrollDetector.css"

type ScrollDetectorProps = {
    className?: string
    children?: ReactNode
    onScroll: () => void
    whenIsIntersecting?: boolean
}

const ScrollDetector: FC<ScrollDetectorProps> =(props)=> {

    const {ref} = useInView({
        onChange(inView, entry) {

            if(props.whenIsIntersecting)
            {
                if(entry.isIntersecting){
                    props.onScroll()
                }
            }
            else
            {
                props.onScroll()
            }
            
        },
    })
    
    return <div className={classNames("ScrollDetector", props.className)} ref={ref}     >
        {props.children}
    </div>
}

export default ScrollDetector