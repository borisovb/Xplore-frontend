<template>
  <div class="container mx-auto px-4">
    <div class="signup__container">
      <div class="container__child signup__thumbnail">
        <div class="thumbnail__logo">
          <h1 class="logo__text">XPlore</h1>
        </div>
        <div class="thumbnail__content text-center">
          <h1 class="heading--primary">Welcome to XPlore</h1>
          <h2 class="heading--secondary">Are you ready to join the elite?</h2>
        </div>
        <div class="signup__overlay"></div>
      </div>
      <div class="container__child signup__form">
        <form action="#">
          <div class="form-group flex flex-col my-8 py-4 mb-4">
            <label class="mb-2" for="username">Username</label>
            <input
              id="username"
              class="form-control"
              type="text"
              name="username"
              placeholder="james.bond"
              required
            />
          </div>
          <div class="form-group flex flex-col mb-4">
            <label class="mb-2" for="password">Password</label>
            <input
              id="password"
              class="form-control"
              type="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div class="m-t-lg">
            <ul class="list-inline">
              <li>
                <input class="btn btn--form" type="submit" value="Login" />
              </li>
              <li>
                <a class="signup__link" href="signup">I am not registered</a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
// Remy function
@function remy($value) {
  @return ($value / 16px) * 1rem;
}

a,
[type='submit'] {
  transition: all 0.25s ease-in;
}
.signup__container {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
  transform: translateY(-50%);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: remy(800px);
  height: remy(480px);
  border-radius: remy(3px);
  box-shadow: 0px remy(3px) remy(7px) rgba(0, 0, 0, 0.25);
}
.signup__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.76);
}
.container__child {
  width: 50%;
  height: 100%;
  color: #fff;
}
.signup__thumbnail {
  position: relative;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: url(https://i.pinimg.com/474x/09/17/b4/0917b4fdfa19866fd0e545960fee11af--dont-blink-dr-who.jpg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
}
.thumbnail__logo,
.thumbnail__content,
.thumbnail__links {
  position: relative;
  z-index: 2;
}
.thumbnail__logo {
  align-self: flex-start;
}
.logo__shape {
  fill: #fff;
}
.logo__text {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  vertical-align: bottom;
}
.thumbnail__content {
  align-self: center;
}
h1,
h2 {
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
}
.heading--primary {
  font-size: 1.999rem;
}
.heading--secondary {
  font-size: 1.414rem;
}
.thumbnail__links {
  align-self: flex-end;
  width: 100%;
}
.thumbnail__links a {
  font-size: 1rem;
  color: #fff;
  &:focus,
  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
}
.signup__form {
  padding: 2.5rem;
  background: #fafafa;
}
label {
  font-size: 0.85rem;
  text-transform: uppercase;
  color: #ccc;
}
.form-control {
  background-color: transparent;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  &:focus {
    border-color: #111;
  }
}
[type='text'] {
  color: #111;
}
[type='password'] {
  color: #111;
}
.btn--form {
  padding: 0.5rem 2.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  background: #111;
  border-radius: remy(35px);
  &:focus,
  &:hover {
    background: lighten(#111, 13%);
  }
}
.signup__link {
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: underline;
  color: #999;
  &:focus,
  &:hover {
    color: darken(#999, 13%);
  }
}
</style>
