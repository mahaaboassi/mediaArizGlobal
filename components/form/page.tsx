interface PropsForm {
    isAppendLabel : Boolean,
    fromFixedComponent : Boolean
}
const FormUser:React.FC<PropsForm>  = ({isAppendLabel,fromFixedComponent}) => {
    return ( <form className={`flex flex-col justify-center gap-5 ${fromFixedComponent ?" h-full p-0":"p-5"} `}>
        <div >
            {fromFixedComponent?<h4>Reserve your discount today!</h4>:<h3>Reserve your discount today!</h3>}
            
        </div>
        <div className="w-full" >
            {isAppendLabel && <label >What's your Name</label>}
            <input  id="name" placeholder="Name"  />
        </div>
        <div className="w-full">
            {isAppendLabel && <label >What's your Email?</label>}
            <input  placeholder="Email"  />
        </div>
        <div className=" w-full">
            {isAppendLabel && <label >What's your Phone?</label>}
            <input className="w-full"  placeholder="Phone"  />
        </div>
        <div className="w-full">
            <button className={`${fromFixedComponent ? "btn-yellosh":"hover"} w-full`}>Submit</button>
        </div>
   </form> );
}

export default FormUser;