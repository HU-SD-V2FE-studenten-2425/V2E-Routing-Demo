import { LitElement, html } from "lit";
import { Router } from '@vaadin/router';
import { userController } from '../../controller/user-controller';

const HOME_PATH = import.meta.env.BASE_URL;

export class UserLogin extends LitElement {

  submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const selectedUser = Number(form.querySelector('select').value);
    
    console.log(selectedUser);
    
    userController.login(selectedUser)
    .then((user) => {
      Router.go(HOME_PATH);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return html`
      <h1>Login</h1>
      <form @submit=${this.submitHandler}>
        <label for="user">Select a user</label>
        <select id="user" name="user">
          <option value="1">User 1</option>
          <option value="2">User 2</option>
          <option value="3">User 3</option>
        </select>
        <button type="submit">Login</button>
      </form>
    `;
  }
}

customElements.define("user-login", UserLogin);
