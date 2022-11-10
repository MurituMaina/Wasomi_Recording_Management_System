import "./signup.css";

const Signup = () => {
  return (
       <div className="container">
      <div className="col-md-6 col-md-offset-3">
        <h2 className="text-center">Sign Up</h2>

        <form>
          <input name="email" type="text" label="Email" />
          <br />
          <input name="password" type="password" label="Password" />
          <br />
          <input
            name="passwordConfirmation"
            type="password"
            label="Password Confirmation"
          />
          <br />

          <button action="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
      <br />
    </div>
  );
};

export default Signup;
