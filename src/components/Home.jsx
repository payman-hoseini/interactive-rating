import { useContext } from "react"
import { RatingContext } from "../context/RatingContext"

export default function Home(){
    let {rateNum , setRateNum , rateFlag , setRateFlag} = useContext(RatingContext)
    function RateNum(num){
        setRateNum(num)
    }
    function SubmitHandler(){
        setRateFlag(!rateFlag)
    }
    return (
        <>
            <div className="bg-Dark-Blue w-[90vw] max-w-md rounded-3xl p-5 md:p-8 flex flex-col items-start">
                <div className="bg-white bg-opacity-5 w-12 h-12 flex items-center justify-center rounded-full">
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/>
                    </svg>
                </div>
                <div className="mt-8 font-Overpass">
                    <h2 className="font-semibold text-white md:text-3xl text-2xl">How did we do?</h2>
                    <p className="mt-3 text-Light-Grey text-sm md:text-base">Please let us know how we did with your support request. All feedback is appreciated 
                    to help us improve our offering!</p>
                </div>
                <div className="mt-5 grid grid-cols-5 gap-x-7 font-Overpass text-Light-Grey font-semibold">
                    <button className="bg-white bg-opacity-5 md:w-14 md:h-14 w-10 h-10 rounded-full hover:bg-Orange hover:text-black hover:duration-300 focus:bg-white focus:text-black" onClick={() => RateNum(1)}>1</button>
                    <button className="bg-white bg-opacity-5 md:w-14 md:h-14 w-10 h-10 rounded-full hover:bg-Orange hover:text-black hover:duration-300 focus:bg-white focus:text-black" onClick={() => RateNum(2)}>2</button>
                    <button className="bg-white bg-opacity-5 md:w-14 md:h-14 w-10 h-10 rounded-full hover:bg-Orange hover:text-black hover:duration-300 focus:bg-white focus:text-black" onClick={() => RateNum(3)}>3</button>
                    <button className="bg-white bg-opacity-5 md:w-14 md:h-14 w-10 h-10 rounded-full hover:bg-Orange hover:text-black hover:duration-300 focus:bg-white focus:text-black" onClick={() => RateNum(4)}>4</button>
                    <button className="bg-white bg-opacity-5 md:w-14 md:h-14 w-10 h-10 rounded-full hover:bg-Orange hover:text-black hover:duration-300 focus:bg-white focus:text-black" onClick={() => RateNum(5)}>5</button>
                </div>
                <button className="bg-Orange text-center w-full mt-8 font-Overpass font-semibold py-3 rounded-3xl tracking-wider hover:bg-white hover:duration-500" onClick={() =>SubmitHandler()}>
                    SUBMIT
                </button>
            </div>
        </>
    )
}