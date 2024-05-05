import Image from "next/image"
import { Button } from "@nextui-org/react"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie";

export default function CookieModal() {
  const [isOpen, setOpen] = useState(false);
  
  useEffect(()=>{
    const hasAcceptCookie = new Cookies().get("cookieAccepted");
    if(!hasAcceptCookie){
      setTimeout(()=>{
        setOpen(true)
      }, 500)
    }
  }, [])

  const acceptCookie = () =>{
    const cookie = new Cookies();
    let expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDay() + 365)
    cookie.set('cookieAccepted', 'true', { expires: expiryDate });
    setOpen(false);
  }
  return (
    <>
    { isOpen &&
      <div className="fixed bottom-0 right-0 mb-4 mr-4 w-[300px] sm:w-[400px]">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Image src="https://www.svgrepo.com/show/401340/cookie.svg" alt="Cookie" className="h-6 w-6 mr-2" width={6} height={6}/>
              <span className="text-gray-700 font-bold text-sm">Cookie Policy</span>
            </div>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={()=>{setOpen(false)}}>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of
            cookies.
          </p>
          <Button variant="bordered" className="mt-4 text-gray-700 font-bold p-2 rounded" onPress={acceptCookie}>
            Accept
          </Button>
        </div>
      </div>
    }
    </>
  )
}