import React from 'react';

import {
  Group,
  Label,
  EmailInput,
  PasswordInput
} from '../../components/Forms';
import Button from '../../components/Button';
import Link from '../../components/Link';
import Error from '../../components/Error';

const Login = ({ login, error }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      login(
        e.target.email.value,
        e.target.password.value
      );
    }}
  >

    { error && <Error message={error} margin /> }

    <Group>
      <Label htmlFor="email">Email address</Label>
      <EmailInput
        name="email"
        placeholder="Enter your email address"
      />
    </Group>

    <Group>
      <Label htmlFor="password">Password</Label>
      <PasswordInput
        name="password"
        placeholder="Enter your password"
      />
    </Group>

    <Button submit>Login</Button>

    <span>
      <Link to="/login/reset">
        Forgotten your password?
      </Link>
    </span>

    <style jsx>{`
      span {
        display: inline-block;
        padding: 0 20px;
      }
    `}</style>
  </form>
);

export default Login;
