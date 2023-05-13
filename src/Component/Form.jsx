import  { useEffect, useRef, useState } from "react"



const Form = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [valid, setValid] = useState(false)
  
  const noRef = useRef(null)
   useEffect(() => {
     setValid(name && email && password)
   }, [name,email,password])

   const handleSubmit = (event) => {
    event.preventDefault()
    if(valid){
      alert("Form Submitted")
      setName("")
      setEmail("")
      setPassword("")
      noRef.current.reset()
    }
   }
  
  return (
    <>
    <h2 className="text-center text-4xl pt-40 pb-10">Sign Up</h2>
    <div className="bg-slate-200  w-[25%] mx-auto rounded-md">
      
      <form ref={noRef} onSubmit={handleSubmit} className="mx-auto p-6 flex flex-col " >
        <label htmlFor="name">Name</label>
        <input onChange={(event) => setName(event.target.value)}  className="border-2 p-1 mt-1 mb-3 rounded-md focus:outline-blue-600"  type="text" id="name" value={name} required />
        <label htmlFor="email">Email</label>
        <input onChange={(event) => setEmail(event.target.value)} className="border-1 p-1 mt-1 mb-3 rounded-md focus:outline-blue-600 " type="email" id="email" required  />
        <label htmlFor="password">Password</label>
        <input onChange={(event) => setPassword(event.target.value)} className="border-2 p-1 mt-1 rounded-md focus:outline-blue-600 " type="password" id="password" required  />
        <div className="mx-auto ">
        <button type="submit"  className=" rounded-md bg-blue-600 text-white pt-2 pb-2 pl-4 pr-4 mt-6 hover:bg-blue-500 ">Sign Up</button>
        </div>
       
      </form>
    </div>
    </>
  )
}

export default Form
