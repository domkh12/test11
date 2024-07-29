import React from "react"
export default function ContactUsComponent(){
    return(

    <div className="font-sans"name="ContactUs" >
      <div className="dark:bg-gray-900 dark:text-white">
         <section className="relative" >
  <img
    src="https://i.pinimg.com/originals/d8/37/40/d83740b7b6cf9fb1166e3c25eb1cced4.jpg"
    alt="Cityscape"
    className="w-full h-96 object-cover brightness-50"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <h1 className="text-4xl md:text-6xl text-white font-bold">CONTACT US</h1>
  </div>
        </section>
      </div>
       
  
        {/* Contact Section */}
        <div className="dark:bg-gray-900 dark:text-white">
          <section className="container mx-auto px-4 md:px-0 py-8 ">
          <div className="flex flex-col md:flex-row md:space-x-16">
            <div className="md:w-1/2 space-y-1 py-11">
              <p className="text-xl">Hello,</p>
              <p className="text-xl">Get in touch!</p>
              <p className="text-xl">Press inquiries, personal inquiries, commissions or collaborations...</p>
              <p className="text-xl">We are happy to hear from you!</p>
            </div>
            <div className="md:w-1/2">
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded dark:bg-gray-900  dark:text-white" />
                <input type="email" placeholder="Email*" className="w-full p-3 border border-gray-300 rounded dark:bg-gray-900  dark:text-white" />
                <textarea placeholder="Message*" className="w-full p-3 border border-gray-300 rounded h-32 dark:bg-gray-900  dark:text-white"></textarea>
                <button
                  type="submit"
                  className="w-full p-3 bg-black text-white rounded shadow-md hover:bg-gray-800 dark:hover:bg-black dark:bg-gray-800 dark:text-white "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className='text-center py-10'>
        <p>This site is protected by reCAPTCHA and the Google <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Service</a> apply.</p>
        <p>Kim Namwoon</p>
        </section>
        </div>
        
       
    </div>
    );
}