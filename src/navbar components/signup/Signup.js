import "./signup.css";

const Signup = () => {
//   return <h1>hello</h1>;
 return (

   <div className="container">
     <div className="col-md-6 col-md-offset-3">
       <h2 className="text-center">Sign Up</h2>

       <form 
    //    onSubmit={this.props.handleSubmit(this.handleFormSubmit)}
       >
         <input name="email" type="text" label="Email" />
         <input name="password" type="password" label="Password" />
         <input
           name="passwordConfirmation"
           type="password"
           label="Password Confirmation"
         />

         <button action="submit" className="btn btn-primary">
           Sign up
         </button>
       </form>
     </div>
   </div>
 );
};

export default Signup;
