import Welcomei from "./Welcomei.jpg"
function Page(){
    return (
        <div className="text-orange-400 text-center font-extrabold text-4xl" >
            Welcome To Our Initiative For Connecting The Agencies Nationally To Minimise Hazards Of Disaster....
            <div className="flex justify-center mt-4">
                <img src={Welcomei} alt="" />
            </div>
        </div>
    )
}
export default Page;