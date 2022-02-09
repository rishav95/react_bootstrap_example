function Contact() {
  return (
    <div className="c-contact">
      <form className="c-contact__form">
        <div class="form-group c-contact__input">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group c-contact__input">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>

        <div class="form-check c-contact__input">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
