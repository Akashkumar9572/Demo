import React from 'react'

const Card = () => {


    const data = ["avi", 3, true, "uhfuhrjn", "jdhnjhd", "hwhh", 3, "uhfuhrjn", "jdhnjhd"]

    let user1 =
    {
        id: 46,
        name: "avi",
        address: "champanagar"
    }
    let user2 =
    {
        id: 47,
        roll: 45,
        name: "avisdevg",
        address: "champanagar bihar , india"
    }
    console.log(user2.address)

    let array =
        [
            {
                name: "avi",
                roll: 3,
                address:
                {
                    state: "bihar",
                    country: "india",
                    district: "bhagalpur"
                },
                friends: ["aman", "himanshu", "akash", "prerna"]
            },

            {
                name: "aman",
                roll: 6,
                address:
                {
                    state: "bihar",
                    country: "india",
                    district: "bhagalpur"
                }
            },
            {
                name: "akash",
                roll: 100,
                address:
                {
                    state: "bihar",
                    country: "india",
                    district: "bhagalpur"
                }
            },
            {
                name: "akash",
                roll: 100,
                address:
                {
                    state: "bihar",
                    country: "india",
                    district: "bhagalpur"
                }
            },




        ]
    console.log(array)



    return (
        <div>

            {
                array.map((item2) => {
                    return (
                        <div className='h-fit w-60 py-2 flex gap-3 flex-col justify-center items-center bg-slate-400  mb-1 ' >
                            <div className=' px-4 py-2 bg-sky-200 rounded-xl ' >Name : {item2.name} </div>
                            <div className=' px-4 py-2 bg-yellow-300 rounded-xl ' >   Roll. No. : {item2.roll}</div>
                            <div className=' px-4 py-2 bg-green-300 rounded-xl ' >   Address : {item2.address.state} , {item2.address.district}</div>
                        </div>)
                })
            }




        </div >
    )
}

export default Card