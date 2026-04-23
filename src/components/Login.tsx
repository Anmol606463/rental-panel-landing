

export const Login = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc] flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8 font-sans">
      
      {/* Return to Home link (added for convenience since it's a SPA) */}
      <div className="absolute top-8 left-8">
        <a href="#" className="flex items-center space-x-2 text-[#1ce1c2] hover:text-teal-600 transition-colors">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain opacity-90" />
          <span className="text-xl font-light tracking-[0.15em]">SMART RENTAL</span>
        </a>
      </div>

      <div className="w-full sm:max-w-[400px]">
        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-sm shadow-sm">
          
          {/* Card Header */}
          <div className="bg-[#f5f5f5] border-b border-gray-200 px-5 py-3">
            <h2 className="text-[15px] font-normal text-gray-700">Login</h2>
          </div>

          {/* Card Body */}
          <div className="px-5 pt-5 pb-6 space-y-4">
            
            {/* Form Fields */}
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-[3px] text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
              />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full px-3 py-2 border border-gray-300 rounded-[3px] text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
              />
            </div>

            {/* reCAPTCHA Mock */}
            <div className="w-full bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] p-2 flex items-center justify-between shadow-sm mt-2">
              <div className="flex items-center space-x-3 pl-1">
                <div className="w-7 h-7 bg-white border border-gray-400 rounded-sm flex-shrink-0 cursor-pointer hover:shadow-inner"></div>
                <div className="flex flex-col">
                  <span className="text-[14px] text-gray-800">I'm not a robot</span>
                  <div className="text-[9px] text-gray-500 mt-0.5 leading-tight">
                    <p>reCAPTCHA is changing its terms of service.</p>
                    <a href="#" className="underline hover:text-gray-700">Take action.</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center pr-1">
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" className="w-[30px] opacity-80" alt="reCAPTCHA" />
                <span className="text-[9px] text-gray-500 mt-1">reCAPTCHA</span>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white text-[15px] py-2 rounded-[3px] transition-colors mt-2">
              Login
            </button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 text-[13px]">OR</span>
              </div>
            </div>

            {/* Google Login */}
            <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-[14px] py-2.5 rounded-[3px] flex items-center justify-center space-x-3 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-medium text-[13px] text-gray-700">Continue with Google</span>
            </button>
            
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-6">
          <p className="text-[13px] text-gray-600">
            Don't have an Account? <a href="#" className="text-[#337ab7] hover:underline">Signup</a>
          </p>
        </div>
        
      </div>
    </div>
  );
};
