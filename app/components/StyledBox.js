
const StyledBox = ({content}) => {
    return (
        <div className="  w-[50%] h-[90%] rounded-[1rem]  bg-white flex flex-col justify-between  overflow-hidden">
          <div className="h-[10%] bg-white w-[100%] rounded-[1rem] flex ">
            <div className="w-[20%] bg-white  h-[100%] rounded-br-[1rem]  ">
              <div className="bg-white h-full w-full flex flex-col justify-end items-end overflow-hidden">
                <div className="w-[88%] h-[67%] bg-white rounded-br-[1rem] border-b-[1px] border-r-[1px] border-[#000]  overflow-hidden">
                    
                </div>
              </div>
            </div>

            <div className="w-[80%] border-t-2  border-r-2 after:  border-[#000] border-spacing-10 rounded-bl-none rounded-tl-[1rem] rounded-tr-[1rem] bg-white   h-[100%] ">
              
            </div>
          </div>  

          <div className="h-[80%] bg-white overflow-hidden ">
            <div className="h-full w-full bg-white rounded-tl-[1rem]  rounded-br-[1rem] border-r-2 border-l-2 border-[#000]">
                {content}
            </div>
          </div>

          <div className="h-[10%] bg-white rounded-[1rem] w-[100%] flex">
            <div className="w-[80%] border-l-2 rounded-br-[1rem] rounded-bl-[1rem] border-b-2 border-[#000] bg-white   h-[100%]  ">

            </div>
            <div className="w-[20%] bg-white h-[100%] rounded-br-[1rem] ">
              <div className="bg-white rounded-b  h-full w-full">
                <div className="w-[89.5%] h-[70%] bg-white border-l-[1px] overflow-hidden border-t-[1px] border-[#000] rounded-tl-[1rem]">
                      
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default StyledBox