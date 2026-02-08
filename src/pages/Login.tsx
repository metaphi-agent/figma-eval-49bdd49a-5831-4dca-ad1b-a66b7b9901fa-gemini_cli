import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFB] flex items-center justify-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-[30px] shadow-[0px_4px_30px_rgba(0,0,0,0.05)] w-full max-w-[500px] text-center">
        <h1 className="text-3xl font-bold text-text-main mb-2">Sign In</h1>
        <p className="text-text-muted mb-8">Please login to continue to your account.</p>

        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
           <div>
              <label className="block text-sm font-bold text-text-main mb-2">Email Address</label>
              <input 
                type="email" 
                defaultValue="esteban_schiller@gmail.com" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main placeholder:text-gray-300"
              />
           </div>
           
           <div>
              <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-bold text-text-main">Password</label>
                  <Link to="/recover" className="text-xs font-bold text-[#B5B7C0] hover:text-primary transition-colors">Forgot Password?</Link>
              </div>
              <input 
                type="password" 
                defaultValue="password123" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-text-main placeholder:text-gray-300"
              />
           </div>
           
           <div className="flex items-center gap-2">
              <input type="checkbox" id="keep" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="keep" className="text-sm text-text-muted cursor-pointer select-none">Keep me logged in</label>
           </div>

           <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all cursor-pointer">
              Sign In
           </button>
        </form>
        
        <div className="mt-8">
            <p className="text-text-muted text-sm">Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
